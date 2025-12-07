import { useState } from "react";
import MessageBubble from "./MessageBubble";

// ✅ Definimos un tipo para los mensajes
type Message = {
  sender: "user" | "bot";
  text: string;
};

export default function Chat() {
  // Inicializamos el estado con el tipo Message[]
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "¡Hola! Soy tu asistente virtual 🤖 ¿En qué te ayudo hoy?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Creamos los mensajes tipados correctamente
    const userMsg: Message = { sender: "user", text: input };
    const botReply: Message = {
      sender: "bot",
      text: "Estoy procesando tu mensaje (esto es solo frontend).",
    };

    // Actualizamos el estado
    setMessages([...messages, userMsg, botReply]);
    setInput("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white shadow-xl rounded-xl p-4">
      {/* Contenedor de mensajes */}
      <div className="h-[430px] overflow-y-auto mb-4 flex flex-col p-2">
        {messages.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Input y botón */}
      <div className="flex gap-3">
        <input
          className="flex-1 p-3 border rounded-xl bg-gray-100 focus:outline-blue-500"
          placeholder="Escribe un mensaje..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

interface Props {
  sender: "user" | "bot";
  text: string;
}

export default function MessageBubble({ sender, text }: Props) {
  const isUser = sender === "user";

  return (
    <div
      className={`max-w-[75%] p-3 rounded-xl mb-3 text-white ${
        isUser
          ? "bg-blue-600 self-end rounded-br-none"
          : "bg-gray-700 self-start rounded-bl-none"
      }`}
    >
      {text}
    </div>
  );
}

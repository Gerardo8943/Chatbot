import { motion } from "framer-motion";

export default function RobotLogo() {
  return (
    <div className="flex flex-col items-center mt-8 mb-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="w-32"
      >
        {/* SVG de robot caricatura */}
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          <rect x="40" y="60" width="120" height="100" rx="20" fill="#4f46e5" />
          <circle cx="80" cy="100" r="12" fill="white" />
          <circle cx="120" cy="100" r="12" fill="white" />
          <rect x="70" y="125" width="60" height="10" rx="5" fill="#312e81" />
          <rect x="80" y="30" width="40" height="25" rx="10" fill="#6366f1" />
        </svg>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-2xl font-bold text-gray-700 mt-4"
      >
        ¡Bienvenido!
      </motion.h1>
    </div>
  );
}

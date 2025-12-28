import { useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);

  useState(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= 120) {
        clearInterval(interval);
        setTimeout(() => onComplete(), 500);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <motion.div
        className="max-w-md w-full mx-4 p-8 rounded-3xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20 backdrop-blur-md shadow-2xl"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.p
          className="text-gray-300 text-center mb-4 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Measuring your cuteness...
        </motion.p>

        <motion.div
          className="text-7xl font-bold text-center bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent mb-6"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {count}%
        </motion.div>

        <div className="w-full h-4 bg-gray-800/50 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${count}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {count >= 100 && (
          <motion.div
            className="flex items-center justify-center gap-2 text-pink-400"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="text-2xl">⚠️</span>
            <span className="font-semibold">WARNING: TOO CUTE TO HANDLE</span>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

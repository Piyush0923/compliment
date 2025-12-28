import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

const message = `I just wanted to tell you something... you really are special in a way that's hard to explain. There's a softness in the way you talk, a sweetness in the way you smile, and something genuine about you that just feels good to be around. You don't try to be anything extra, you're just you, and that's what makes you so lovely.`;

export default function MessageScreen({ onNext }) {
  const [currentText, setCurrentText] = useState("");
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < message.length) {
        setCurrentText(message.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
        setShowButton(true);
      }
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <motion.div className="flex flex-col items-center justify-center relative max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl text-zinc-50 font-semibold leading-tight mb-8 text-center font-dancing-script"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A little note for you
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-md text-center relative p-6 rounded-2xl bg-white/5 border border-pink-500/15 text-foreground shadow-[0_0_20px_rgba(0,0,0,0.25)] backdrop-blur-md overflow-hidden mb-8 min-h-[200px]"
        >
          <p className="leading-relaxed text-left">
            {currentText}
            {!showButton && <span className="animate-pulse">|</span>}
          </p>
        </motion.div>

        {showButton && (
          <motion.div
            className="text-center relative z-10"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.button
              className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 text-lg rounded-full font-medium shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2 will-change-transform"
              onClick={onNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>One more thing</span>
              <MoveRight size={18} className="fill-current" />
            </motion.button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";

const compliments = [
  "You look adorable",
  "You have the sweetest vibe",
  "You make things feel lighter",
  "You are naturally charming",
  "You make everything feel more special",
];

export default function ComplimentsScreen({ onNext }) {
  const [revealed, setRevealed] = useState([]);

  const toggleReveal = (index) => {
    setRevealed(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <motion.div
        className="w-full max-w-xl mx-auto flex flex-col items-center gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* Center heart */}
        <motion.div
          className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500/15 to-rose-500/15 border border-pink-400/30 flex items-center justify-center backdrop-blur-md"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <Heart className="w-14 h-14 text-pink-400 fill-pink-400" />
        </motion.div>

        {/* Heading & Subtext */}
        <div>
          <motion.h2
            className="text-4xl md:text-5xl font-dancing-script text-zinc-50 font-semibold leading-tight text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            Just for you
          </motion.h2>
          <motion.p
            className="text-gray-400 text-center mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Tap each one to reveal
          </motion.p>
        </div>

        {/* Compliments */}
        <motion.div className="grid grid-cols-1 gap-4 w-full">
          {compliments.map((line, index) => (
            <motion.button
              key={index}
              onClick={() => toggleReveal(index)}
              className="relative px-6 py-4 rounded-2xl bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/20 text-sm md:text-base shadow-xl backdrop-blur-md overflow-hidden cursor-pointer transition-all hover:scale-102"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {!revealed.includes(index) ? (
                  <motion.div
                    key="heart"
                    className="flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
                  </motion.div>
                ) : (
                  <motion.p
                    key="text"
                    className="text-gray-200"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                  >
                    {line}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </motion.div>

        {/* Next button */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2 will-change-transform"
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>See more</span>
            <MoveRight size={20} className="fill-current" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}

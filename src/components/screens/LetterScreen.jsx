import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, MoveRight } from "lucide-react";

export default function LetterScreen({ onNext }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <motion.div className="flex flex-col items-center justify-center relative max-w-2xl">
        <motion.h2
          className="text-4xl md:text-5xl text-zinc-50 font-semibold leading-tight mb-12 text-center font-dancing-script"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          A little note for you
        </motion.h2>

        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="envelope"
              onClick={() => setIsOpen(true)}
              className="relative w-80 h-56 cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Envelope */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 rounded-3xl shadow-2xl overflow-hidden">
                {/* Hearts decoration */}
                <Heart className="absolute top-4 left-4 w-6 h-6 text-pink-500 fill-pink-500" />
                <Heart className="absolute top-4 right-4 w-6 h-6 text-pink-500 fill-pink-500" />
                
                {/* Envelope flap */}
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  {/* Seal */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Body */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                  <p className="text-pink-600 font-semibold text-lg">Tap to open</p>
                </div>
              </div>
            </motion.button>
          ) : (
            <motion.div
              key="next"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.button
                className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white px-10 py-4 text-lg rounded-full font-medium shadow-2xl hover:shadow-pink-500/25 transition-all flex items-center gap-2"
                onClick={onNext}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Continue</span>
                <MoveRight size={18} className="fill-current" />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

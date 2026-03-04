"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X, Send } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Mobile: sticky bottom bar */}
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-40 lg:hidden glass-strong border-t border-white/10 px-4 py-3 flex gap-3"
          >
            <a
              href="tel:+998555199119"
              className="flex-1 flex items-center justify-center gap-2 bg-brand-accent text-brand-900 font-bold py-3 rounded-xl"
            >
              <Phone size={18} />
              Позвонить
            </a>
            <a
              href="https://t.me/restom_clinic"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#2AABEE] text-white font-bold py-3 rounded-xl"
            >
              <Send size={18} />
              Telegram
            </a>
          </motion.div>

          {/* Desktop: floating button */}
          <div className="hidden lg:block fixed bottom-6 right-6 z-40">
            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.9 }}
                  className="absolute bottom-16 right-0 glass-strong rounded-2xl p-4 w-56 mb-2"
                >
                  <p className="text-white text-sm font-semibold mb-3">Свяжитесь с нами</p>
                  <div className="flex flex-col gap-2">
                    <a
                      href="tel:+998555199119"
                      className="flex items-center gap-3 text-sm text-brand-silver hover:text-brand-accent transition-colors py-2"
                    >
                      <Phone size={16} />
                      +998 55 519 9119
                    </a>
                    <a
                      href="https://t.me/restom_clinic"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-sm text-brand-silver hover:text-[#2AABEE] transition-colors py-2"
                    >
                      <Send size={16} />
                      Telegram
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setExpanded(!expanded)}
              className="w-14 h-14 rounded-full bg-[#2AABEE] text-white flex items-center justify-center shadow-lg animate-pulse-glow"
            >
              {expanded ? <X size={24} /> : <Send size={24} />}
            </motion.button>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

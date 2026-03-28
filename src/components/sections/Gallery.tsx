"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { useTranslation } from "@/i18n";
import { galleryCases } from "@/data/gallery";

const INITIAL_COUNT = 4;

function Lightbox({ photos, index, onClose, onPrev, onNext }: {
  photos: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <X size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 sm:left-6 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div className="relative z-10 w-[90vw] h-[80vh] max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-full h-full relative"
          >
            <Image
              src={photos[index]}
              alt={`Photo ${index + 1}`}
              fill
              className="object-contain"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-4 z-20 text-white/50 text-sm">
        {index + 1} / {photos.length}
      </div>
    </motion.div>
  );
}

export default function Gallery() {
  const [activeCase, setActiveCase] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [lightbox, setLightbox] = useState<{ photos: string[]; index: number } | null>(null);
  const { t } = useTranslation();

  const currentPhotos = galleryCases[activeCase].photos;
  const visiblePhotos = expanded ? currentPhotos : currentPhotos.slice(0, INITIAL_COUNT);
  const hasMore = currentPhotos.length > INITIAL_COUNT;

  const openLightbox = useCallback((index: number) => {
    setLightbox({ photos: currentPhotos, index });
  }, [currentPhotos]);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const prevPhoto = useCallback(() => {
    setLightbox((prev) => prev ? { ...prev, index: (prev.index - 1 + prev.photos.length) % prev.photos.length } : null);
  }, []);

  const nextPhoto = useCallback(() => {
    setLightbox((prev) => prev ? { ...prev, index: (prev.index + 1) % prev.photos.length } : null);
  }, []);

  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="container mx-auto px-4 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-brand-accent font-medium text-sm uppercase tracking-widest mb-3">
            {t("gallery.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-brand-silver max-w-2xl mx-auto text-lg">
            {t("gallery.subtitle")}
          </p>
        </motion.div>

        {/* Case tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-4 mb-6 -mx-4 px-4">
          {galleryCases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => { setActiveCase(i); setExpanded(false); }}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 shrink-0 ${
                activeCase === i ? "bg-brand-accent text-brand-900" : "glass text-brand-silver hover:text-white"
              }`}
            >
              {t("gallery.case")} {i + 1}
            </button>
          ))}
        </div>

        {/* Photo grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
          >
            {visiblePhotos.map((photo, i) => (
              <motion.div
                key={photo}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openLightbox(i)}
              >
                <Image
                  src={photo}
                  alt={`Case photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Expand button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-brand-silver hover:text-white font-medium text-sm transition-all hover:scale-[1.03] active:scale-[0.97]"
            >
              {expanded ? t("gallery.showLess") : t("gallery.showMore")}
              <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} />
              </motion.span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            photos={lightbox.photos}
            index={lightbox.index}
            onClose={closeLightbox}
            onPrev={prevPhoto}
            onNext={nextPhoto}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

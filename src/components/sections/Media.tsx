"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import Image from "next/image";
import { Youtube, Instagram, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n";

const instagramReels = [
  { shortcode: "DU28pggiAi0", title: "Reel 1", thumbnail: "/instagram/reel-1.png" },
  { shortcode: "DUSuOYlCPmM", title: "Reel 2", thumbnail: "/instagram/reel-2.png" },
  { shortcode: "DON6_BuCB7R", title: "Reel 3", thumbnail: "/instagram/reel-3.png" },
  { shortcode: "DIJlESFo3A4", title: "Reel 4", thumbnail: "/instagram/reel-4.png" },
];

function getIndex(i: number, len: number) {
  return ((i % len) + len) % len;
}

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
};

function ReelThumbnail({ src, alt }: { src: string; alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-pink-500/20 bg-brand-800 flex items-center justify-center">
        <Play size={40} className="text-white/30" />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      onError={() => setError(true)}
    />
  );
}

export default function Media() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  const [unlocked, setUnlocked] = useState(false);
  const { t } = useTranslation();

  const youtubeVideos = [
    { id: "XJRWQADDzNY", title: t("media.video1"), type: "short" as const },
    { id: "iGvmMBsTC2A", title: t("media.video2"), type: "short" as const },
    { id: "xAnNqR4Ly2I", title: t("media.video3"), type: "short" as const },
    { id: "FCexd9mlI6Y", title: t("media.video4"), type: "video" as const },
  ];

  const len = youtubeVideos.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setActive(prev => getIndex(prev + dir, len));
    setUnlocked(false);
  }, [len]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) go(1);
    else if (info.offset.x > 50) go(-1);
  };

  const current = youtubeVideos[active];
  const isShort = current.type === "short";

  return (
    <section className="py-20 md:py-28 bg-brand-900">
      <div className="container mx-auto px-4 md:px-12">
        {/* YouTube Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Youtube size={20} className="text-red-500" />
            <p className="text-brand-accent font-medium text-sm uppercase tracking-widest">{t("media.videoLabel")}</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{t("media.videoTitle")}</h2>
          <p className="text-brand-silver max-w-2xl mx-auto">
            {t("media.videoSubtitle")}
          </p>
        </motion.div>

        {/* Video Carousel */}
        <div className="relative flex items-center justify-center mb-20">
          <div className="relative w-full flex items-center justify-center">
            <button
              onClick={() => go(-1)}
              className="hidden md:flex absolute left-0 lg:left-[5%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="overflow-hidden w-full flex justify-center">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={handleDragEnd}
                  className={`glass rounded-2xl overflow-hidden cursor-grab active:cursor-grabbing ${
                    isShort ? "w-[320px] sm:w-[360px]" : "w-full max-w-3xl"
                  }`}
                >
                  <div className={`relative bg-brand-800 ${isShort ? "aspect-[9/16] max-h-[80vh]" : "aspect-video"}`}>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${current.id}`}
                      title={current.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      className="absolute inset-0 w-full h-full"
                      style={{ pointerEvents: unlocked ? "auto" : "none" }}
                    />
                    {!unlocked && (
                      <div
                        className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer"
                        onClick={() => setUnlocked(true)}
                      >
                        <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-lg shadow-black/40">
                          <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7 ml-1"><polygon points="8,5 19,12 8,19" /></svg>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 pointer-events-none">
                      <h4 className="text-white font-semibold text-sm">{current.title}</h4>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={() => go(1)}
              className="hidden md:flex absolute right-0 lg:right-[5%] top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm items-center justify-center text-white/70 hover:text-white hover:bg-white/20 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 -mt-14 mb-20">
          {youtubeVideos.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > active ? 1 : -1); setActive(i); }}
              className={`w-2 h-2 rounded-full transition-all ${
                i === active ? "bg-brand-accent w-6" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* Instagram Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram size={20} className="text-pink-500" />
            <p className="text-brand-accent font-medium text-sm uppercase tracking-widest">Instagram</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("media.instaTitle")}</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          {instagramReels.map((reel, i) => (
            <motion.a
              key={reel.shortcode}
              href={`https://www.instagram.com/reel/${reel.shortcode}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass aspect-[9/16] rounded-2xl overflow-hidden group relative hover:scale-[1.03] transition-transform duration-300"
            >
              <ReelThumbnail src={reel.thumbnail} alt={reel.title} />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center gap-2">
                <Play size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" fill="white" />
                <Instagram size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
              </div>
            </motion.a>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.instagram.com/restom.dental.clinic"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
          >
            <Instagram size={18} />
            @restom.dental.clinic
          </a>
          <a
            href="https://www.instagram.com/dr.farkhod_usmanov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors text-sm"
          >
            <Instagram size={18} />
            @dr.farkhod_usmanov
          </a>
        </div>
      </div>
    </section>
  );
}

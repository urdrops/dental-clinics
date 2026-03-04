"use client";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 15 * position} -${189 + i * 18}C-${
      380 - i * 15 * position
    } -${189 + i * 18} -${312 - i * 15 * position} ${216 - i * 18} ${
      152 - i * 15 * position
    } ${343 - i * 18}C${616 - i * 15 * position} ${470 - i * 18} ${
      684 - i * 15 * position
    } ${875 - i * 18} ${684 - i * 15 * position} ${875 - i * 18}`,
    width: 0.5 + i * 0.08,
    opacity: 0.04 + i * 0.035,
    duration: 4 + i * 1,
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full text-brand-accent pointer-events-none"
      viewBox="0 0 696 316"
      fill="none"
    >
      {paths.map((path) => (
        <path
          key={path.id}
          d={path.d}
          stroke="currentColor"
          strokeWidth={path.width}
          strokeOpacity={path.opacity}
          strokeDasharray="800"
          strokeDashoffset="800"
          className="animate-path-draw"
          style={{
            animationDuration: `${path.duration}s`,
            animationDelay: `-${path.id * 2}s`,
          }}
        />
      ))}
    </svg>
  );
}

export default function BackgroundPaths() {
  return (
    <div className="absolute inset-0">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}

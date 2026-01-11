"use client";

import { motion } from "framer-motion";

interface PulseDotProps {
  x: number;
  y: number;
  delay?: number;
}

function PulseDot({ x, y, delay = 0 }: PulseDotProps) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {/* Outer ripple */}
      <motion.circle
        cx="0"
        cy="0"
        r="8"
        fill="#0a9396"
        opacity={0.3}
        animate={{
          scale: [1, 2.5, 2.5],
          opacity: [0.3, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "easeOut",
        }}
      />
      {/* Middle ripple */}
      <motion.circle
        cx="0"
        cy="0"
        r="6"
        fill="#0a9396"
        opacity={0.5}
        animate={{
          scale: [1, 2, 2],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay + 0.3,
          ease: "easeOut",
        }}
      />
      {/* Core dot */}
      <motion.circle
        cx="0"
        cy="0"
        r="4"
        fill="#0a9396"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    </g>
  );
}

interface StatBadgeProps {
  label: string;
  count: number;
  delay?: number;
}

function StatBadge({ label, count, delay = 0 }: StatBadgeProps) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.3 }}
    >
      <motion.span
        className="text-white font-sans font-bold text-sm"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      >
        {count}
      </motion.span>
      <span className="text-white/80 font-sans text-xs">{label}</span>
      <motion.div
        className="w-2 h-2 bg-secondary rounded-full"
        animate={{
          opacity: [1, 0.3, 1],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}

export default function GlobalHeatmap() {
  // Approximate coordinates for countries on a simplified world map
  // These are relative positions on a 400x200 SVG viewBox
  const locations = {
    brazil: { x: 200, y: 140 },
    usa: { x: 120, y: 90 },
    uk: { x: 180, y: 60 },
    eu: { x: 190, y: 70 },
  };

  return (
    <section className="bg-primary py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold leading-tight">
              Always On. Always Watching.
            </h2>
            <p className="font-sans text-white/70 text-xl lg:text-2xl leading-relaxed">
              Real-time regulatory surveillance across 52 jurisdictions.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-4 pt-4">
              <StatBadge label="Updates (EU)" count={14} delay={0} />
              <StatBadge label="Updates (Brazil)" count={3} delay={0.2} />
              <StatBadge label="Update (Japan)" count={1} delay={0.4} />
            </div>
          </motion.div>

          {/* Right Side - World Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <svg
                viewBox="0 0 400 200"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Simplified World Map - Continents as outlines */}
                {/* North America */}
                <path
                  d="M 80 40 L 120 30 L 140 50 L 130 80 L 100 90 L 80 70 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
                {/* South America */}
                <path
                  d="M 180 100 L 200 90 L 210 120 L 200 150 L 180 160 L 170 140 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
                {/* Europe */}
                <path
                  d="M 180 50 L 220 45 L 230 70 L 220 85 L 200 90 L 180 75 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
                {/* Asia */}
                <path
                  d="M 240 40 L 300 35 L 320 60 L 310 90 L 280 100 L 250 85 L 240 65 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
                {/* Africa */}
                <path
                  d="M 200 80 L 230 75 L 240 110 L 230 140 L 210 145 L 200 120 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />
                {/* Australia */}
                <path
                  d="M 280 130 L 310 125 L 315 145 L 300 150 L 280 145 Z"
                  fill="none"
                  stroke="#0a9396"
                  strokeWidth="1.5"
                  strokeDasharray="3,3"
                  opacity="0.4"
                />

                {/* Animated Pulse Dots */}
                <PulseDot x={locations.usa.x} y={locations.usa.y} delay={0} />
                <PulseDot x={locations.uk.x} y={locations.uk.y} delay={0.5} />
                <PulseDot x={locations.eu.x} y={locations.eu.y} delay={1} />
                <PulseDot x={locations.brazil.x} y={locations.brazil.y} delay={1.5} />
              </svg>

              {/* Legend */}
              <div className="mt-6 flex items-center justify-center gap-6 text-white/60 text-xs font-sans">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span>Active Surveillance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-white/40 rounded-full"></div>
                  <span>52 Jurisdictions</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

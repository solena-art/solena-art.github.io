"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PulseDotProps {
  style: { top: string; left: string };
  delay?: number;
}

function PulseDot({ style, delay = 0 }: PulseDotProps) {
  return (
    <motion.div
      className="absolute w-3 h-3 bg-secondary rounded-full"
      style={{ ...style, transform: 'translate(-50%, -50%)' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.3, 1, 0.3],
        scale: [1, 1.5, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {/* Outer ripple effect */}
      <motion.div
        className="absolute inset-0 bg-secondary rounded-full"
        animate={{
          scale: [1, 2.5, 2.5],
          opacity: [0.4, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
}

interface StatBadgeProps {
  label: string;
  value: string;
  delay?: number;
}

function StatBadge({ label, value, delay = 0 }: StatBadgeProps) {
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
        {value}
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
  const stats = [
    { id: 1, value: '14', label: 'Updates (EU)' },
    { id: 2, value: '3', label: 'Updates (Brazil)' },
    { id: 3, value: '1', label: 'Update (Japan)' },
  ];

  // Adjusted coordinates for the 1280x800 Globe Image
  const hotspots = [
    { 
      id: 1, 
      name: 'USA', 
      style: { top: '32%', left: '22%' }  // Adjusted for North America
    },
    { 
      id: 2, 
      name: 'Brazil', 
      style: { top: '65%', left: '31%' }  // Moved Right to hit South America
    },
    { 
      id: 3, 
      name: 'EU', 
      style: { top: '28%', left: '51%' }  // Moved Down/Right slightly for Europe
    },
    { 
      id: 4, 
      name: 'Japan', 
      style: { top: '35%', left: '86%' }  // Far East
    },
    { 
      id: 5, 
      name: 'Australia', 
      style: { top: '75%', left: '85%' }  // Bottom Right
    }
  ];

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
              {stats.map((stat, index) => (
                <StatBadge
                  key={stat.id}
                  label={stat.label}
                  value={stat.value}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - World Map Image with Overlay Dots */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-2xl">
              <Image
                src="/globe.jpg"
                alt="Global Regulatory Surveillance Map"
                width={1280}
                height={800}
                className="w-full h-auto object-contain mix-blend-screen"
                unoptimized
              />
              {/* Pulsing Dots Overlay */}
              {hotspots.map((hotspot, index) => (
                <PulseDot
                  key={hotspot.id}
                  style={hotspot.style}
                  delay={index * 0.5}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

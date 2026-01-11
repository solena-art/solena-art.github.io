"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Hero() {
  const [animationPhase, setAnimationPhase] = useState<"typing" | "processing" | "result">("typing");
  const [typedText, setTypedText] = useState("");
  const query = "Query: Labeling requirements for Class IIb in Brazil?";

  // Typewriter effect
  useEffect(() => {
    if (animationPhase === "typing") {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex < query.length) {
          setTypedText(query.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => setAnimationPhase("processing"), 1000);
        }
      }, 50);
      return () => clearInterval(typingInterval);
    }
  }, [animationPhase, query]);

  // Transition from processing to result
  useEffect(() => {
    if (animationPhase === "processing") {
      const timer = setTimeout(() => {
        setAnimationPhase("result");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  // Auto-cycle animation back to typing
  useEffect(() => {
    if (animationPhase === "result") {
      const timer = setTimeout(() => {
        setAnimationPhase("typing");
        setTypedText("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [animationPhase]);

  return (
    <section className="min-h-screen bg-background flex items-center py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="font-serif text-primary text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              The End of Regulatory Guesswork.
            </h1>
            <p className="font-sans text-text text-xl lg:text-2xl leading-relaxed opacity-90">
              Navigate the Global Regulatory Singularity with the only RAG-based intelligence engine that cites its sources. Zero hallucinations. 100% Audit-Ready.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Request Audit
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side - Glass Box Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl p-8 min-h-[500px] overflow-hidden">
              {/* Glass layers effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent rounded-2xl pointer-events-none" />

              {/* Query Section */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-xs font-sans text-text/60 uppercase tracking-wider">Query</span>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-primary/20 rounded-lg p-4">
                  <p className="font-sans text-text text-sm leading-relaxed">
                    {typedText}
                    {animationPhase === "typing" && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        className="inline-block w-2 h-4 bg-text ml-1"
                      />
                    )}
                  </p>
                </div>
              </div>

              {/* Processing State */}
              <AnimatePresence>
                {animationPhase === "processing" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        className="w-2 h-2 bg-secondary rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.7, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <span className="text-xs font-sans text-text/60 uppercase tracking-wider">Processing</span>
                    </div>
                    <motion.div
                      className="bg-white/50 backdrop-blur-md border border-secondary/30 rounded-lg p-6 relative"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(10, 147, 150, 0.4)",
                          "0 0 0 10px rgba(10, 147, 150, 0)",
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    >
                      <div className="flex items-center justify-center py-8">
                        <div className="flex gap-2">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-secondary rounded-full"
                              animate={{
                                y: [0, -10, 0],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-center text-text/60 text-sm font-sans">
                        Analyzing regulatory requirements...
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Result Card */}
              <AnimatePresence>
                {animationPhase === "result" && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-2 h-2 bg-secondary rounded-full" />
                      <span className="text-xs font-sans text-text/60 uppercase tracking-wider">Response</span>
                    </div>
                    <motion.div
                      className="bg-white/50 backdrop-blur-md border border-secondary/30 rounded-lg p-6 relative"
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="font-sans text-text text-sm leading-relaxed mb-4">
                        Requirement: Must adhere to{" "}
                        <span className="text-secondary font-semibold">RDC 751</span> for Class IIb devices in Brazil. All labels must be in{" "}
                        <span className="text-secondary font-semibold">Brazilian Portuguese</span> and include the ANVISA registration number.
                      </p>
                      
                      {/* Citation Chip */}
                      <motion.div
                        className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/40 rounded-full px-4 py-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                      >
                        <span className="text-secondary text-xs font-semibold font-sans">
                          Source: ANVISA RDC 751
                        </span>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Medical instrument aesthetic - precision indicators */}
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.div
                  className="w-1.5 h-1.5 bg-secondary rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-sans text-secondary/80 font-semibold">98.6% Accuracy</span>
              </div>
              
              <div className="absolute bottom-4 left-4 text-xs font-sans text-text/40">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 bg-secondary rounded-full" />
                  <span>Audit-Ready • Zero Hallucinations</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-background pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-primary text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The Truth Engine.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
          >
            A proprietary Retrieval-Augmented Generation architecture designed for zero-tolerance regulatory environments.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-20">
        {/* Feature A: The Search - Deep Retrieval */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold">
              Deep Retrieval
            </h2>
            <p className="font-sans text-text text-lg leading-relaxed">
              SOLENA scans thousands of global regulatory documents across major government databases, extracting precise citations with cryptographic verification. Every answer is tethered to its source document.
            </p>
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-sans text-text">ANVISA (Brazil)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-sans text-text">FDA (United States)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-sans text-text">MDR/IVDR (European Union)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-sans text-text">PMDA (Japan)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span className="font-sans text-text">+ 67 more jurisdictions</span>
              </div>
            </div>
          </motion.div>

          {/* Visual: Scanning PDFs */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                <span className="font-sans text-text/60 text-sm uppercase tracking-wide">Scanning 71+ Categories</span>
              </div>
              
              {/* PDF Stack Visualization */}
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded border-l-4 border-secondary"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div className="flex-1">
                      <div className="h-2 bg-primary/20 rounded w-full mb-1"></div>
                      <div className="h-2 bg-primary/10 rounded w-3/4"></div>
                    </div>
                    <motion.div
                      className="w-4 h-4 bg-secondary rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Feature B: The Synthesis - Citation Tethering */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual: Citation Lines */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 order-2 lg:order-1"
          >
            <div className="relative h-64">
              {/* Response Text */}
              <div className="absolute top-0 left-0 right-0 bg-gray-50 rounded-lg p-4 border-2 border-secondary/30">
                <p className="font-sans text-text text-sm mb-3">
                  Class IIb devices require comprehensive labeling per{" "}
                  <span className="text-secondary font-semibold">RDC 751/2022</span>.
                </p>
                {/* Citation Chips */}
                <div className="flex gap-2">
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full font-sans font-semibold">
                    [1]
                  </span>
                  <span className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full font-sans font-semibold">
                    [2]
                  </span>
                </div>
              </div>

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 200">
                <motion.line
                  x1="50"
                  y1="80"
                  x2="100"
                  y2="150"
                  stroke="#0a9396"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.line
                  x1="120"
                  y1="80"
                  x2="200"
                  y2="150"
                  stroke="#0a9396"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
              </svg>

              {/* Source Documents */}
              <div className="absolute bottom-0 left-0 right-0 space-y-2">
                <div className="bg-primary/10 rounded p-3 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-sans text-text text-xs">ANVISA_RDC_751_2022.pdf</span>
                  </div>
                </div>
                <div className="bg-primary/10 rounded p-3 border border-primary/20">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="font-sans text-text text-xs">ANVISA_Annex_II_2022.pdf</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold">
              Citation Tethering
            </h2>
            <p className="font-sans text-text text-lg leading-relaxed">
              Every claim in SOLENA's responses is directly connected to its source document. Click any citation chip to see the exact regulation, article, and paragraph—no hallucinations, no guesswork.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-secondary">
              <p className="font-sans text-text/70 text-sm italic">
                "The system doesn't just tell you what the regulation says—it shows you exactly where it says it, with cryptographic proof."
              </p>
            </div>
          </motion.div>
        </section>

        {/* Feature C: Global Reach */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary text-white rounded-2xl shadow-xl p-12 text-center"
        >
          <h2 className="font-serif text-white text-4xl lg:text-5xl font-bold mb-6">
            52 Jurisdictions. 1 Interface.
          </h2>
          <p className="font-sans text-white/90 text-xl leading-relaxed max-w-3xl mx-auto mb-8">
            From ANVISA to FDA, from MDR to PMDA—SOLENA provides a unified interface to navigate the global regulatory landscape. No more switching between 52 different government portals.
          </p>
          
          {/* Jurisdiction Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-12">
            {["USA", "EU", "Brazil", "Japan", "China", "Canada", "Australia", "UK", "South Korea", "India", "Mexico", "Singapore"].map((country, index) => (
              <motion.div
                key={country}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <p className="font-sans text-white font-semibold text-sm">{country}</p>
              </motion.div>
            ))}
          </div>
          <p className="font-sans text-white/70 text-sm mt-6">
            + 40 more jurisdictions supported
          </p>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

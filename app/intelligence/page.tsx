"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IntelligencePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-primary text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            The Intelligence Center.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
          >
            Data-driven insights on the regulatory landscape. From the 2027 EU MDR Cliff to daily recall patterns.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-16">
        {/* Featured Resource: The 2027 Cliff */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 text-white rounded-2xl shadow-xl p-8 lg:p-12"
        >
          <div className="max-w-3xl">
            <h2 className="font-serif text-white text-3xl lg:text-4xl font-bold mb-4">
              Whitepaper: The 2027 Extinction Event.
            </h2>
            <p className="font-sans text-white/80 text-lg leading-relaxed mb-8">
              Why 30% of legacy devices will vanish from the EU market in 2027—and how to ensure yours isn't one of them.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-secondary text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                Download Gap Analysis
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Recall Radar Grid */}
        <section>
          <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold mb-8 text-center">
            Live Recall Patterns (2025-2026)
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Software */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-alert"
            >
              <h3 className="font-serif text-primary text-xl font-bold mb-3">
                Software Labeling Errors up 200%
              </h3>
              <p className="font-sans text-text/70 text-sm leading-relaxed">
                <span className="font-semibold text-text">Insight:</span> AI-generated code requires human validation.
              </p>
            </motion.div>

            {/* Card 2: Packaging */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-alert"
            >
              <h3 className="font-serif text-primary text-xl font-bold mb-3">
                Sterile Barrier Breaches
              </h3>
              <p className="font-sans text-text/70 text-sm leading-relaxed">
                <span className="font-semibold text-text">Insight:</span> New ISO 11607 standards are catching legacy packaging.
              </p>
            </motion.div>

            {/* Card 3: Cybersecurity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-alert"
            >
              <h3 className="font-serif text-primary text-xl font-bold mb-3">
                FDA Refuse-to-Accept (RTA) Spike
              </h3>
              <p className="font-sans text-text/70 text-sm leading-relaxed">
                <span className="font-semibold text-text">Insight:</span> Missing SBOMs are the #1 cause of rejection this quarter.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Interactive Tool Teaser */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 lg:p-12"
        >
          <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold mb-4">
            Predicate Device Search
          </h2>
          <p className="font-sans text-text text-lg leading-relaxed mb-8">
            Find your 510(k) predicate in seconds, not hours. Search by Code, Regulation, or Description.
          </p>
          
          {/* Search Bar UI */}
          <div className="max-w-2xl">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search by Code, Regulation, or Description..."
                className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-sans font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
                >
                  Search OpenFDA
                </Link>
              </motion.div>
            </div>
            <p className="mt-4 font-sans text-text/60 text-sm">
              Powered by FDA's OpenFDA API • Real-time regulatory data
            </p>
          </div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

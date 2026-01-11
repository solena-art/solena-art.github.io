"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SolutionsPage() {
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
            Precision for Every Pivot.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto"
          >
            Whether entering a new market or managing a supplier change, SOLENA isolates the regulatory impact instantly.
          </motion.p>
          
          {/* Visual: Filter to Checkmark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex justify-center"
          >
            <div className="relative w-24 h-24">
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  opacity: [1, 0, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <svg className="w-16 h-16 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </motion.div>
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              >
                <svg className="w-16 h-16 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-20">
        {/* Feature Block A: Market Entry & The Brazil Barrier */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold">
              Market Entry: Survive the 'One Strike' Standard.
            </h2>
            <p className="font-sans text-text text-lg leading-relaxed">
              In markets like Brazil (ANVISA), a single formatting error can delay revenue by 12 months. SOLENA's Pre-Submission Validator checks against 1,500+ administrative rejection criteria before you submit.
            </p>
          </motion.div>

          {/* Document Health Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg border-2 border-alert p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <svg className="w-8 h-8 text-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="font-sans text-text font-semibold">Technical_File_v2.pdf</span>
                </div>
              </div>
              
              <div className="bg-alert/10 border-l-4 border-alert p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🔴</span>
                  <span className="font-sans font-bold text-alert">CRITICAL ERROR DETECTED</span>
                </div>
                <p className="font-sans text-text text-sm">
                  Missing ICP-Brasil Digital Signature on Page 4.
                </p>
              </div>
              
              <button className="w-full bg-primary text-white px-6 py-3 rounded-lg font-sans font-semibold hover:opacity-90 transition-opacity">
                Fix Now
              </button>
            </div>
          </motion.div>
        </section>

        {/* Feature Block B: Change Management (The Ripple Effect) */}
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Visual: Mini-map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <span className="font-sans text-text font-semibold">Change Material Supplier</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary"></div>
                </label>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🇺🇸</span>
                  <div className="flex-1">
                    <span className="font-sans text-text font-semibold">USA:</span>
                    <span className="ml-2 font-sans text-secondary font-semibold">🟢 Letter to File</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🇪🇺</span>
                  <div className="flex-1">
                    <span className="font-sans text-text font-semibold">EU:</span>
                    <span className="ml-2 font-sans text-alert font-semibold">🔴 NB Review Required</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-2xl">🇨🇳</span>
                  <div className="flex-1">
                    <span className="font-sans text-text font-semibold">China:</span>
                    <span className="ml-2 font-sans text-alert font-semibold">🟡 Modification Registration</span>
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
              Change Management: One Tweak, Global Impact.
            </h2>
            <p className="font-sans text-text text-lg leading-relaxed">
              Changing a material supplier? See the global ripple effect instantly. SOLENA maps the regulatory consequence of every change across 52 jurisdictions.
            </p>
          </motion.div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center py-16 bg-white rounded-2xl shadow-lg"
        >
          <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold mb-6">
            Stop reacting to regulations. Start predicting them.
          </h2>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
            >
              Request Audit
            </Link>
          </motion.div>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

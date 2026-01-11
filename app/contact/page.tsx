"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    interests: [] as string[],
    message: "",
    terms: false,
    eu_confirmation: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name === "interests[]") {
      const value = e.target.value;
      setFormData((prev) => ({
        ...prev,
        interests: checked
          ? [...prev.interests, value]
          : prev.interests.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-background pt-32">
        <div className="container mx-auto max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-primary text-4xl lg:text-5xl font-bold leading-tight mb-6"
          >
            Transform Your Business with AI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-sans text-text text-xl leading-relaxed"
          >
            Schedule a demo to see how our AI platform can drive your success in sales, marketing, and regulatory affairs.
          </motion.p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <svg className="w-16 h-16 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="font-serif text-primary text-xl font-bold mb-2">Email Us</h3>
              <a href="mailto:info@solenamedical.com" className="font-sans text-secondary hover:opacity-80 transition-opacity">
                info@solenamedical.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-serif text-primary text-3xl font-bold mb-6">Request a Demo</h2>
              
              {/* Important Notice */}
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-sans text-blue-800 text-sm">
                      <strong>Important Notice:</strong> Our services are currently not available to EU/EEA residents due to regulatory requirements. If you are based in the EU/EEA, please check back for future availability or contact our authorized EU vendors.
                    </p>
                  </div>
                </div>
              </div>

              <form
                action="https://formspree.io/f/xwpojgon"
                method="POST"
                className="space-y-6"
              >
                <input type="hidden" name="_subject" value="New Demo Request from SOLENA Website" />
                <input type="hidden" name="_next" value="/confirmation.html" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_language" value="en" />
                <input type="hidden" name="_autoresponse" value="Thank you for your interest in SOLENA. We have received your demo request and will contact you shortly." />

                <div>
                  <label htmlFor="name" className="block font-sans text-text font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block font-sans text-text font-semibold mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-sans text-text font-semibold mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-sans text-text font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block font-sans text-text font-semibold mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  >
                    <option value="">Select your industry</option>
                    <option value="cosmetics">Cosmetics</option>
                    <option value="diagnostics">Diagnostics</option>
                    <option value="medtech">Medtech</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block font-sans text-text font-semibold mb-3">
                    Areas of Interest
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 font-sans text-text">
                      <input
                        type="checkbox"
                        name="interests[]"
                        value="sales"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        onChange={handleCheckboxChange}
                      />
                      Sales Intelligence
                    </label>
                    <label className="flex items-center gap-2 font-sans text-text">
                      <input
                        type="checkbox"
                        name="interests[]"
                        value="marketing"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        onChange={handleCheckboxChange}
                      />
                      Marketing Intelligence
                    </label>
                    <label className="flex items-center gap-2 font-sans text-text">
                      <input
                        type="checkbox"
                        name="interests[]"
                        value="regulatory"
                        className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
                        onChange={handleCheckboxChange}
                      />
                      Regulatory Intelligence
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sans text-text font-semibold mb-2">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg font-sans text-text focus:outline-none focus:border-primary transition-colors"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-2 font-sans text-text text-sm">
                    <input
                      type="checkbox"
                      id="termsCheck"
                      name="terms"
                      required
                      className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span>
                      I have read and agree to the{" "}
                      <a href="/terms" className="text-primary hover:underline" target="_blank">
                        Terms of Service
                      </a>
                    </span>
                  </label>

                  <label className="flex items-start gap-2 font-sans text-text text-sm">
                    <input
                      type="checkbox"
                      id="euCheck"
                      name="eu_confirmation"
                      required
                      className="w-4 h-4 mt-1 text-primary border-gray-300 rounded focus:ring-primary"
                      onChange={handleCheckboxChange}
                    />
                    <span>I confirm that I am not a resident of the EU/EEA *</span>
                  </label>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-primary text-white px-8 py-4 rounded-lg font-sans font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Schedule Demo
                </motion.button>
              </form>
            </div>

            {/* Why Choose SOLENA */}
            <div>
              <h2 className="font-serif text-primary text-3xl font-bold mb-8">Why Choose SOLENA?</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-primary text-xl font-bold mb-2">Advanced AI Technology</h3>
                  <p className="font-sans text-text/70">
                    Our proprietary AI platform combines machine learning, NLP, and predictive analytics to deliver actionable insights.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-primary text-xl font-bold mb-2">Compliance-First Approach</h3>
                  <p className="font-sans text-text/70">
                    HIPAA and GDPR compliant infrastructure with SOC 2 Type II certification for data security.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="font-serif text-primary text-xl font-bold mb-2">Proven Results</h3>
                  <p className="font-sans text-text/70">
                    Join leading healthcare and cosmetics manufacturers who have transformed their business with our AI solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

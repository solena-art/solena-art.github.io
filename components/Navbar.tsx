"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="hover:opacity-90 transition-opacity flex items-center">
            <Image
              src="/LOGO.png"
              alt="SOLENA Regulatory Intelligence"
              height={32}
              width={120}
              className="h-4 md:scale-80 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/platform" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
              Platform
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
              Solutions
            </Link>
            <Link href="/intelligence" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
              Intelligence
            </Link>
            <Link href="/trust" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
              Trust
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-sans">
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-primary text-white px-6 py-2 rounded-lg font-sans font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
          >
            Request Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4 pt-4">
              <Link
                href="/platform"
                className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                Platform
              </Link>
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/intelligence"
                className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                Intelligence
              </Link>
              <Link
                href="/trust"
                className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                Trust
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-gray-900 transition-colors font-sans"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-primary text-white px-6 py-2 rounded-lg font-sans font-semibold hover:opacity-90 transition-opacity shadow-md hover:shadow-lg text-center"
                onClick={() => setIsOpen(false)}
              >
                Request Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

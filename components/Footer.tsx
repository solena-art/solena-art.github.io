import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <span className="font-serif text-2xl font-bold text-white tracking-wide">SOLENA</span>
            </Link>
            <p className="font-serif text-gray-400 text-lg italic">
              AI driven Intelligence Solution
            </p>
          </div>

          {/* Platform Column */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Platform
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/platform"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/intelligence"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href="/trust"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Trust
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="font-sans text-white/70 hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Certifications Column */}
          <div>
            <h3 className="font-sans font-semibold text-white mb-4 uppercase tracking-wide text-sm">
              Certifications
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center grayscale">
                  <span className="font-serif text-white text-xs font-bold">SOC</span>
                </div>
                <div>
                  <p className="font-sans text-white text-xs font-semibold">SOC 2 Type II</p>
                  <p className="font-sans text-white/60 text-xs">Certified</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center grayscale">
                  <span className="font-serif text-white text-xs font-bold">ISO</span>
                </div>
                <div>
                  <p className="font-sans text-white text-xs font-semibold">ISO 27001</p>
                  <p className="font-sans text-white/60 text-xs">Certified</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <p className="font-sans text-white/60 text-sm text-center">
            © 2026 SOLENA Medical. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

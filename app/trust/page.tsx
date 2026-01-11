import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TenantIsolation from "@/components/trust/TenantIsolation";

export default function TrustPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gray-50 pt-32">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-primary text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Your Data. Your Vault. Zero Training.
          </h1>
          <p className="font-sans text-text text-xl lg:text-2xl leading-relaxed opacity-90 max-w-3xl mx-auto">
            SOLENA is architected on a principle of strict tenant isolation. We do not—and mechanically cannot—train our public models on your proprietary regulatory data.
          </p>
        </div>
      </section>

      {/* Core Layout - Three Sections */}
      <div className="container mx-auto max-w-6xl px-4 pb-20 space-y-16">
        {/* Section A: Tenant Isolation Architecture */}
        <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold mb-6">
            Tenant Isolation Architecture
          </h2>
          <p className="font-sans text-text text-lg leading-relaxed mb-8">
            Our infrastructure ensures complete data separation at every layer—from database partitions to API endpoints. Each tenant's data exists in an isolated environment with no cross-contamination possible.
          </p>
          
          {/* Tenant Isolation Diagram */}
          <TenantIsolation />
        </section>

        {/* Section B: 21 CFR Part 11 Compliance */}
        <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <h2 className="font-serif text-primary text-3xl lg:text-4xl font-bold mb-6">
            21 CFR Part 11 Compliance
          </h2>
          <p className="font-sans text-text text-lg leading-relaxed mb-8">
            SOLENA maintains a complete, immutable audit trail for all regulatory data access and modifications. Every query, every citation, every document interaction is logged with cryptographic integrity.
          </p>
          
          {/* System Log Visualization */}
          <div className="bg-gray-900 rounded-lg p-6 border-2 border-gray-700 shadow-xl">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-gray-400 text-xs ml-4">audit.log</span>
            </div>

            {/* Log Entries */}
            <div className="font-mono text-green-400 text-sm space-y-2 overflow-x-auto">
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 14:02:01]</span>
                <span className="text-blue-400">USER:</span>
                <span>ra_director_01</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>MODIFIED_SECTION_4.2</span>
                <span className="text-purple-400">HASH:</span>
                <span>7f8a9d2c4e1b5f3a</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 13:45:33]</span>
                <span className="text-blue-400">USER:</span>
                <span>regulatory_analyst_03</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>VIEWED_DOCUMENT_RDC_751</span>
                <span className="text-purple-400">HASH:</span>
                <span>a3b5c7d9e1f2a4b6</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 13:28:15]</span>
                <span className="text-blue-400">USER:</span>
                <span>compliance_officer_02</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>EXPORTED_REPORT_ANVISA_2025</span>
                <span className="text-purple-400">HASH:</span>
                <span>c9e7f5a3b1d8e4f6</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 12:15:42]</span>
                <span className="text-blue-400">USER:</span>
                <span>ra_director_01</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>CREATED_CITATION_CHIP_REF_12</span>
                <span className="text-purple-400">HASH:</span>
                <span>e2f4a6b8c1d3e5f7</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 11:52:18]</span>
                <span className="text-blue-400">USER:</span>
                <span>regulatory_analyst_03</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>QUERIED_CLASS_IIB_BRAZIL</span>
                <span className="text-purple-400">HASH:</span>
                <span>f6a8c2e4b7d1f3a5</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 10:33:27]</span>
                <span className="text-blue-400">USER:</span>
                <span>compliance_officer_02</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>SIGNED_ELECTRONIC_DOCUMENT</span>
                <span className="text-purple-400">HASH:</span>
                <span>a1c3e5b7d9f2a4c6</span>
                <span className="text-green-400">(Verified)</span>
              </div>
              <div className="flex items-start gap-2 whitespace-nowrap min-w-max">
                <span className="text-gray-500">[2026-01-12 09:18:55]</span>
                <span className="text-blue-400">USER:</span>
                <span>ra_director_01</span>
                <span className="text-yellow-400">ACTION:</span>
                <span>ACCESSED_SOURCE_ANVISA_PDF</span>
                <span className="text-purple-400">HASH:</span>
                <span>d4f6a8c1e3b5d7f9</span>
                <span className="text-green-400">(Verified)</span>
              </div>
            </div>

            {/* Terminal Prompt */}
            <div className="mt-4 pt-3 border-t border-gray-700 flex items-center gap-2">
              <span className="font-mono text-green-400">$</span>
              <span className="font-mono text-gray-400 text-sm">tail -f audit.log | grep VERIFIED</span>
              <span className="font-mono text-green-400 animate-pulse">_</span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

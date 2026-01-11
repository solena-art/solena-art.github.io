export default function TrustBar() {
  const companies = [
    "MedTech Global",
    "OrthoSystems",
    "BioLife",
    "NeuroCore",
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-100">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center gap-4">
          {/* Label */}
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide font-sans">
            TRUSTED BY INNOVATIVE REGULATORY TEAMS
          </p>
          
          {/* Company Logos/Placeholders */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-400 opacity-50 font-sans text-sm font-medium grayscale hover:opacity-70 transition-opacity"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

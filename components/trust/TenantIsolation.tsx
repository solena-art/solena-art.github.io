export default function TenantIsolation() {
  return (
    <div className="w-full">
      {/* SVG Visualization */}
      <div className="w-full overflow-x-auto py-8">
        <svg
          viewBox="0 0 800 400"
          className="w-full h-auto max-h-[400px]"
          style={{ minHeight: '200px' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Side - Your Data */}
          <g id="client-data">
            <rect
              x="50"
              y="150"
              width="140"
              height="100"
              rx="8"
              fill="#0a9396"
              stroke="#005f73"
              strokeWidth="2"
            />
            <text
              x="120"
              y="195"
              textAnchor="middle"
              className="font-sans font-bold text-white"
              fill="white"
              fontSize="16"
            >
              Your Data
            </text>
            <text
              x="120"
              y="220"
              textAnchor="middle"
              className="font-sans text-white"
              fill="white"
              fontSize="12"
              opacity="0.9"
            >
              Encrypted
            </text>
          </g>

          {/* Middle - SOLENA Secure Vault */}
          <g id="vault">
            <rect
              x="320"
              y="120"
              width="160"
              height="160"
              rx="8"
              fill="#005f73"
              stroke="#0a9396"
              strokeWidth="3"
            />
            {/* Lock Icon */}
            <g transform="translate(380, 180)">
              <rect
                x="0"
                y="10"
                width="40"
                height="30"
                rx="4"
                fill="white"
                stroke="#0a9396"
                strokeWidth="2"
              />
              <path
                d="M 10 10 Q 20 0 30 10"
                stroke="white"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </g>
            <text
              x="400"
              y="260"
              textAnchor="middle"
              className="font-sans font-bold text-white"
              fill="white"
              fontSize="14"
            >
              SOLENA
            </text>
            <text
              x="400"
              y="280"
              textAnchor="middle"
              className="font-sans font-bold text-white"
              fill="white"
              fontSize="14"
            >
              Secure Vault
            </text>
            <text
              x="400"
              y="300"
              textAnchor="middle"
              className="font-sans text-white"
              fill="white"
              fontSize="11"
              opacity="0.8"
            >
              Tenant Isolation
            </text>
          </g>

          {/* Right Side - Public LLM */}
          <g id="public-llm">
            <ellipse
              cx="650"
              cy="200"
              rx="100"
              ry="80"
              fill="#f8f9fa"
              stroke="#212529"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            <text
              x="650"
              y="190"
              textAnchor="middle"
              className="font-sans font-bold"
              fill="#212529"
              fontSize="14"
            >
              Public LLM
            </text>
            <text
              x="650"
              y="210"
              textAnchor="middle"
              className="font-sans"
              fill="#212529"
              fontSize="11"
              opacity="0.7"
            >
              Training
            </text>
          </g>

          {/* Connection: Data to Vault (Solid Line - Allowed) */}
          <g id="data-to-vault">
            <line
              x1="190"
              y1="200"
              x2="320"
              y2="200"
              stroke="#0a9396"
              strokeWidth="4"
              strokeLinecap="round"
            />
            {/* Arrow */}
            <polygon
              points="310,195 320,200 310,205"
              fill="#0a9396"
            />
            <text
              x="255"
              y="190"
              textAnchor="middle"
              className="font-sans text-xs"
              fill="#0a9396"
              fontSize="11"
              fontWeight="600"
            >
              Encrypted Transfer
            </text>
          </g>

          {/* Barrier: Vault to Public LLM (Dotted Line - Blocked) */}
          <g id="vault-to-llm">
            <line
              x1="480"
              y1="200"
              x2="550"
              y2="200"
              stroke="#ee9b00"
              strokeWidth="3"
              strokeDasharray="6,4"
              strokeLinecap="round"
            />
            {/* Blocked Icon (X) */}
            <g transform="translate(515, 185)">
              <circle
                cx="0"
                cy="15"
                r="20"
                fill="#ee9b00"
                opacity="0.2"
              />
              <line
                x1="-12"
                y1="3"
                x2="12"
                y2="27"
                stroke="#ee9b00"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="12"
                y1="3"
                x2="-12"
                y2="27"
                stroke="#ee9b00"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </g>
            <text
              x="515"
              y="175"
              textAnchor="middle"
              className="font-sans font-bold text-xs"
              fill="#ee9b00"
              fontSize="12"
              fontWeight="700"
            >
              BLOCKED
            </text>
          </g>
        </svg>
      </div>

      {/* Caption */}
      <div className="text-center mt-6">
        <p className="font-sans text-text/70 text-sm leading-relaxed max-w-2xl mx-auto">
          <span className="font-semibold">Data is encrypted at rest and in transit.</span>{" "}
          No egress to training sets.
        </p>
      </div>

      {/* Responsive Mobile View */}
      <div className="md:hidden mt-8 space-y-6">
        {/* Mobile Layout - Stacked */}
        <div className="bg-secondary/10 rounded-lg p-4 border-2 border-secondary">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <p className="font-sans font-bold text-text">Your Data</p>
              <p className="font-sans text-text/60 text-xs">Encrypted & Secure</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1 h-12 bg-secondary"></div>
        </div>

        <div className="bg-primary/10 rounded-lg p-4 border-2 border-primary">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <p className="font-sans font-bold text-text">SOLENA Secure Vault</p>
              <p className="font-sans text-text/60 text-xs">Tenant Isolation</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-1 h-12 bg-alert border-2 border-dashed border-alert"></div>
          <div className="absolute transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-8 h-8 bg-alert rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 border-2 border-dashed border-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
              </svg>
            </div>
            <div>
              <p className="font-sans font-bold text-text">Public LLM</p>
              <p className="font-sans text-text/60 text-xs">No Data Access</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

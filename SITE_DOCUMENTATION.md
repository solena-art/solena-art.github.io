# SOLENA Medical Website - Complete Documentation

## Overview

SOLENA Medical is a Next.js 14 application (App Router) built with TypeScript and Tailwind CSS, designed to showcase a regulatory intelligence platform for medical device companies. The site emphasizes trust, precision, and audit-readiness through a carefully crafted "Spectrum of Trust" design system.

**Technology Stack:**
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Deployment:** Static Export (GitHub Pages compatible)
- **Fonts:** Merriweather (Serif), Inter (Sans-Serif)

---

## Design System: "Spectrum of Trust"

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary (Deep Teal)** | `#005f73` | Navigation, Headers, Footer - conveys authority |
| **Secondary (Bio-Luminescent Green)** | `#0a9396` | CTAs, Active States, Intelligence signals |
| **Alert (Alert Orange)** | `#ee9b00` | Risk alerts, warnings (used sparingly) |
| **Background (Cloud Dancer)** | `#f8f9fa` | Global background (reduces eye strain vs pure white) |
| **Text (Slate Gray)** | `#212529` | High contrast body text |

### Typography

- **Headings:** Merriweather (Serif) - for legal authority and trust
- **Body:** Inter (Sans-Serif) - for legibility and modern feel
- **Monospace:** System monospace - for terminal/audit log displays

### Design Principles

1. **Medical Instrument Aesthetic:** Clean, precise, not generic SaaS
2. **Glassmorphism:** Translucent layers for depth and sophistication
3. **Zero Hallucinations:** Visual emphasis on citations and source verification
4. **Audit-Ready:** Every claim is tethered to visible sources

---

## Site Structure

### Pages

#### 1. **Home Page** (`/`)
**Route:** `app/page.tsx`

**Purpose:** Main landing page showcasing SOLENA's value proposition and key features.

**Components:**
- `Navbar` - Navigation header with logo and menu
- `Hero` - Split-screen hero with animated "Glass Box" visualization
- `TrustBar` - Client trust indicators
- `GlobalHeatmap` - Real-time regulatory surveillance visualization
- `TimeTaxCalculator` - Interactive ROI calculator
- `Footer` - Site footer with links and certifications

**Key Features:**
- Animated typewriter query demonstration
- Processing state visualization with pulsing green glow
- Citation chips showing source documents
- Interactive calculator with animated number counting
- World map with pulsing surveillance dots

---

#### 2. **Platform Page** (`/platform`)
**Route:** `app/platform/page.tsx`

**Purpose:** Explains SOLENA's proprietary RAG (Retrieval-Augmented Generation) architecture.

**Sections:**

**Hero:**
- Headline: "The Truth Engine"
- Subhead: Explains RAG architecture for zero-tolerance regulatory environments

**Feature A: Deep Retrieval**
- Left: Text explaining 71+ PDF category scanning
- Right: Visual showing PDF scanning progress bars
- Lists major jurisdictions (ANVISA, FDA, MDR/IVDR, PMDA, +67 more)

**Feature B: Citation Tethering**
- Left: Visual showing citation lines connecting responses to source documents
- Right: Text explaining direct source connections
- Includes quote: "The system doesn't just tell you what the regulation says—it shows you exactly where it says it"

**Feature C: Global Reach**
- Dark teal section with white text
- Headline: "52 Jurisdictions. 1 Interface."
- Grid of 12 major countries/jurisdictions
- Note: "+ 40 more jurisdictions supported"

**CTA:** All buttons link to `/contact`

---

#### 3. **Solutions Page** (`/solutions`)
**Route:** `app/solutions/page.tsx`

**Purpose:** Showcases specific use cases: Market Entry and Change Management.

**Sections:**

**Hero:**
- Headline: "Precision for Every Pivot"
- Animated visual: Filter icon transforming to checkmark (loop)

**Feature A: Market Entry & The Brazil Barrier**
- Left: Text explaining "One Strike" standard in Brazil
- Right: "Document Health Card" visual showing:
  - PDF file icon
  - Critical error alert (red border)
  - Error message: "Missing ICP-Brasil Digital Signature on Page 4"
  - "Fix Now" button

**Feature B: Change Management (The Ripple Effect)**
- Left: Interactive mini-map showing global impact
  - Toggle switch for "Change Material Supplier"
  - Three jurisdiction cards (USA, EU, China) with status indicators
- Right: Text explaining global regulatory consequence mapping

**CTA Section:**
- Headline: "Stop reacting to regulations. Start predicting them."
- "Request Audit" button → `/contact`

---

#### 4. **Intelligence Page** (`/intelligence`)
**Route:** `app/intelligence/page.tsx`

**Purpose:** Resource hub with featured content, recall patterns, and interactive tools.

**Sections:**

**Hero:**
- Headline: "The Intelligence Center"
- Subhead: Data-driven insights on regulatory landscape

**Featured Resource: The 2027 Cliff**
- Dark card (bg-gray-900) with white text
- Headline: "Whitepaper: The 2027 Extinction Event"
- Description: Why 30% of legacy devices will vanish from EU market
- "Download Gap Analysis" button → `/contact`

**Recall Radar Grid:**
- Three insight cards with left border (alert orange):
  1. **Software Labeling Errors up 200%** - AI-generated code requires validation
  2. **Sterile Barrier Breaches** - New ISO 11607 standards catching legacy packaging
  3. **FDA Refuse-to-Accept (RTA) Spike** - Missing SBOMs #1 cause of rejection

**Interactive Tool Teaser: Predicate Device Search**
- Headline: "Predicate Device Search"
- Description: Find 510(k) predicate in seconds
- Search bar UI with placeholder text
- "Search OpenFDA" button → `/contact`
- Footer: "Powered by FDA's OpenFDA API • Real-time regulatory data"

---

#### 5. **Trust Page** (`/trust`)
**Route:** `app/trust/page.tsx`

**Purpose:** Security, compliance, and data protection information.

**Sections:**

**Hero:**
- Headline: "Your Data. Your Vault. Zero Training."
- Subhead: Explains strict tenant isolation architecture
- Background: Light gray (bg-gray-50)

**Section A: Tenant Isolation Architecture**
- `TenantIsolation` component (SVG visualization)
- Shows three boxes:
  - Left: "Your Data" (Green/Safe)
  - Middle: "SOLENA Secure Vault" (Encrypted/Locked)
  - Right: "Public LLM" (Cloud)
- Solid line: Data → Vault
- Dotted line with X: Vault → Public LLM (blocked)
- Caption: "Data is encrypted at rest and in transit. No egress to training sets."

**Section B: 21 CFR Part 11 Compliance**
- Headline: "21 CFR Part 11 Compliance"
- System Log Visualization:
  - Dark terminal window (bg-gray-900)
  - Monospaced font (text-green-400)
  - Mock audit log entries with:
    - Timestamp
    - User ID
    - Action type
    - Cryptographic hash
    - Verification status
  - Terminal prompt at bottom with blinking cursor

**Section C: Security Certifications**
- Three cards in flex row:
  1. **SOC 2 Type II** - Shield icon, certified status
  2. **ISO 27001** - ISO badge, certified status
  3. **HIPAA / GDPR** - Shield icon, compliant status
- Each card includes description of certification

---

#### 6. **Contact Page** (`/contact`)
**Route:** `app/contact/page.tsx`

**Purpose:** Contact form for demo requests and inquiries.

**Sections:**

**Hero:**
- Headline: "Transform Your Business with AI"
- Subhead: Schedule a demo message

**Two-Column Layout:**

**Left Column: Contact Form**
- Form action: Formspree endpoint
- Fields:
  - Name (required)
  - Company (required)
  - Email (required, type="email")
  - Phone (required)
  - Industry (dropdown: Medical Devices, Pharmaceuticals, Biotechnology, Other)
  - Interests (checkboxes: Sales, Marketing, Regulatory Affairs, Other)
  - Message (textarea)
  - Terms checkbox (required, links to `/terms`)
  - EU Confirmation checkbox (required)
- Important Notice box (blue):
  - Services not available to EU/EEA residents
  - Geolocation-based IP blocking mentioned
- Submit button: "Schedule Demo"

**Right Column: Why Choose SOLENA?**
- Three feature cards:
  1. AI-Powered Insights
  2. Regulatory Compliance
  3. Expert Support

---

#### 7. **Terms Page** (`/terms`)
**Route:** `app/terms/page.tsx`

**Purpose:** Legal terms of service document.

**Content:**
- Full legal text from original `terms.html`
- Styled with prose classes for readability
- Sections include:
  - Eligibility (18+, not EU/EEA)
  - Services description
  - Payment terms
  - Intellectual property
  - Limitation of liability
  - Governing law
- Last Updated: June 8, 2025

---

## Components

### Shared Components

#### 1. **Navbar** (`components/Navbar.tsx`)
- **Type:** Client Component
- **Styling:** White background with subtle bottom border
- **Logo:** Image component (`/logo.png`, h-8 w-auto)
- **Navigation Links:**
  - Platform
  - Solutions
  - Intelligence
  - Trust
  - Contact
- **CTA Button:** "Request Audit" → `/contact`
- **Mobile:** Hamburger menu button (UI only, functionality pending)

---

#### 2. **Footer** (`components/Footer.tsx`)
- **Background:** Dark gray (bg-gray-900)
- **Layout:** 4-column grid (responsive)
- **Columns:**
  1. **Brand:** Text logo "SOLENA" + tagline "Certainty in Chaos."
  2. **Platform:** Links to Home, Trust Center, Platform
  3. **Legal:** Links to Terms, Contact
  4. **Certifications:** SOC 2 and ISO 27001 badges (grayscale placeholders)
- **Copyright:** "© 2026 SOLENA Medical. All Rights Reserved."

---

### Home Page Components

#### 3. **Hero** (`components/Hero.tsx`)
- **Type:** Client Component with animations
- **Layout:** Split-screen (2 columns on large screens)
- **Left Side:**
  - Headline: "The End of Regulatory Guesswork."
  - Subhead: Value proposition text
  - CTA Button: "Request Audit" → `/contact`
- **Right Side: Glass Box Visualization**
  - Glassmorphism card (backdrop-blur, translucent)
  - **Animation Sequence (loops):**
    1. **Typing Phase:** Typewriter effect for query text
    2. **Processing Phase:** Pulsing green glow with animated dots
    3. **Result Phase:** Response card slides in with citation chip
  - Query: "Labeling requirements for Class IIb in Brazil?"
  - Response: Shows RDC 751 requirement with citation
  - Citation Chip: "Source: ANVISA RDC 751"
  - Precision indicators: "98.6% Accuracy" badge
  - Footer text: "Audit-Ready • Zero Hallucinations"

---

#### 4. **TrustBar** (`components/TrustBar.tsx`)
- **Type:** Client Component
- **Styling:** Light gray band (bg-gray-50) with border
- **Content:**
  - Label: "TRUSTED BY INNOVATIVE REGULATORY TEAMS" (uppercase, small)
  - Placeholder company names:
    - MedTech Global
    - OrthoSystems
    - BioLife
    - NeuroCore
- **Animation:** Fade-in on scroll

---

#### 5. **GlobalHeatmap** (`components/GlobalHeatmap.tsx`)
- **Type:** Client Component
- **Background:** Deep Teal (bg-primary)
- **Layout:** Split-screen
- **Left Side:**
  - Headline: "Always On. Always Watching." (white, serif)
  - Subhead: "Real-time regulatory surveillance across 52 jurisdictions."
  - Stats badges (pulsing):
    - "14 Updates (EU)"
    - "3 Updates (Brazil)"
    - "1 Update (Japan)"
- **Right Side:**
  - SVG world map (dotted outline)
  - Animated pulse dots (green) on coordinates:
    - USA (cx: 180, cy: 150)
    - UK (cx: 380, cy: 100)
    - EU (cx: 430, cy: 120)
    - Brazil (cx: 250, cy: 280)
  - Legend: "Active Surveillance" and "52 Jurisdictions"

---

#### 6. **TimeTaxCalculator** (`components/TimeTaxCalculator.tsx`)
- **Type:** Client Component with state management
- **Layout:** 2-column grid
- **Left Column: Inputs (Sliders)**
  1. Number of Regulatory Affairs Staff (1-20, default: 5)
  2. Average Salary ($80k-$250k, default: $150k)
  3. Hours Wasted on Research per Week (5-20, default: 10)
- **Right Column: Results**
  - Label: "Total Annual Waste"
  - Large animated number (text-alert/orange)
  - Calculation: `(Salary / 2080) * Hours * 52 * Staff`
  - Caption: "This is the cost of the Regulatory Singularity. SOLENA eliminates this tax."
- **Features:**
  - Real-time calculation updates
  - Animated number counting (AnimatedNumber component)
  - Custom slider styling with primary color fill

---

### Trust Page Components

#### 7. **TenantIsolation** (`components/trust/TenantIsolation.tsx`)
- **Type:** Client Component
- **Visualization:** Responsive SVG diagram
- **Elements:**
  - Three labeled boxes (Your Data, SOLENA Secure Vault, Public LLM)
  - Solid arrow: Data → Vault (green)
  - Dotted line with X: Vault → LLM (blocked, red/orange)
  - Labels and captions
- **Responsive:** Scales on mobile with min-height

---

## Navigation Flow

### Primary Navigation (Navbar)
```
Home → Platform → Solutions → Intelligence → Trust → Contact
```

### Footer Navigation
- **Platform:** Home, Trust Center, Platform
- **Legal:** Terms, Contact

### CTA Buttons (All → `/contact`)
- "Request Audit" (Navbar, Hero, Solutions CTA)
- "Download Gap Analysis" (Intelligence page)
- "Search OpenFDA" (Intelligence page)

---

## Technical Implementation

### Next.js Configuration
- **Output:** Static export (`output: 'export'`)
- **Images:** Unoptimized (for GitHub Pages)
- **Routing:** App Router with file-based routing

### Font Loading
- **Merriweather:** Loaded via `next/font/google` (weights: 300, 400, 700, 900)
- **Inter:** Loaded via `next/font/google` (default weights)
- CSS variables: `--font-serif`, `--font-sans`

### Animations
- **Library:** Framer Motion
- **Usage:**
  - Scroll-triggered animations (`whileInView`)
  - Hover effects (`whileHover`, `whileTap`)
  - Page transitions
  - Number counting animations
  - Pulse/glow effects

### Responsive Design
- **Breakpoints:** Tailwind default (sm, md, lg, xl)
- **Mobile-first:** All components designed mobile-first
- **Grid layouts:** Responsive (1 column mobile, 2+ columns desktop)

### Form Handling
- **Contact Form:** Formspree integration
- **Validation:** HTML5 required fields
- **EU/EEA Blocking:** Checkbox confirmation required

---

## Key Features

### 1. **Glassmorphism UI**
- Translucent cards with backdrop blur
- Layered glass effects for depth
- Used in Hero component's "Glass Box"

### 2. **Citation System**
- Visual citation chips
- Source document references
- Audit-ready traceability emphasis

### 3. **Interactive Calculators**
- Real-time ROI calculation
- Animated number transitions
- Visual feedback on input changes

### 4. **Animated Visualizations**
- World map with pulse dots
- Tenant isolation diagram
- PDF scanning progress indicators
- Citation tethering lines

### 5. **Trust Indicators**
- Security certifications displayed
- Audit log visualization
- Tenant isolation proof
- Client trust bar

---

## Content Strategy

### Messaging Themes
1. **Zero Hallucinations:** Every claim is cited
2. **Audit-Ready:** Complete traceability
3. **Global Coverage:** 52 jurisdictions
4. **Time Savings:** ROI calculator demonstrates value
5. **Security First:** Tenant isolation, certifications

### Target Audience
- Regulatory Affairs Directors
- Medical Device Manufacturers
- Compliance Officers
- Quality Assurance Teams

### Value Propositions
- Eliminate regulatory guesswork
- Reduce time spent on research
- Ensure compliance across jurisdictions
- Get audit-ready documentation

---

## Deployment

### GitHub Pages Configuration
- Static HTML export
- Unoptimized images
- Base path: Root domain (no subdirectory)

### Build Process
```bash
npm run build
# Output: ./out directory
```

### Environment
- Node.js 18+
- npm/yarn package manager
- No environment variables required (static site)

---

## Future Enhancements (Potential)

1. **Mobile Menu:** Implement hamburger menu functionality
2. **Form Validation:** Enhanced client-side validation
3. **Analytics:** Add tracking for button clicks and form submissions
4. **A/B Testing:** Test different CTA button text/colors
5. **Blog/Resources:** Expand Intelligence page with blog posts
6. **Interactive Tools:** Implement actual OpenFDA search functionality
7. **Client Logos:** Replace placeholder text with actual client logos
8. **Video Content:** Add demo videos to Platform/Solutions pages

---

## File Structure

```
solena-art.github.io/
├── app/
│   ├── contact/
│   │   └── page.tsx
│   ├── intelligence/
│   │   └── page.tsx
│   ├── platform/
│   │   └── page.tsx
│   ├── solutions/
│   │   └── page.tsx
│   ├── terms/
│   │   └── page.tsx
│   ├── trust/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── trust/
│   │   └── TenantIsolation.tsx
│   ├── Footer.tsx
│   ├── GlobalHeatmap.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── TimeTaxCalculator.tsx
│   └── TrustBar.tsx
├── public/
│   └── logo.png
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## Design System Reference

### Spacing
- Container: `max-w-7xl` (1280px) or `max-w-6xl` (1152px)
- Section padding: `py-20 px-4`
- Component gaps: `gap-8`, `gap-12`

### Shadows
- Cards: `shadow-lg`
- Buttons: `shadow-md hover:shadow-lg`
- Hero glass box: `shadow-2xl`

### Borders
- Subtle: `border-gray-100`
- Emphasis: `border-2 border-primary`
- Alert: `border-l-4 border-alert`

### Rounded Corners
- Buttons: `rounded-lg`
- Cards: `rounded-2xl`
- Badges: `rounded-full`

---

## Accessibility Considerations

- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Form labels and required field indicators
- Focus states on interactive elements

---

## Performance Optimizations

- Next.js Image optimization (where applicable)
- Font optimization via `next/font`
- Static export for fast loading
- Lazy loading for animations (viewport-based)
- Minimal JavaScript bundle size

---

*Last Updated: January 2026*
*Documentation Version: 1.0*

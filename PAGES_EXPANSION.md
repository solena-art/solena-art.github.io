# SOLENA Content Expansion: Solutions & Intelligence Pages

## Context
We are expanding the SOLENA website (`solenamedical.com`) to include the "Solutions" and "Intelligence" pages.
**Design System Reminder:**
* **Colors:** Deep Teal (`text-primary`), Bio-Green (`text-secondary`), Gray-50/White backgrounds.
* **Font:** Serif for Headings (`font-serif`), Sans for Body (`font-sans`).
* **Aesthetic:** "Medical Instrument" (Clean, Precise, High-Contrast).

---

## Task 1: Create `app/solutions/page.tsx`
**Theme:** "Solve for the Specifics." Focus on high-stakes Use Cases rather than generic features.

### 1. Hero Section
* **Headline:** "Precision for Every Pivot."
* **Subhead:** "Whether entering a new market or managing a supplier change, SOLENA isolates the regulatory impact instantly."
* **Visual:** Minimalist abstract UI showing a "Filter" icon turning into a "Checkmark."

### 2. Feature Block A: "Market Entry & The Brazil Barrier"
* **Context:** Address the anxiety around Brazil's "One Strike" rule.
* **Layout:** Left Text / Right Visual.
* **Headline:** "Market Entry: Survive the 'One Strike' Standard."
* **Copy:** "In markets like Brazil (ANVISA), a single formatting error can delay revenue by 12 months. SOLENA's Pre-Submission Validator checks against 1,500+ administrative rejection criteria before you submit."
* **Visual Mockup (CSS/SVG):** A "Document Health" card.
    * *Input:* "Technical_File_v2.pdf"
    * *Status:* 🔴 **CRITICAL ERROR DETECTED**
    * *Detail:* "Missing ICP-Brasil Digital Signature on Page 4."
    * *Action:* "Fix Now" button.

### 3. Feature Block B: "Change Management (The Ripple Effect)"
* **Context:** The "Significant Change" assessment problem.
* **Layout:** Right Text / Left Visual.
* **Headline:** "Change Management: One Tweak, Global Impact."
* **Copy:** "Changing a material supplier? See the global ripple effect instantly. SOLENA maps the regulatory consequence of every change across 52 jurisdictions."
* **Visual Mockup:** A mini-map visualization.
    * *Trigger:* "Change Material Supplier" switch is toggled ON.
    * *Result:*
        * 🇺🇸 USA: 🟢 Letter to File
        * 🇪🇺 EU: 🔴 NB Review Required
        * 🇨🇳 China: 🟡 Modification Registration

### 4. CTA Section
* **Text:** "Stop reacting to regulations. Start predicting them."
* **Button:** "Request Audit" (Primary Teal Button).

---

## Task 2: Create `app/intelligence/page.tsx`
**Theme:** The "Resource Hub" and Thought Leadership.

### 1. Hero Section
* **Headline:** "The Intelligence Center."
* **Subhead:** "Data-driven insights on the regulatory landscape. From the 2027 EU MDR Cliff to daily recall patterns."

### 2. Featured Resource: "The 2027 Cliff" (Lead Magnet)
* **Design:** A "Featured Card" with a distinct background (`bg-gray-900` text-white).
* **Headline:** "Whitepaper: The 2027 Extinction Event."
* **Copy:** "Why 30% of legacy devices will vanish from the EU market in 2027—and how to ensure yours isn't one of them."
* **Action:** "Download Gap Analysis" (Button).

### 3. "Recall Radar" Grid
* **Headline:** "Live Recall Patterns (2025-2026)"
* **Layout:** A grid of 3 "Insight Cards".
    * **Card 1 (Software):** "Software Labeling Errors up 200%." *Insight: AI-generated code requires human validation.*
    * **Card 2 (Packaging):** "Sterile Barrier Breaches." *Insight: New ISO 11607 standards are catching legacy packaging.*
    * **Card 3 (Cybersecurity):** "FDA Refuse-to-Accept (RTA) Spike." *Insight: Missing SBOMs are the #1 cause of rejection this quarter.*

### 4. Interactive Tool Teaser
* **Headline:** "Predicate Device Search"
* **Copy:** "Find your 510(k) predicate in seconds, not hours. Search by Code, Regulation, or Description."
* **Visual:** A simple search bar UI element with a "Search OpenFDA" button.

---

## Implementation Instructions for Cursor
1.  Use the existing `Navbar` and `Footer` components for both pages.
2.  Use `framer-motion` for subtle entry animations (fade-in up) on the cards.
3.  Ensure responsiveness: The "Brazil Barrier" and "Map" visuals must stack correctly on mobile.
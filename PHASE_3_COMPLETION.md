# SOLENA Phase 3: Platform Page & Legacy Integration

## 1. Create `app/platform/page.tsx` (The Truth Engine)
**Objective:** Showcase the technical capability of the RAG architecture.
**Design:**
* **Hero:** "The Truth Engine." Subhead: "A proprietary Retrieval-Augmented Generation architecture designed for zero-tolerance regulatory environments."
* **Feature A (The Search):** Visual showing "Deep Retrieval" (Scanning 71+ PDF categories).
* **Feature B (The Synthesis):** Visual showing "Citation Tethering" (Lines connecting text to sources).
* **Feature C (Global Reach):** "52 Jurisdictions. 1 Interface."
* **Integration:** Use the shared `Navbar` and `Footer`.

## 2. Fix Navigation on Trust Page (`app/trust/page.tsx`)
**Issue:** The Navbar/Logo is missing or invisible on the Trust page.
**Fix:**
* Ensure the page content starts *below* the fixed Navbar (add `pt-20` or similar top padding to the main container).
* Verify the Navbar component is effectively rendered in `app/layout.tsx` so it appears on *every* page automatically.

## 3. Convert Legacy Files to Next.js (Critical Integration)
**Current Status:** `contact.html` and `terms.html` are static files in `public/`. They do not have the new Navbar/Footer.
**Action:** Delete the files from `public/` and recreate them as Next.js pages to inherit the global layout.

### A. Convert Contact Page (`app/contact/page.tsx`)
* **Copy Content:** Port the existing "Request a Demo" form fields (Name, Company, Email) from the old HTML.
* **Enhance Design:**
    * Use the new **Deep Teal** branding for headers.
    * Keep the **"Important Notice"** box (EU/EEA restriction) but style it with Tailwind (`bg-blue-50 text-blue-800 p-4 rounded`).
    * **Form Functionality:** Ensure the form submits correctly. (If the old form used a simple `action="..."`, replicate that. If it needs an API handler, set up a simple `form` tag with the same endpoint).

### B. Convert Terms Page (`app/terms/page.tsx`)
* **Copy Content:** Paste the full legal text from `terms.html`.
* **Styling:**
    * Wrap the text in a `prose` container (`max-w-4xl mx-auto prose prose-slate`) to automatically format headings and paragraphs cleanly.
    * Add a "Last Updated" header.

## 4. Navigation & Routing Check
* Update `components/Navbar.tsx` and `components/Footer.tsx`:
    * Change `href="/contact.html"` to `href="/contact"`.
    * Change `href="/terms.html"` to `href="/terms"`.
    * Change `href="/platform"` to ensure it links to the new page.

## 5. Execution Order
1.  Create the **Platform** page.
2.  Convert **Contact** and **Terms** to Next.js pages (and delete old static files).
3.  Fix the **Trust** page spacing/layout.
4.  Update all links in Nav/Footer.
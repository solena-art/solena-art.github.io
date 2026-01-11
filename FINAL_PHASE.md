# SOLENA Design Finalization & Deployment Instructions

## 1. Design Polish (Critical Fixes)
Please execute the following refinements to the codebase:

### A. Footer Logo Fix (`components/Footer.tsx`)
* **Issue:** The current footer shows a white block instead of the logo (likely because the logo file has a white background or is not optimized for dark mode).
* **Action:**
    1.  Check if `public/logo-white.png` exists. If not, fallback to using **Text-Only** for the Footer logo to ensure legibility.
    2.  **Implementation:** Replace the footer logo image with:
        ```tsx
        <span className="font-serif text-2xl font-bold text-white tracking-wide">SOLENA</span>
        ```
    3.  Ensure the tagline "Certainty in Chaos" is `text-gray-400` and aligned below it.

### B. Navigation & Legacy Link Verification
* **Navbar:** Ensure the "Contact" link explicitly points to `href="/contact.html"` (The legacy static file), NOT `/contact`.
* **Footer:** Ensure the "Terms of Service" link explicitly points to `href="/terms.html"`.

### C. Trust Page Mobile Optimization (`app/trust/page.tsx`)
* **Tenant Isolation Diagram:** Ensure the SVG scales down correctly on mobile screens (`w-full h-auto`).
* **Audit Log Terminal:** Ensure the `pre` tag has `overflow-x-auto` so the long code lines don't break the layout on small screens.

---

## 2. Metadata & SEO
Update `app/layout.tsx` to ensure social sharing looks correct:
* **Title:** `SOLENA | The End of Regulatory Guesswork`
* **Description:** `Maps the Global Regulatory Singularity with the only RAG-based intelligence engine that cites its sources. 100% Audit-Ready.`
* **Favicon:** Ensure the link to `favicon.ico` is valid.

---

## 3. Final Build & Deployment Check
Since we are deploying to GitHub Pages (Free Tier), we must generate the static export.

### Build Command Sequence
Run the following in the terminal to verify the build passes without errors:
1.  `npm run build`
    * *Expected Output:* A folder named `out/` is created.
    * *Check:* Verify `out/contact.html` and `out/terms.html` exist (copied from public).

---

## 4. Git Push Instructions (The "Go Live" Sequence)
Once the build is verified, use these commands to deploy:

```bash
# 1. Stage all final changes
git add .

# 2. Commit
git commit -m "Final Design Polish: Footer fix, Link verification, and Trust Center completion"

# 3. Push to Main (Triggers GitHub Pages if Action is set, otherwise manual upload)
git push origin main
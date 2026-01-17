import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto max-w-4xl px-4 py-20 pt-32">
        <h1 className="font-serif text-primary text-4xl lg:text-5xl font-bold mb-4">
          Privacy Policy
        </h1>
        <p className="font-sans text-text/60 text-sm mb-12">
          Last Updated: January 17, 2026
        </p>

        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">1. INTRODUCTION</h2>
            <p className="font-sans text-text leading-relaxed">
              SOLENA ("SOLENA," "we," "us," or "our") respects your privacy and is committed to protecting your personal information. This Privacy Policy (개인정보처리방침) explains how we collect, use, disclose, and safeguard your information when you use the SOLENA platform and website (the "Services").
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">2. INFORMATION WE COLLECT</h2>
            <p className="font-sans text-text leading-relaxed mb-4">
              We collect information that identifies, relates to, describes, or could reasonably be linked to you ("Personal Information").
            </p>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">2.1 Information You Provide to Us</h3>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><strong>Account Information:</strong> Name, email address, password, and company name.</li>
              <li><strong>Authentication Data:</strong> If you log in via Google OAuth, we collect your email address and basic profile information provided by Google.</li>
              <li><strong>Payment Information:</strong> Billing address and transaction history. Note: Detailed payment card information is processed directly by our third-party payment processor (e.g., Stripe) and is not stored on SOLENA servers.</li>
              <li><strong>Communication Data:</strong> Content of support tickets, emails, or inquiries sent to us.</li>
            </ul>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">2.2 Information We Collect Automatically</h3>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li><strong>Usage Data:</strong> Details of reports generated, countries selected for research, timestamps, and features used.</li>
              <li><strong>Technical Data:</strong> Internet Protocol (IP) address, browser type, operating system, and device information.</li>
            </ul>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">2.3 Information We DO NOT Collect</h3>
            <p className="font-sans text-text leading-relaxed">
              We do not knowingly collect sensitive personal data such as health information, biometric data, political opinions, or religious beliefs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">3. HOW WE USE INFORMATION</h2>
            <p className="font-sans text-text leading-relaxed mb-2">
              We use your information for the following specific purposes:
            </p>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Service Provision:</strong> To create accounts, generate regulatory reports, and manage subscriptions.</li>
              <li><strong>Platform Improvement:</strong> To analyze usage patterns to improve our AI algorithms and vector search capabilities.</li>
              <li><strong>Communication:</strong> To send administrative information, such as updates to terms, security alerts, and support responses.</li>
              <li><strong>Marketing:</strong> To send promotional materials (only with your explicit consent).</li>
              <li><strong>Security:</strong> To detect and prevent fraud, abuse, or security incidents.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">4. LEGAL BASIS FOR PROCESSING</h2>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Contractual Necessity:</strong> Processing is necessary to provide the Services you requested.</li>
              <li><strong>Legitimate Interests:</strong> Processing is necessary for our legitimate business interests (improving services, security) without overriding your rights.</li>
              <li><strong>Legal Obligation:</strong> Processing is necessary to comply with applicable laws (e.g., tax records).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">5. INFORMATION SHARING AND DISCLOSURE</h2>
            <p className="font-sans text-text leading-relaxed mb-4">
              We do not sell your Personal Information. We may share information with:
            </p>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Service Providers:</strong> We engage trusted third-party companies to process data on our behalf, specifically Google Cloud Platform (hosting and computing) and payment processors.</li>
              <li><strong>API Interactions:</strong> When you generate a report, search parameters are sent to third-party APIs (OpenFDA, MFDS) and LLM providers. We do not send your personal identifiers (name, email) to these regulatory APIs.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information if required by law, subpoena, or court order, specifically to South Korean authorities or other jurisdictions where valid legal process is served.</li>
              <li><strong>Business Transfers:</strong> In the event of a merger, sale, or asset transfer, your information may be transferred as a business asset.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">6. DATA STORAGE AND SECURITY</h2>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">6.1 Infrastructure</h3>
            <p className="font-sans text-text leading-relaxed mb-4">
              Our Services are hosted on Google Cloud Platform. Data may be processed and stored on servers located in multiple jurisdictions, including the United States and South Korea.
            </p>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">6.2 Security Measures</h3>
            <p className="font-sans text-text leading-relaxed mb-4">
              We implement encryption (SSL/TLS) in transit and encryption at rest to protect your data.
            </p>
            <h3 className="font-serif text-primary text-xl font-bold mb-3">6.3 Security Disclaimer</h3>
            <p className="font-sans text-text leading-relaxed font-bold">
              While SOLENA implements reasonable security measures to protect your personal information, no method of transmission over the Internet or method of electronic storage is 100% secure. SOLENA cannot guarantee absolute security of your personal information and shall not be liable for any unauthorized access, use, disclosure, alteration, or destruction of your personal information, except in cases of gross negligence or willful misconduct.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">7. DATA RETENTION</h2>
            <p className="font-sans text-text leading-relaxed mb-4">
              We retain your Personal Information only for as long as necessary to fulfill the purposes outlined in this policy.
            </p>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside">
              <li><strong>Account Data:</strong> Retained for the duration of your active account plus a reasonable grace period.</li>
              <li><strong>Deletion:</strong> Upon account termination, your Personal Information is deleted or anonymized, except where retention is required by law (e.g., tax regulations require keeping transaction records for 5 years).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">8. YOUR RIGHTS</h2>
            <p className="font-sans text-text leading-relaxed mb-4">
              Depending on your jurisdiction (and specifically under South Korean law), you may have the right to:
            </p>
            <ul className="font-sans text-text leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li>Access and receive a copy of your Personal Information.</li>
              <li>Rectify incorrect or incomplete data.</li>
              <li>Request deletion of your Personal Information.</li>
              <li>Restrict or object to the processing of your data.</li>
            </ul>
            <p className="font-sans text-text leading-relaxed">
              To exercise these rights, please contact us at info@solenamedical.com. We will respond to verified requests within 30 days.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">9. INTERNATIONAL DATA TRANSFERS</h2>
            <p className="font-sans text-text leading-relaxed">
              By using the Services, you acknowledge that your information may be transferred to, stored, and processed in South Korea, the United States, and other countries where our cloud providers operate. These countries may have data protection laws different from your country of residence. You explicitly consent to such cross-border transfers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">10. COOKIES AND TRACKING</h2>
            <p className="font-sans text-text leading-relaxed">
              We use cookies and similar technologies to maintain user sessions and analyze traffic. You can control cookies through your browser settings. However, disabling cookies may prevent you from using the interactive features of the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">11. CHILDREN'S PRIVACY</h2>
            <p className="font-sans text-text leading-relaxed">
              The Services are strictly for users aged 18 and older. We do not knowingly collect personal information from individuals under 18. If we become aware that we have collected such information, we will delete it immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">12. EU/EEA EXCLUSION</h2>
            <p className="font-sans text-text leading-relaxed font-bold">
              The Services are NOT available to residents of the European Union (EU) or European Economic Area (EEA). We do not intend to offer goods or services to, or monitor the behavior of, individuals in the EU/EEA. If you are an EU/EEA resident, do not use the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">13. CHANGES TO PRIVACY POLICY</h2>
            <p className="font-sans text-text leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Continued use of the Services after such changes constitutes acceptance of the new Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="font-serif text-primary text-2xl font-bold mb-4">14. CONTACT INFORMATION</h2>
            <p className="font-sans text-text leading-relaxed mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact our Data Protection Officer:
            </p>
            <p className="font-sans text-text leading-relaxed">
              <strong>SOLENA</strong><br />
              95, Dongtan-daero 4-gil, Hwaseong-si, Gyeonggi-do, Republic of Korea<br />
              Email: info@solenamedical.com
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}

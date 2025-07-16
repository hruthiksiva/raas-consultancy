import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#182028' }}>
      {/* Header */}
      <div style={{ backgroundColor: '#182028' }} className="shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm mb-4" style={{ color: '#FFFFFF' }}>
            <Link to="/" className="hover:underline" style={{ color: '#FFFFFF' }}>
              Home
            </Link>
            <span>/</span>
            <span style={{ color: '#FFFFFF' }}>Terms of Service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
            Terms of Service
          </h1>
          <p className="text-lg" style={{ color: '#FFFFFF' }}>
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none" style={{ color: '#FFFFFF' }}>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#FFFFFF' }}>
              Terms of Service for RAAS Consultancy Services
            </h2>
            <p className="leading-relaxed" style={{ color: '#FFFFFF' }}>
              These Terms of Service govern your use of our website and services provided by RAAS Consultancy Services.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                1. Use of the Website
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                You agree to use our website and services for lawful purposes only and not for any activity that violates applicable laws or regulations.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                2. Services Offered
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We provide business and financial consultancy services for startups, MSMEs, and individuals. The scope of work will be defined in our engagement letters or service agreements.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                3. Client Responsibilities
              </h3>
              <p className="mb-4" style={{ color: '#FFFFFF' }}>
                Clients agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4" style={{ color: '#FFFFFF' }}>
                <li>Provide accurate and complete information.</li>
                <li>Cooperate and communicate in a timely manner.</li>
                <li>Make payments as per agreed terms.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                4. Payment Terms
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Fees and payment terms will be specified in your service agreement. We reserve the right to suspend services for non-payment.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                5. Intellectual Property
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                All content, materials, and designs provided on our website are our intellectual property. You may not reproduce, distribute, or exploit any content without our prior written consent.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                6. Confidentiality
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We maintain strict confidentiality of all client information and business data. Similarly, you agree not to disclose proprietary or sensitive information shared by us.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                7. Disclaimers
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                Our consultancy services are advisory in nature. We do not guarantee business outcomes. All decisions made based on our advice are at the sole discretion of the client.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                8. Limitation of Liability
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                RAAS Consultancy Services shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website.
              </p>
            </section>

            {/* Section 9 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                9. Termination
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We reserve the right to terminate or suspend services at our discretion, particularly in case of abuse, non-compliance, or illegal activity.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                10. Governing Law
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                These Terms shall be governed by the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the jurisdiction of Chittoor Courts.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                11. Changes to Terms
              </h3>
              <p style={{ color: '#FFFFFF' }}>
                We may modify these Terms at any time. Continued use of our services after changes constitutes your acceptance of the revised Terms.
              </p>
            </section>

            {/* Section 12 */}
            <section>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#FFFFFF' }}>
                12. Contact Information
              </h3>
              <p className="mb-4" style={{ color: '#FFFFFF' }}>
                If you have questions about these Terms, reach out to:
              </p>
              <div className="rounded-lg p-6 space-y-3" style={{ background: 'none', border: 'none' }}>
                <p className="flex items-center" style={{ color: '#FFFFFF' }}>
                  <span className="mr-3">📧</span>
                  <a href="mailto:raasconsultancy.ca@gmail.com" style={{ color: '#FFFFFF', textDecoration: 'underline' }}>
                  raasconsultancy.ca@gmail.com
                  </a>
                </p>
                <p className="flex items-start" style={{ color: '#FFFFFF' }}>
                  <span className="mr-3 mt-1">📍</span>
                  <span>
                    3-220/1 Pagadamanu Street<br />
                    Greamspet, Chittoor<br />
                    517002
                  </span>
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService; 
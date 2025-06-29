import React from 'react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <nav className="flex items-center space-x-2 text-sm text-blue-100 mb-4">
            <Link to="/" className="hover:text-white transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Terms of Service
          </h1>
          <p className="text-blue-100 text-lg">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Terms of Service for RAAS Consultancy Services
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service govern your use of our website and services provided by RAAS Consultancy Services.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Use of the Website
                </h3>
                <p className="text-gray-700">
                  You agree to use our website and services for lawful purposes only and not for any activity that violates applicable laws or regulations.
                </p>
              </section>

              {/* Section 2 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Services Offered
                </h3>
                <p className="text-gray-700">
                  We provide business and financial consultancy services for startups, MSMEs, and individuals. The scope of work will be defined in our engagement letters or service agreements.
                </p>
              </section>

              {/* Section 3 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Client Responsibilities
                </h3>
                <p className="text-gray-700 mb-4">
                  Clients agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide accurate and complete information.</li>
                  <li>Cooperate and communicate in a timely manner.</li>
                  <li>Make payments as per agreed terms.</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Payment Terms
                </h3>
                <p className="text-gray-700">
                  Fees and payment terms will be specified in your service agreement. We reserve the right to suspend services for non-payment.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Intellectual Property
                </h3>
                <p className="text-gray-700">
                  All content, materials, and designs provided on our website are our intellectual property. You may not reproduce, distribute, or exploit any content without our prior written consent.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Confidentiality
                </h3>
                <p className="text-gray-700">
                  We maintain strict confidentiality of all client information and business data. Similarly, you agree not to disclose proprietary or sensitive information shared by us.
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Disclaimers
                </h3>
                <p className="text-gray-700">
                  Our consultancy services are advisory in nature. We do not guarantee business outcomes. All decisions made based on our advice are at the sole discretion of the client.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  8. Limitation of Liability
                </h3>
                <p className="text-gray-700">
                  RAAS Consultancy Services shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services or website.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  9. Termination
                </h3>
                <p className="text-gray-700">
                  We reserve the right to terminate or suspend services at our discretion, particularly in case of abuse, non-compliance, or illegal activity.
                </p>
              </section>

              {/* Section 10 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  10. Governing Law
                </h3>
                <p className="text-gray-700">
                  These Terms shall be governed by the laws of India, without regard to conflict of law principles. Any disputes shall be subject to the jurisdiction of Chittoor Courts.
                </p>
              </section>

              {/* Section 11 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  11. Changes to Terms
                </h3>
                <p className="text-gray-700">
                  We may modify these Terms at any time. Continued use of our services after changes constitutes your acceptance of the revised Terms.
                </p>
              </section>

              {/* Section 12 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  12. Contact Information
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have questions about these Terms, reach out to:
                </p>
                <div className="bg-gray-50 rounded-lg p-6 space-y-3 border border-gray-200">
                  <p className="flex items-center text-gray-700">
                    <span className="mr-3">📧</span>
                    <a href="mailto:info@raazconsultancy.in" className="text-blue-600 hover:text-blue-800 font-medium">
                      info@raazconsultancy.in
                    </a>
                  </p>
                  <p className="flex items-start text-gray-700">
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
    </div>
  );
};

export default TermsOfService; 
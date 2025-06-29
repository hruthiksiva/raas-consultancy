import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
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
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Privacy Policy
          </h1>
          <p className="text-blue-100 text-lg">
            Your privacy is important to us. Learn how we protect your information.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Privacy Policy for RAAS Consultancy
              </h2>
              <p className="text-gray-700 leading-relaxed">
                RAAS Consultancy Services we value your privacy. This Privacy Policy explains how we collect, use, share, and protect your personal information when you interact with our website or engage with our services.
              </p>
            </div>

            <div className="space-y-8">
              {/* Section 1 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Information We Collect
                </h3>
                <p className="text-gray-700 mb-4">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li><strong>Personal Identifiable Information:</strong> Name, email address, phone number, billing address, etc.</li>
                  <li><strong>Professional Information:</strong> Company name, industry, business size, project details.</li>
                  <li><strong>Usage Data:</strong> Pages visited, time spent on site, clickstream data.</li>
                  <li><strong>Device Data:</strong> IP address, browser type, device identifiers.</li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h3>
                <p className="text-gray-700 mb-4">
                  We use your data to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide and improve our consultancy services.</li>
                  <li>Respond to inquiries and support requests.</li>
                  <li>Communicate updates, offers, or newsletters (with your consent).</li>
                  <li>Fulfill legal and compliance obligations.</li>
                  <li>Analyze usage to enhance user experience.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. How We Share Your Data
                </h3>
                <p className="text-gray-700 mb-4">
                  We do not sell your personal information. We may share data with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Trusted third-party service providers (e.g., hosting, email marketing).</li>
                  <li>Legal authorities if required by law.</li>
                  <li>Partners with whom we collaborate to deliver services (with consent).</li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Cookies and Tracking
                </h3>
                <p className="text-gray-700">
                  We use cookies to personalize your experience and analyze website traffic. You may choose to disable cookies via your browser settings, though it may limit some functionality.
                </p>
              </section>

              {/* Section 5 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Data Security
                </h3>
                <p className="text-gray-700">
                  We implement industry-standard security measures, including SSL encryption and secure storage protocols. However, no method is 100% secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              {/* Section 6 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Your Rights
                </h3>
                <p className="text-gray-700 mb-4">
                  Depending on your location, you may have rights to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Access or correct your personal data.</li>
                  <li>Request deletion of your data.</li>
                  <li>Opt-out of promotional emails.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  To exercise any rights, contact us at: <a href="mailto:info@raazconsultancy.in" className="text-blue-600 hover:text-blue-800 font-medium">info@raazconsultancy.in</a>
                </p>
              </section>

              {/* Section 7 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Children's Privacy
                </h3>
                <p className="text-gray-700">
                  Our services are not directed to individuals under 16 years of age. We do not knowingly collect data from children.
                </p>
              </section>

              {/* Section 8 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  8. Changes to This Policy
                </h3>
                <p className="text-gray-700">
                  We may update this Privacy Policy occasionally. Changes will be reflected with an updated "Last Updated" date.
                </p>
              </section>

              {/* Section 9 */}
              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  9. Contact Us
                </h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions or concerns about this policy, please contact:
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

export default PrivacyPolicy; 
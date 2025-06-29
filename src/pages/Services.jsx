import Header from '../components/Header';

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="Our Services" 
        subtitle="Discover the range of services we offer"
      />

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive Financial Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From tax planning to business advisory, we provide end-to-end financial services designed to help your business grow and thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Tax Planning & Filing */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Tax Planning & Filing
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Expert tax planning and filing services to ensure compliance while maximizing your savings. Our Chartered professionals handle all aspects of tax management with precision and care.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personal and Business ITR</h3>
                    <p className="text-gray-600">Comprehensive income tax return filing for individuals and businesses</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GST Monthly/Quarterly Returns</h3>
                    <p className="text-gray-600">Timely GST filing and compliance management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">TDS Filing & Reconciliation</h3>
                    <p className="text-gray-600">Accurate TDS calculations, filing, and reconciliation services</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Service Proposal
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Tax Planning Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bookkeeping */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Bookkeeping Image</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Bookkeeping
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Modern, cloud-based bookkeeping solutions that provide real-time insights into your financial health. Our systematic approach ensures accuracy and accessibility.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Monthly Cloud-Based Bookkeeping</h3>
                    <p className="text-gray-600">Secure, accessible financial records in the cloud</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Real-Time Access to Financials</h3>
                    <p className="text-gray-600">Instant access to your financial data anytime, anywhere</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Audit-Ready Reports</h3>
                    <p className="text-gray-600">Comprehensive reports prepared for audit requirements</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Service Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Registrations & Compliance */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Registrations & Compliance
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Complete business registration and compliance services to ensure your business operates legally and efficiently. From incorporation to ongoing compliance, we handle it all.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Company Incorporation</h3>
                    <p className="text-gray-600">Pvt Ltd, LLP, Partnership registration and setup</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">GST, MSME, Udyam, ROC Filings</h3>
                    <p className="text-gray-600">Comprehensive regulatory compliance management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">IEC Code Registration</h3>
                    <p className="text-gray-600">Import-Export code registration for international trade</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Annual & Statutory Compliances</h3>
                    <p className="text-gray-600">Ongoing compliance management and reporting</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Service Proposal
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Compliance Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory & Reporting */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-8 text-white">
                <div className="w-full h-80 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Advisory Image</span>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-orange-600 rounded"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advisory & Reporting
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Strategic financial advisory services to help you make informed decisions and drive business growth. Our expert insights provide clarity and direction for your financial future.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Financial Health Reports</h3>
                    <p className="text-gray-600">Comprehensive analysis of your business financial health</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cash Flow & Profitability Analysis</h3>
                    <p className="text-gray-600">Detailed insights into cash flow patterns and profitability</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-1">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Virtual CFO Services</h3>
                    <p className="text-gray-600">Strategic financial leadership and decision support</p>
                  </div>
                </div>
              </div>
              
              <a 
                href="#contact" 
                className="inline-block bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Request Service Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how our services can help your business grow and succeed.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Your Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services; 
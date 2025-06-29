import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="About Us" 
        subtitle="Learn more about our company and mission"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Raaz Consultancy emerged to bridge the gap between financial expertise and human understanding. Founded by Chartered professionals with business-first insight, we blend compliance with empathy. For us, every client is not just a file — it's a founder, a dream, a journey. That belief powers how we serve.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
                <div className="w-full h-64 bg-white/20 rounded-lg flex items-center justify-center">
                  <span className="text-white/80 text-lg">Company Story Image</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To simplify financial complexities for individuals, freelancers, startups, MSMEs, Pvt Ltd companies, and LLPs with ethical, transparent, and tailored solutions.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <div className="w-8 h-8 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be India's most trusted, accessible, and forward-thinking financial consultancy, offering clarity, confidence, and compliance under one digital-first roof.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We combine professional expertise with personalized service to deliver exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Chartered Expertise */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Chartered Expertise Without Chartered Cost
              </h3>
              <p className="text-gray-600">
                We offer CA-led services that are affordable, honest, and high-quality.
              </p>
            </div>

            {/* Founder-Led Service */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Founder-Led Personalized Service
              </h3>
              <p className="text-gray-600">
                Your journey is guided by experienced professionals who care.
              </p>
            </div>

            {/* Focused on MSMEs */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Focused on MSMEs, Startups, Pvt Ltds, and LLPs
              </h3>
              <p className="text-gray-600">
                We understand your growth stage and cater services accordingly.
              </p>
            </div>

            {/* Transparent Pricing */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Transparent Pricing
              </h3>
              <p className="text-gray-600">
                No retainers. No vague quotes. Only fixed and fair deliverables.
              </p>
            </div>

            {/* Digital-First Workflow */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-teal-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Digital-First Workflow
              </h3>
              <p className="text-gray-600">
                Cloud tools. Paperless processes. Anytime access.
              </p>
            </div>

            {/* Confidential & Ethical */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 bg-red-600 rounded"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Confidential & Ethical
              </h3>
              <p className="text-gray-600">
                Your data is secure. Your financial story is respected.
              </p>
            </div>
          </div>

          {/* Growth-Driven Thinking - Full Width */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <div className="w-8 h-8 bg-white rounded"></div>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Growth-Driven Thinking
              </h3>
              <p className="text-blue-100 text-lg">
                We don't just maintain — we advise and help you scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Founder's Note
              </h3>
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 italic text-center leading-relaxed">
              "We blend professional expertise with personalized service — so you're not just compliant, you're confident."
            </blockquote>
            <div className="text-center mt-8">
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white/80 text-lg">Founder Image Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 
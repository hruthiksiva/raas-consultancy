import Header from '../components/Header';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Taxation Tips",
      excerpt: "Essential tax planning strategies for businesses and individuals to maximize savings and ensure compliance.",
      image: "taxation-tips",
      slug: "taxation-tips",
      category: "Tax Planning",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Compliance Simplified",
      excerpt: "Streamlined compliance processes for MSMEs and startups to meet regulatory requirements efficiently.",
      image: "compliance-simplified",
      slug: "compliance-simplified",
      category: "Compliance",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Startup Finance",
      excerpt: "Financial management strategies and funding options for early-stage startups and entrepreneurs.",
      image: "startup-finance",
      slug: "startup-finance",
      category: "Startup",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Expert Advice",
      excerpt: "Professional insights and best practices from our Chartered professionals for business growth.",
      image: "expert-advice",
      slug: "expert-advice",
      category: "Advisory",
      readTime: "7 min read"
    }
  ];

  const handleBlogClick = (slug) => {
    // Navigate to blog detail page
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title="Blog" 
        subtitle="Read our latest insights and articles"
      />

      {/* Blog Listing Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Latest Insights & Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in finance, taxation, and business compliance.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <div 
                key={blog.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300"
                onClick={() => handleBlogClick(blog.slug)}
              >
                {/* Blog Thumbnail */}
                <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/80 text-lg font-medium">
                      {blog.image.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {blog.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-white/20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  {/* Read More Link */}
                  <div className="flex items-center justify-between">
                    <button 
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBlogClick(blog.slug);
                      }}
                    >
                      Read More
                      <svg 
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M9 5l7 7-7 7" 
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Subscribe to our newsletter for the latest insights, tips, and updates delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600">
              Find articles that match your interests and business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {['Tax Planning', 'Compliance', 'Startup', 'Advisory'].map((category) => (
              <div 
                key={category}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-blue-50 transition-colors duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                </div>
                <h3 className="font-semibold text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs; 
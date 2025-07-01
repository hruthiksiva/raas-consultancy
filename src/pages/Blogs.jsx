import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BlogCard from '../components/blogs/BlogCard';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/src/data/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
              <BlogCard key={blog.id} blog={blog} onClick={handleBlogClick} />
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
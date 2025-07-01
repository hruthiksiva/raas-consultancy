const BlogDetailRelatedSection = ({ relatedBlogs, onBlogClick }) => (
  <section className="py-16 md:py-24 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Related Articles
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {relatedBlogs.map((blog) => (
          <div 
            key={blog.slug}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            onClick={() => onBlogClick(blog.slug)}
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white/80 text-lg text-center px-4">
                {blog.title.split(':')[0]}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogDetailRelatedSection; 
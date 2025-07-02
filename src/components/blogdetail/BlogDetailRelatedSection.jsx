const BlogDetailRelatedSection = ({ relatedBlogs, onBlogClick }) => (
  <section style={{ backgroundColor: '#182028' }} className="py-10 md:py-24">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12" style={{ color: '#FFFFFF' }}>
        Related Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {relatedBlogs.map((blog) => (
          <div 
            key={blog.slug}
            className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            style={{ backgroundColor: '#B69567' }}
            onClick={() => onBlogClick(blog.slug)}
          >
            <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <span className="text-white/80 text-lg text-center px-4">
                {blog.title.split(':')[0]}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 line-clamp-2" style={{ color: '#182028' }}>
                {blog.title}
              </h3>
              <p className="mb-4 line-clamp-3" style={{ color: '#232E3A' }}>
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
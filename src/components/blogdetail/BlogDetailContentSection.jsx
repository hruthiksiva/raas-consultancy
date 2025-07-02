const BlogDetailContentSection = ({ currentBlog, renderContent }) => (
  <section style={{ backgroundColor: '#232E3A' }} className="py-8 md:py-24">
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8">
      {/* Blog Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex flex-wrap items-center space-x-2 sm:space-x-4 mb-2 sm:mb-4">
          <span style={{ backgroundColor: 'rgba(182, 149, 103, 0.15)', color: '#FFFFFF' }} className="text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full">
            {currentBlog.category}
          </span>
          <span style={{ color: '#FFFFFF' }} className="text-xs sm:text-sm">
            {currentBlog.readTime}
          </span>
        </div>
        <h1 className="text-xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4" style={{ color: '#FFFFFF' }}>
          {currentBlog.title}
        </h1>
        <p className="text-base sm:text-lg mb-4 sm:mb-6" style={{ color: '#FFFFFF' }}>
          {currentBlog.excerpt}
        </p>
        <div className="flex flex-wrap items-center text-xs sm:text-sm" style={{ color: '#FFFFFF' }}>
          <span>By {currentBlog.author}</span>
          <span className="mx-1 sm:mx-2">•</span>
          <span>{currentBlog.date}</span>
        </div>
      </div>
      {/* Blog Image */}
      {/* <div className="mb-6 sm:mb-8">
        <div className="w-full h-40 sm:h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white/80 text-base sm:text-lg font-medium">
            {currentBlog.title.split(':')[0]}
          </span>
        </div>
      </div> */}
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none" style={{ color: '#FFFFFF' }}>
        {renderContent(currentBlog.content)}
      </div>
    </div>
  </section>
);

export default BlogDetailContentSection; 
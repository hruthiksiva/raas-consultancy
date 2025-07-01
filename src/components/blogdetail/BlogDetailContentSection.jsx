const BlogDetailContentSection = ({ currentBlog, renderContent }) => (
  <section className="py-16 md:py-24 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Blog Header */}
      <div className="mb-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
            {currentBlog.category}
          </span>
          <span className="text-gray-500 text-sm">
            {currentBlog.readTime}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {currentBlog.title}
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          {currentBlog.excerpt}
        </p>
        <div className="flex items-center text-gray-500 text-sm">
          <span>By {currentBlog.author}</span>
          <span className="mx-2">•</span>
          <span>{currentBlog.date}</span>
        </div>
      </div>
      {/* Blog Image */}
      <div className="mb-8">
        <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
          <span className="text-white/80 text-lg font-medium">
            {currentBlog.title.split(':')[0]}
          </span>
        </div>
      </div>
      {/* Blog Content */}
      <div className="prose prose-lg max-w-none">
        {renderContent(currentBlog.content)}
      </div>
    </div>
  </section>
);

export default BlogDetailContentSection; 
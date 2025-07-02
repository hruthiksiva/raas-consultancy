const BlogCard = ({ blog, onClick }) => (
  <div 
    className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 bg-[#F1E1C9] flex flex-col h-full min-h-[260px] md:min-h-[320px]"
    onClick={() => onClick(blog.slug)}
  >
    {/* Blog Thumbnail */}
    <div className="relative h-28 md:h-48 bg-gradient-to-br from-blue-500 to-blue-600">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-white/80 text-base md:text-lg font-medium">
          {blog.image.replace('-', ' ').toUpperCase()}
        </span>
      </div>
      <div className="absolute top-2 left-2 md:top-4 md:left-4">
        <span className="bg-white/20 text-white text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm">
          {blog.category}
        </span>
      </div>
      <div className="absolute top-2 right-2 md:top-4 md:right-4">
        <span className="bg-white/20 text-white text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm">
          {blog.readTime}
        </span>
      </div>
    </div>
    {/* Blog Content */}
    <div className="p-3 md:p-6 flex flex-col flex-1">
      <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 line-clamp-2" style={{ color: '#182028' }}>
        {blog.title}
      </h3>
      <p className="mb-2 md:mb-4 line-clamp-3 text-xs md:text-base" style={{ color: '#232E3A' }}>
        {blog.excerpt}
      </p>
      {/* Read More Link */}
      <div className="flex items-center justify-between mt-auto">
        <button 
          className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group text-xs md:text-base"
          onClick={(e) => {
            e.stopPropagation();
            onClick(blog.slug);
          }}
        >
          Read More
          <svg 
            className="w-3 h-3 md:w-4 md:h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" 
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
);

export default BlogCard; 
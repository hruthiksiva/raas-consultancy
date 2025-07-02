const BlogCard = ({ blog, onClick }) => (
  <div
    className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 transition-transform duration-300 flex flex-col h-full min-h-[260px] md:min-h-[320px] bg-cover bg-center"
    style={{
      backgroundImage: `url(${blog.image})`,
      position: 'relative',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
    onClick={() => onClick(blog.slug)}
  >
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
    {/* Blog Content */}
    <div className="relative z-10 p-3 md:p-6 flex flex-col flex-1 h-full">
      <div className="flex items-center justify-between mb-2 md:mb-3">
        <span className="bg-white/20 text-[#FFFEF9] text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm">
          {blog.category}
        </span>
        <span className="bg-white/20 text-[#FFFEF9] text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full backdrop-blur-sm">
          {blog.readTime}
        </span>
      </div>
      <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 line-clamp-2" style={{ color: '#FFFEF9' }}>
        {blog.title}
      </h3>
      <p className="mb-2 md:mb-4 line-clamp-3 text-xs md:text-base" style={{ color: '#FFFEF9' }}>
        {blog.excerpt}
      </p>
      {/* Read More Link */}
      <div className="flex items-center justify-between mt-auto">
        <button
          className="text-[#FFFEF9] font-semibold hover:text-blue-200 transition-colors duration-200 flex items-center group text-xs md:text-base"
          onClick={(e) => {
            e.stopPropagation();
            onClick(blog.slug);
          }}
        >
          Read More
          <svg
            className="w-3 h-3 md:w-4 md:h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200"
            fill="none"
            stroke="#FFFEF9"
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
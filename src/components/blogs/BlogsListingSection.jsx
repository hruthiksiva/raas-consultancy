import BlogCard from './BlogCard';

const BlogsListingSection = ({ blogs, onBlogClick }) => (
  <section style={{ backgroundColor: '#182028' }} className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#FFFFFF' }}>
          Latest Insights & Articles
        </h2>
        <p className="text-lg max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
          Stay updated with the latest trends, tips, and insights in finance, taxation, and business compliance.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:gap-8 auto-rows-fr">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={onBlogClick} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogsListingSection; 
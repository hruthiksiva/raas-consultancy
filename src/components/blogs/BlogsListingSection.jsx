import BlogCard from './BlogCard';

const BlogsListingSection = ({ blogs, onBlogClick }) => (
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
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} onClick={onBlogClick} />
        ))}
      </div>
    </div>
  </section>
);

export default BlogsListingSection; 
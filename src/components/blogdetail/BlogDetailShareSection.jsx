const BlogDetailShareSection = () => (
  <div className="mt-12 pt-8 border-t border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
    <div className="flex flex-wrap gap-4">
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
        Share on LinkedIn
      </button>
      <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
        Share on Twitter
      </button>
      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
        Share on WhatsApp
      </button>
    </div>
  </div>
);

export default BlogDetailShareSection; 
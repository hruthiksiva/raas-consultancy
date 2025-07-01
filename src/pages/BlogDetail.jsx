import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogDetailHeroSection from '../components/blogdetail/BlogDetailHeroSection';
import BlogDetailContentSection from '../components/blogdetail/BlogDetailContentSection';
import BlogDetailShareSection from '../components/blogdetail/BlogDetailShareSection';
import BlogDetailRelatedSection from '../components/blogdetail/BlogDetailRelatedSection';
import BlogDetailCTASection from '../components/blogdetail/BlogDetailCTASection';

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState({});
  const [currentBlog, setCurrentBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    fetch('/src/data/blogDetails.json')
      .then((res) => res.json())
      .then((data) => {
        setBlogData(data);
        setCurrentBlog(data[slug] || data[Object.keys(data)[0]]);
        // Prepare related blogs (exclude current slug)
        const related = Object.keys(data)
          .filter(key => key !== slug)
          .slice(0, 3)
          .map(key => ({ slug: key, ...data[key] }));
        setRelatedBlogs(related);
      });
  }, [slug]);

  const handleBackToBlogs = () => {
    window.location.href = '/blogs';
  };

  const handleRelatedBlogClick = (relatedSlug) => {
    window.location.href = `/blog/${relatedSlug}`;
  };

  const renderContent = (content) => {
    if (!content) return null;
    return content.map((section, index) => {
      switch (section.type) {
        case "intro":
          return (
            <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
              {section.text}
            </p>
          );
        case "tip":
          return (
            <div key={index} className="mb-8 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {section.title}
              </h3>
              <p className="text-blue-800 leading-relaxed">
                {section.text}
              </p>
            </div>
          );
        case "lesson":
          return (
            <div key={index} className="mb-8 p-6 bg-green-50 rounded-xl border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-3">
                {section.title}
              </h3>
              <p className="text-green-800 leading-relaxed">
                {section.text}
              </p>
            </div>
          );
        case "section":
          return (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {section.text}
              </p>
            </div>
          );
        case "list":
          return (
            <div key={index} className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {section.title}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        case "conclusion":
          return (
            <div key={index} className="mt-8 p-6 bg-gray-50 rounded-xl border-l-4 border-gray-400">
              <p className="text-lg text-gray-800 leading-relaxed font-medium">
                {section.text}
              </p>
            </div>
          );
        default:
          return (
            <p key={index} className="text-gray-700 leading-relaxed mb-6">
              {section.text}
            </p>
          );
      }
    });
  };

  if (!currentBlog) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <BlogDetailHeroSection 
        title={currentBlog.title} 
        subtitle="Read our latest insights and articles"
      />
      {/* Blog Content Section */}
      <button 
        onClick={handleBackToBlogs}
        className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200 ml-4 mt-4"
      >
        <svg 
          className="w-5 h-5 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M15 19l-7-7 7-7" 
          />
        </svg>
        Back to Blogs
      </button>
      <BlogDetailContentSection currentBlog={currentBlog} renderContent={renderContent} />
      {/* Share Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BlogDetailShareSection />
      </div>
      {/* Related Articles */}
      <BlogDetailRelatedSection relatedBlogs={relatedBlogs} onBlogClick={handleRelatedBlogClick} />
      {/* CTA Section */}
      <BlogDetailCTASection />
    </div>
  );
};

export default BlogDetail; 
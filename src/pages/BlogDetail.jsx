import { useParams } from 'react-router-dom';
import BlogDetailHeroSection from '../components/blogdetail/BlogDetailHeroSection';
import BlogDetailContentSection from '../components/blogdetail/BlogDetailContentSection';
import BlogDetailShareSection from '../components/blogdetail/BlogDetailShareSection';
import BlogDetailRelatedSection from '../components/blogdetail/BlogDetailRelatedSection';
import BlogDetailCTASection from '../components/blogdetail/BlogDetailCTASection';
import blogDetails from '../data/blogDetails.json';

const BlogDetail = () => {
  const { slug } = useParams();
  const currentBlog = blogDetails[slug] || Object.values(blogDetails)[0];

  // Get related blogs (exclude current)
  const relatedBlogs = Object.entries(blogDetails)
    .filter(([key]) => key !== slug)
    .slice(0, 3)
    .map(([key, blog]) => ({ ...blog, slug: key }));

  // Render content sections
  const renderContent = (content) => {
    return content.map((section, index) => {
      switch (section.type) {
        case 'intro':
          return (
            <p key={index} style={{ color: '#FFFFFF' }} className="text-lg leading-relaxed mb-6">
              {section.text}
            </p>
          );
        case 'tip':
          return (
            <div key={index} style={{ background: '#232E3A' }} className="mb-8 p-6 rounded-xl border-l-4" >
              <h3 className="text-xl font-bold mb-3" style={{ color: '#B69567' }}>{section.title}</h3>
              <p style={{ color: '#FFFFFF' }} className="leading-relaxed">{section.text}</p>
            </div>
          );
        case 'lesson':
          return (
            <div key={index} style={{ background: '#232E3A' }} className="mb-8 p-6 rounded-xl border-l-4" >
              <h3 className="text-xl font-bold mb-3" style={{ color: '#B69567' }}>{section.title}</h3>
              <p style={{ color: '#FFFFFF' }} className="leading-relaxed">{section.text}</p>
            </div>
          );
        case 'section':
          return (
            <div key={index}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#B69567' }}>{section.title}</h3>
              <p style={{ color: '#FFFFFF' }} className="leading-relaxed">{section.text}</p>
            </div>
          );
        case 'list':
          return (
            <div key={index}>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#B69567' }}>{section.title}</h3>
              <ul className="list-disc list-inside space-y-2" style={{ color: '#FFFFFF' }}>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          );
        case 'conclusion':
          return (
            <div key={index} style={{ background: '#232E3A' }} className="mt-8 p-6 rounded-xl border-l-4">
              <p style={{ color: '#FFFFFF' }} className="text-lg leading-relaxed font-medium">{section.text}</p>
            </div>
          );
        default:
          return (
            <p key={index} style={{ color: '#FFFFFF' }} className="leading-relaxed mb-6">{section.text}</p>
          );
      }
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#182028' }}>
      {/* Hero Header */}
      <BlogDetailHeroSection title={currentBlog.title} subtitle="Read our latest insights and articles" />
      {/* Blog Content Section */}
      <BlogDetailContentSection currentBlog={currentBlog} renderContent={renderContent} />
          {/* Share Section */}
      {/* <BlogDetailShareSection /> */}
      {/* Related Articles */}
      <BlogDetailRelatedSection relatedBlogs={relatedBlogs} onBlogClick={(slug) => (window.location.href = `/blog/${slug}`)} />
      {/* CTA Section */}
      <BlogDetailCTASection />
    </div>
  );
};

export default BlogDetail; 
import { useEffect, useState } from 'react';
import BlogsHeroSection from '../components/blogs/BlogsHeroSection';
import BlogsListingSection from '../components/blogs/BlogsListingSection';
import BlogCTA from '../components/blogs/BlogCTA';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/src/data/blogs.json')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBlogClick = (slug) => {
    // Navigate to blog detail page
    window.location.href = `/blog/${slug}`;
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1F2937' }}>
      {/* Hero Section */}
      {/* <BlogsHeroSection 
        title="Blogs" 
        // subtitle="Read our latest insights and articles"
      /> */}
      {/* Blog Listing Section */}
      <BlogsListingSection blogs={blogs} onBlogClick={handleBlogClick} />
      {/* Blog CTA Section */}
      <BlogCTA />
    </div>
  );
};

export default Blogs; 
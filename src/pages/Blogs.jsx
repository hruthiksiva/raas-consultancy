import React from 'react';
import BlogsHeroSection from '../components/blogs/BlogsHeroSection';
import BlogsListingSection from '../components/blogs/BlogsListingSection';
import BlogCTA from '../components/blogs/BlogCTA';
import blogsData from '../data/blogs.json';

const Blogs = () => {
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
      <BlogsListingSection blogs={blogsData} onBlogClick={handleBlogClick} />
      {/* Blog CTA Section */}
      <BlogCTA />
    </div>
  );
};

export default Blogs; 
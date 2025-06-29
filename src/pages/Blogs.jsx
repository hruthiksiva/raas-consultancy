import Header from '../components/Header';

const Blogs = () => {
  return (
    <div>
      <Header 
        title="Blog" 
        subtitle="Read our latest insights and articles"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Content for the Blogs page will go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs; 
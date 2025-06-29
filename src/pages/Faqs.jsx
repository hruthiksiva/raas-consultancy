import Header from '../components/Header';

const Faqs = () => {
  return (
    <div>
      <Header 
        title="Frequently Asked Questions" 
        subtitle="Find answers to common questions"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-lg text-gray-600">
            Content for the FAQs page will go here.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqs; 
import { useParams } from 'react-router-dom';
import Header from '../components/Header';

const BlogDetail = () => {
  const { slug } = useParams();

  // Blog data based on slug
  const blogData = {
    "taxation-tips": {
      title: "Taxation Tips: Save Smart, Not Just Hard",
      excerpt: "Let's face it—taxes aren't exactly everyone's favorite topic. But whether you're a salaried professional, a freelancer, or running your own business, the way you handle taxes can have a serious impact on your financial health.",
      category: "Tax Planning",
      readTime: "5 min read",
      author: "RAAS Team",
      date: "December 2024",
      content: [
        {
          type: "intro",
          text: "Let's face it—taxes aren't exactly everyone's favorite topic. But whether you're a salaried professional, a freelancer, or running your own business, the way you handle taxes can have a serious impact on your financial health. The good news? You don't need to be a chartered accountant to get a grip on your taxes. With a few smart tips and a little discipline, you can legally reduce your tax burden and boost your savings."
        },
        {
          type: "tip",
          title: "Tip 1: Start Early, Stay Ahead",
          text: "Tax planning isn't something you do in March when the deadline's staring you in the face. The smartest taxpayers begin in April—the start of the financial year. Why? Because planning early allows you to spread your investments over time and avoid rushed decisions."
        },
        {
          type: "tip",
          title: "Tip 2: Know Your Deductions and Exemptions",
          text: "Are you making full use of Section 80C? What about deductions under 80D (medical insurance), 24(b) (home loan interest), or 80G (charity)? Most people leave money on the table just because they don't explore these options. A little research or a chat with a tax advisor can go a long way."
        },
        {
          type: "tip",
          title: "Tip 3: Use Digital Tools",
          text: "Apps like ClearTax, Quicko, or even your bank's tax planner can make filing and tracking taxes a breeze. They notify you of deadlines, calculate your eligible deductions, and sometimes even file your returns for you."
        },
        {
          type: "tip",
          title: "Tip 4: Salaried? Talk to Your HR",
          text: "Most companies offer flexible benefit plans that can be tailored to reduce your taxable income. Think meal vouchers, leave travel allowance, fuel reimbursements, etc. If you're not taking advantage of these, it might be time to ask your HR for help."
        },
        {
          type: "tip",
          title: "Tip 5: Keep Your Documents Ready",
          text: "Scrambling to find investment proofs, rent receipts, or insurance statements at the last minute? Set up a \"Tax Folder\" (physical or digital) and drop documents in there all year round. Your future self will thank you."
        },
        {
          type: "conclusion",
          text: "Bottom line: Tax is less about numbers and more about strategy. Start now, plan smart, and let your money work for you—not the other way around."
        }
      ]
    },
    "compliance-simplified": {
      title: "Compliance Simplified: A No-Jargon Guide for Entrepreneurs",
      excerpt: "If you've ever felt lost in a sea of acronyms—GST, MCA, TDS, PF—you're not alone. Compliance might sound like a boring, bureaucratic burden, but it's actually the backbone of a well-run business.",
      category: "Compliance",
      readTime: "4 min read",
      author: "RAAS Team",
      date: "December 2024",
      content: [
        {
          type: "intro",
          text: "If you've ever felt lost in a sea of acronyms—GST, MCA, TDS, PF—you're not alone. Compliance might sound like a boring, bureaucratic burden, but it's actually the backbone of a well-run business. It's what keeps your enterprise legally protected and investor-ready. The good news? With the right approach, compliance doesn't have to be complicated."
        },
        {
          type: "section",
          title: "What Is Compliance, Really?",
          text: "Compliance means playing by the rules set by the government—be it paying taxes, filing returns, or maintaining clean books. It's less about fear and more about discipline."
        },
        {
          type: "section",
          title: "Why It Matters (Especially for Startups)",
          text: "Many startups think they can 'fix things later.' But non-compliance can lead to penalties, reputation damage, or even shutdowns. In fact, clean compliance is one of the top things investors look at during due diligence."
        },
        {
          type: "list",
          title: "Compliance Areas to Watch Out For:",
          items: [
            "Company Law Compliance: ROC filings, board meeting minutes, and annual returns if you're a Pvt Ltd.",
            "Tax Compliance: GST filings, TDS returns, advance tax payments.",
            "Labor Compliance: PF, ESI, Shops & Establishments license.",
            "Data & Privacy Compliance: Especially important for tech/startups dealing with user data."
          ]
        },
        {
          type: "section",
          title: "Simplify with Tech",
          text: "Tools like Zoho Books, Tally, RazorpayX, or compliance platforms like VakilSearch or IndiaFilings make managing deadlines and documentation simple."
        },
        {
          type: "section",
          title: "Monthly Compliance Calendar",
          text: "Set reminders for the 7th, 15th, 20th, and 30th/31st of each month. Most returns and payments revolve around these dates. Better yet, delegate this to a consultant and focus on your growth."
        },
        {
          type: "conclusion",
          text: "Final Thought: Compliance isn't about ticking boxes—it's about building trust. Trust with your customers, investors, and even your future team. The smoother your compliance, the faster you scale."
        }
      ]
    },
    "startup-finance": {
      title: "Startup Finance: Managing Money When Every Rupee Counts",
      excerpt: "Let's be honest: running a startup is like flying a plane while building it. From funding hiccups to surprise expenses, managing money becomes a make-or-break skill.",
      category: "Startup",
      readTime: "6 min read",
      author: "RAAS Team",
      date: "December 2024",
      content: [
        {
          type: "intro",
          text: "Let's be honest: running a startup is like flying a plane while building it. From funding hiccups to surprise expenses, managing money becomes a make-or-break skill."
        },
        {
          type: "section",
          title: "Here's what they don't teach you in MBA school:",
          text: ""
        },
        {
          type: "tip",
          title: "1. Budget is King",
          text: "Don't just set a monthly burn—review it weekly. Track every rupee, and revise when your assumptions change. Set a 6-month runway goal and plan like you'll raise money late, not early."
        },
        {
          type: "tip",
          title: "2. Understand Cash Flow, Not Just Profit",
          text: "You could be profitable on paper and still go bankrupt because you're out of cash. Delay vendor payments (ethically), collect receivables faster, and build a cash cushion for dry months."
        },
        {
          type: "tip",
          title: "3. Don't DIY Everything",
          text: "You're not expected to be a finance guru. Hire a part-time CFO or work with a finance consultant early. A good one pays for themselves many times over."
        },
        {
          type: "tip",
          title: "4. Fundraising? Know Your Numbers Cold",
          text: "Investors will quiz you on unit economics, customer acquisition costs, LTV, and churn. If you're guessing, they'll pass. Build a clean, logical financial model—even if you're pre-revenue."
        },
        {
          type: "tip",
          title: "5. Be Frugal, Not Cheap",
          text: "Invest in tools, talent, and partners who improve your execution. But cut out vanity spends—no posh offices, oversized merchandise budgets, or unnecessary SaaS subscriptions."
        },
        {
          type: "tip",
          title: "6. Prepare for Plan B",
          text: "Markets change, deals fall through. Always keep an emergency plan. Bootstrap longer if needed, and stay lean during pivots."
        },
        {
          type: "conclusion",
          text: "Conclusion: Startup finance isn't rocket science, but it does require clarity, discipline, and humility. Remember, the best entrepreneurs aren't just dreamers—they're financially grounded realists."
        }
      ]
    },
    "expert-advice": {
      title: "Expert Advice: Straight Talk from Seasoned Professionals",
      excerpt: "Every successful business has that one turning point—a decision that changed everything. Often, those breakthroughs come from learning or listening to someone who's \"been there, done that.\"",
      category: "Advisory",
      readTime: "7 min read",
      author: "RAAS Team",
      date: "December 2024",
      content: [
        {
          type: "intro",
          text: "Every successful business has that one turning point—a decision that changed everything. Often, those breakthroughs come from learning or listening to someone who's \"been there, done that.\" In this space, we bring you expert insights distilled into practical wisdom."
        },
        {
          type: "lesson",
          title: "Lesson 1: Start Before You're Ready",
          text: "Ravi, a chartered accountant turned startup mentor, says most founders delay their launch looking for perfection. \"An MVP is enough to start. Perfection is a moving target,\" he insists. The key is execution."
        },
        {
          type: "lesson",
          title: "Lesson 2: Build Relationships, Not Just Revenue",
          text: "Neha, a compliance advisor for MSMEs, swears by trust. \"Clients stay when you educate them, not just serve them. Simplify the jargon, and they'll stay with you for years.\""
        },
        {
          type: "lesson",
          title: "Lesson 3: Understand the 'Why' of Laws",
          text: "Vinod, a retired government officer, often reminds startups that laws aren't roadblocks—they're guidelines. \"Once you understand the purpose behind compliance or tax, you stop fearing it,\" he says."
        },
        {
          type: "lesson",
          title: "Lesson 4: Delegate Like a Pro",
          text: "From accounts to legal to marketing—know when to bring in specialists. Your job as a founder isn't to do everything, but to ensure everything gets done."
        },
        {
          type: "lesson",
          title: "Lesson 5: Digital-First Is No Longer Optional",
          text: "Riya, a digital transformation consultant, highlights that every business—whether B2B or B2C—must have a digital front. \"It's not about websites anymore. It's about visibility, credibility, and automation.\""
        },
        {
          type: "lesson",
          title: "Lesson 6: Legal Clarity is Growth Fuel",
          text: "Contracts, agreements, shareholder clarity—all of this is foundational. Don't treat legal documentation as a \"just-in-case\" scenario. It's the bedrock of scale."
        },
        {
          type: "conclusion",
          text: "Final Words: Expert advice isn't about fancy terminology—it's about perspective. The right advice at the right time can save you years of trial and error. Learn from those ahead of you, and someday, you'll be that expert for someone else."
        }
      ]
    }
  };

  const currentBlog = blogData[slug] || blogData["taxation-tips"];

  const handleBackToBlogs = () => {
    window.location.href = '/blogs';
  };

  const renderContent = (content) => {
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

  return (
    <div className="min-h-screen">
      {/* Hero Header */}
      <Header 
        title={currentBlog.title} 
        subtitle="Read our latest insights and articles"
      />

      {/* Blog Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <button 
              onClick={handleBackToBlogs}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
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
          </div>

          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                {currentBlog.category}
              </span>
              <span className="text-gray-500 text-sm">
                {currentBlog.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {currentBlog.title}
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              {currentBlog.excerpt}
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <span>By {currentBlog.author}</span>
              <span className="mx-2">•</span>
              <span>{currentBlog.date}</span>
            </div>
          </div>

          {/* Blog Image */}
          <div className="mb-8">
            <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <span className="text-white/80 text-lg font-medium">
                {currentBlog.title.split(':')[0]}
              </span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            {renderContent(currentBlog.content)}
          </div>

          {/* Share Section */}
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
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.keys(blogData).filter(key => key !== slug).slice(0, 3).map((blogKey) => {
              const blog = blogData[blogKey];
              return (
                <div 
                  key={blogKey}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => window.location.href = `/blog/${blogKey}`}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white/80 text-lg text-center px-4">
                      {blog.title.split(':')[0]}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      Read More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Professional Financial Advice?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Our experts are here to help you with all your financial and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Consultation
            </a>
            <a 
              href="/blogs" 
              className="inline-block bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Read More Articles
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail; 
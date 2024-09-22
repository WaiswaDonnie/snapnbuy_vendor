import { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: 'What is SnapnBuy Vendor?',
      answer: `SnapnBuy Vendor started as the world's easiest, simplest, and best order-taking 
               and management platform for all local businesses. We are soon launching 
               additional tools and features to help local businesses not only manage 
               online orders but also grow their business anywhere—whether they have 
               physical locations, sell only online, or both.`,
    },
    {
      question: 'Who is SnapnBuy Vendor for?',
      answer: `SnapnBuy Vendor is for any local business, from home bakers and crafters to 
               restaurants and cafés. We are building an all-in-one platform to help 
               streamline your sales, marketing, and operations—without the need to 
               spend thousands in fees each month.`,
    },
    {
      question: 'Why should I use SnapnBuy Vendor?',
      answer: `The average local business needs around 7 different tools to manage 
               orders, sales, marketing, and operations, which can quickly add up 
               in monthly fees and time spent switching between them. SnapnBuy Vendor offers 
               an integrated platform to manage everything, saving time and costs 
               without steep learning curves or expensive subscription fees.`,
    },
    {
      question: 'How much does SnapnBuy Vendor cost?',
      answer: `You can start using SnapnBuy Vendor for free and later choose a plan that 
               suits your business needs. Our free trial offers more than most other 
               platforms, and you can keep access to additional features by selecting 
               a premium plan.`,
    },
    {
      question: 'Where do my orders go?',
      answer: `We’ve built an order management system for you. Simply log in to your 
               admin dashboard, where you can manage your orders, view earnings, add 
               products, and more.`,
    },
  ];

  return (
    <section className="faq-section mt-16 px-4">
    <h2 className="text-3xl font-bold mb-10 text-center">SnapnBuy Vendor Frequently Asked Questions</h2>
    
    <div className="space-y-4">
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item border-b border-gray-200">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full text-left py-4 font-semibold text-lg text-gray-800 hover:text-orange-500 transition-colors duration-300"
          >
            {faq.question}
            <span className={`float-right transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
              <svg
                className="w-5 h-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          {openIndex === index && (
            <p className="text-gray-700 mt-2 px-4 pb-4 transition-opacity duration-300">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  </section>
  );
};

export default FAQSection;

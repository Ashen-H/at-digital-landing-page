// src/components/FAQ.jsx
import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
      answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
      answer: "Lorem ipsum dolor sit amet consectetur. Sapien massa morbi risus sagittis tortor integer."
    },
    {
      question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
      answer: "Lorem ipsum dolor sit amet consectetur. Elementum ultrices nulla faucibus odio est sed aliquam."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-title font-semibold font-poppins text-primary text-center mb-12">
          Frequently asked questions
        </h2>
        
        <div className="space-y-4">
  {faqs.map((faq, index) => (
    <div key={index} className="rounded-lg overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-[#FAF8FF]"
        onClick={() => toggleFAQ(index)}
      >
        <span className={`font-medium font-paragraph ${activeIndex === index ? 'text-primary' : ''}`}>
          {faq.question}
        </span>
        <span className="text-2xl">
          {activeIndex === index ? '-' : '+'}
        </span>
      </button>

      {activeIndex === index && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-600 font-normal font-subtitle">{faq.answer}</p>
        </div>
      )}
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default FAQ;
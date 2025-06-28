// src/components/FAQ.jsx
import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is Farmers Market?",
      answer: "Farmers Market is a platform where local farmers and artisans can sell their products directly to consumers."
    },
    {
      question: "How can I place an order?",
      answer: "You can browse our products, add the product id , and also farmer id then sms will send to farmer mobile."
    },
    {
      question: "Do you offer delivery?",
      answer: "Yes, we offer delivery services in selected areas. Please check our delivery policy for more details."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team via email at support@farmersmarket.com or call us at +91 99887 6757."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods, including credit cards, debit cards, and online payment gateways."
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

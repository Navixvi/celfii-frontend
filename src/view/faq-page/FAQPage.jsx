import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { faqs } from "./faqs";

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { faqId } = useParams();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const index = faqId ? Number(faqId) : null;

    if (index !== null && !isNaN(index) && index < faqs.length) {
      setOpenIndex(index);

      setTimeout(() => {
        const element = document.getElementById(`faq-${index}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [faqId]);

  return (
    <div className="max-w-3xl p-6 mx-auto mt-12 bg-white rounded-lg shadow-lg">
      <h2 className="mb-8 text-3xl font-semibold text-center text-gray-900">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} id={`faq-${index}`} className="pb-4 border-b border-gray-200">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-xl font-medium text-gray-800">{faq.question}</h3>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180 text-red-500" : "text-gray-500"
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-4 text-base leading-relaxed text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;

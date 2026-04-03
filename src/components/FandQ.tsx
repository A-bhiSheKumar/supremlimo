import  { useState } from "react";

const faqData = [
  {
    question: "How Do I Book A Ride?",
    answer: "You can book a ride through our website or by contacting our support team.",
  },
  {
    question: "Are Your Chauffeurs Professional And Trained?",
    answer: "Yes, all our chauffeurs are highly trained and experienced professionals.",
  },
  {
    question: "What Services Do You Offer?",
    answer: "We offer airport transfers, corporate travel, event transportation, and more.",
  },
  {
    question: "Do You Provide Transportation For Events And Groups?",
    answer: "Yes, we provide transportation for events, weddings, and large groups.",
  },
  {
    question: "Do You Provide Service Outside Of Vancouver?",
    answer: "Yes, we offer services outside Vancouver depending on availability.",
  },
  {
    question:
      "Do You Provide Cross-Border Transfers Between Vancouver And Seattle?",
    answer: "Yes, we provide cross-border transfers with proper documentation.",
  },
  {
    question: "What Types Of Vehicles Are In Your Fleet?",
    answer: "Our fleet includes luxury sedans, SUVs, and executive vans.",
  },
  {
    question: "How Do I Contact You For Urgent Assistance?",
    answer: "You can contact us via phone or live chat for urgent support.",
  },
];

const FandQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-16">
        FAQ
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 pb-4"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center text-left py-4"
            >
              <span className="text-gray-700 font-medium">
                {item.question}
              </span>

              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FandQ;
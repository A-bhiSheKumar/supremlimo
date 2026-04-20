import { useState } from "react";

const faqData = [
  {
    question: "How Do I Book A Ride?",
    answer:
      "You can book instantly using our online reservation system, or contact our 24/7 dispatch team by phone, email, or WhatsApp. We provide immediate confirmations and flexible booking options.",
  },
  {
    question: "Are Your Chauffeurs Professional And Trained?",
    answer:
      "Yes. All of our chauffeurs are licensed Class 4 (or higher) commercial drivers, thoroughly background-checked, and vetted with criminal record screenings. Each brings proven safe driving experience and is trained to provide professional, discreet, and punctual service.",
  },
  {
    question: "What Services Do You Offer?",
    answer:
      "We specialize in private car service, luxury car service, black car service, chauffeur service, airport transfers, corporate travel, Whistler & Seattle transfers, and premium event transportation.",
  },
  {
    question: "Do You Provide Transportation For Events And Groups?",
    answer:
      "Yes. We specialize in event transportation, conference shuttles, weddings, and production logistics. Our dedicated team ensures seamless coordination for groups of all sizes.",
  },
  {
    question: "Do You Provide Service Outside Of Vancouver?",
    answer:
      "Yes. In addition to Vancouver, we proudly serve Whistler, Seattle, Calgary, Montreal & Toronto.",
  },
  {
    question:
      "Do You Provide Cross-Border Transfers Between Vancouver And Seattle?",
    answer:
      "Yes. We specialize in reliable, seamless cross-border limo services between Vancouver, BC, and Seattle, WA. Our experienced chauffeurs and pre-arrival border planning make the journey smooth and stress-free.",
  },
  {
    question: "What Types Of Vehicles Are In Your Fleet?",
    answer:
      "Our fleet includes Cadillac Escalade SUVs, Chevy Suburbans, Mercedes Sedans, Cadillac Lyriq EV, Mercedes Sprinter Vans, Mini Coaches, and 56-passenger Motor Coaches — all late-model, luxury vehicles with premium amenities.",
  },
  {
    question: "How Do I Contact You For Urgent Assistance?",
    answer:
      "You can reach our dispatch team 24/7 by phone at +1 (360) 318-7171, by email at info@supremelimo.ca, or directly via WhatsApp for instant support.",
  },
];

const FandQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <h2 className="text-center text-4xl font-bold text-blue-600 mb-16">
        FAQ
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {faqData.map((item, index: number) => (
          <div key={index} className="border-b border-gray-200 pb-4">
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
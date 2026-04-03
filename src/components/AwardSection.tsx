const AwardSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="max-w-lg">
            <h2 className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1e3a5f] leading-[1.1] mb-6">
              Five-Star<br />
              Experiences,<br />
              <span className="font-extrabold">Supreme<br />
              Standards</span>
            </h2>
            
            <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
              At Supreme Limousine, we go beyond transportation — we deliver an elevated 
              travel experience defined by precision, professionalism, and personalized 
              service. Every ride is managed with care, ensuring punctuality, comfort, 
              and complete peace of mind. Recognized with over 200 five-star Google 
              reviews and honored as a 2025 Canadian Choice Award Winner, we proudly 
              set the gold standard in luxury chauffeur service.
            </p>
          </div>

          {/* Right - Gold Star Award - Larger with realistic metallic gradient */}
          <div className="flex justify-center lg:justify-end">
            <img src="https://supreme.limo/wp-content/uploads/2024/08/Winner-Badge-2025.png" alt="a"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardSection;
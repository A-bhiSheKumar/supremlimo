const AwardSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT - Text */}
          <div className="relative max-w-lg">

            {/* Soft blue gradient background - matching screenshot */}
            <div
              className="absolute -left-16 top-20 w-[320px] h-[320px] z-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(191, 219, 254, 0.5) 0%, rgba(219, 234, 254, 0.2) 50%, transparent 70%)",
              }}
            ></div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-[2.5rem] lg:text-[3.25rem] xl:text-[3.75rem] leading-[1.1] mb-6">
                
                <span className="block font-light text-[#4a6fa5]">
                  Five-Star
                </span>

                <span className="block font-light text-[#4a6fa5]">
                  Experiences,
                </span>

                <span className="block font-bold text-[#1e3a5f]">
                  Supreme
                </span>

                <span className="block font-bold text-[#1e3a5f]">
                  Standards
                </span>

              </h2>

              <p className="text-gray-600 text-[15px] lg:text-[16px] leading-relaxed">
                At LGA Car Service, we go beyond transportation — we deliver an elevated
                travel experience defined by precision, professionalism, and personalized
                service. Every ride is managed with care, ensuring punctuality, comfort,
                and complete peace of mind. Recognized with over 200 five-star Google
                reviews and honored as a 2025 American Choice Award Winner, we proudly
                set the gold standard in luxury chauffeur service.
              </p>
            </div>
          </div>

          {/* RIGHT - Award Badge */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_xmY_kgXhaWgz67d6e1ALkYOobu619iMkBQ&s"
              alt="American Choice Award Winner 2025"
              className="w-[300px] lg:w-[380px] xl:w-[420px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AwardSection;
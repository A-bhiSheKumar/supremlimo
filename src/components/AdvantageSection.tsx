const AdvantageSection = () => {
  const advantages = [
    'Stress-Free Ride Experience — On Time, Every Time.',
    'Available 24/7 With Real-Time Flight Tracking',
    'Effortless Online Bookings, Flexible Changes',
    'Discreet & Professional Chauffeurs',
    'Premium Fleet Options',
  ];

  const images = [
    "https://luxyride.com/_next/image?url=https%3A%2F%2Fwealthy-ants-ba476bfe7f.media.strapiapp.com%2FWhat_is_the_Difference_Between_a_Limo_and_a_Limousine_f287b2102e.jpg&w=1200&q=75", // Fleet lineup - top left
    "https://supreme.limo/wp-content/uploads/2025/08/IMG_5534-2048x1536.jpg", // JW Marriott van - bottom left (larger)
    "https://www.shutterstock.com/image-photo/caucasian-middle-aged-man-standing-600nw-2701743347.jpg", // Chauffeur with SUV - top right (larger)
    "https://supreme.limo/wp-content/uploads/2024/07/CB5EAF30-3B92-4F7D-B60D-A7ACE444345B-2048x1536.jpg", // Private jet - bottom right
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT - Image Grid - Exact layout from screenshot */}
          <div className="grid grid-cols-2 gap-3 h-[480px] lg:h-[580px]">
            
            {/* Left Column */}
            <div className="flex flex-col gap-3 h-full">
              {/* Top Left - Smaller */}
              <div className="flex-[0.85] rounded-lg overflow-hidden">
                <img
                  src={images[0]}
                  alt="VIP Chauffeured Transportation"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom Left - Larger (Van at JW Marriott) */}
              <div className="flex-[1.15] rounded-lg overflow-hidden">
                <img
                  src={images[1]}
                  alt="Luxury van at JW Marriott"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 h-full">
              {/* Top Right - Larger (Chauffeur with SUV) */}
              <div className="flex-[1.15] rounded-lg overflow-hidden">
                <img
                  src={images[2]}
                  alt="Professional chauffeur with SUV"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom Right - Smaller (Private jet) */}
              <div className="flex-[0.85] rounded-lg overflow-hidden">
                <img
                  src={images[3]}
                  alt="Private jet transfer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>

          {/* RIGHT - Content */}
          <div className="lg:pt-4">
            <h2
              className="text-[2.5rem] lg:text-[3.25rem] xl:text-[3.75rem] font-bold leading-[1.05] mb-8"
              style={{ color: "#1e3a5f" }}
            >
              The Supreme<br />Advantage
            </h2>

            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center text-base lg:text-[17px] font-medium"
                  style={{ color: "#1e3a5f" }}
                >
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg
                      className="w-3 h-3"
                      style={{ color: "#2563eb" }}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
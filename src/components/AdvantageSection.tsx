const AdvantageSection = () => {
  const advantages = [
    'Stress-Free Ride Experience — On Time, Every Time.',
    'Available 24/7 With Real-Time Flight Tracking',
    'Effortless Online Bookings, Flexible Changes',
    'Discreet & Professional Chauffeurs',
    'Premium Fleet Options',
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Image Grid - Exact layout from screenshot */}
          <div className="grid grid-cols-2 gap-3 h-[500px] lg:h-[600px]">
            {/* Left Column - 2 stacked images */}
            <div className="flex flex-col gap-3 h-full">
              {/* Top Left */}
              <div className="flex-1 overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop"
                  alt="Fleet lineup"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Bottom Left - Taller */}
              <div className="flex-[1.3] overflow-hidden rounded-lg bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=600&h=500&fit=crop"
                  alt="Luxury van at JW Marriott"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Right Column - Tall image spans full height */}
            <div className="row-span-1 h-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=800&fit=crop"
                alt="Chauffeur with SUV"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="lg:pt-4">
            <h2 className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1e3a5f] leading-[1.1] mb-8 lg:mb-10">
              The Supreme<br />
              Advantage
            </h2>
            
            <ul className="space-y-4">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-center text-base lg:text-lg text-[#1e3a5f] font-medium">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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
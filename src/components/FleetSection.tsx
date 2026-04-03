import { useState, useEffect } from 'react';

const FleetSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const fleet = [
    {
      name: '2026 Cadillac\nEscalade ESV',
      passengers: '5 Passengers',
      bags: '5 Bags',
      image: 'https://supreme.limo/wp-content/uploads/2025/04/2025_mercedes_sprinter_combi-2500-4x4_032_9040-e1744353073783.png',
      description: 'The Cadillac Escalade Platinum offers unmatched sophistication and comfort, featuring a rich tech interior that adds warmth and elegance to every ride',
      boldWord: 'interior',
    },
    {
      name: 'Mercedes\nSprinter Van',
      passengers: '9-14 Passengers',
      bags: '14 Bags',
      image: 'https://supreme.limo/wp-content/uploads/2025/04/2025_mercedes_sprinter_combi-2500-4x4_032_9040-e1744353073783.png',
      description: 'The Sprinter accommodates 9-14 passengers and up to 14 bags, ideal for corporate outings, roadshow service, client entertainment, and weddings.',
      boldWord: '',
    },
    {
      name: '2024 Cadillac\nLyriq EV',
      passengers: '2 Passengers',
      bags: '2 Bags',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=400&h=250&fit=crop',
      description: 'The Cadillac Lyriq EV delivers a premium, all-electric experience tailored for business travelers. With a spacious, quiet cabin and cutting-edge technology,',
      boldWord: '',
    },
    // Slide 2
    {
      name: 'Mercedes S-Class',
      passengers: '3 Passengers',
      bags: '3 Bags',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=250&fit=crop',
      description: 'The Mercedes-Benz S580 sets the standard for first-class luxury with advanced features and refined comfort.',
      boldWord: '',
    },
    {
      name: 'BMW 7 Series',
      passengers: '3 Passengers',
      bags: '3 Bags',
      image: 'https://images.unsplash.com/photo-1555215695-3004980adade?w=400&h=250&fit=crop',
      description: 'The BMW 7 Series combines cutting-edge technology with supreme comfort and massaging seats.',
      boldWord: '',
    },
    {
      name: 'Lincoln Navigator',
      passengers: '7 Passengers',
      bags: '7 Bags',
      image: 'https://images.unsplash.com/photo-1566008885218-90abf9200ddb?w=400&h=250&fit=crop',
      description: 'The Lincoln Navigator offers expansive space and refined luxury with three rows of premium seating.',
      boldWord: '',
    },
    // Slide 3
    {
      name: 'Chevrolet Suburban',
      passengers: '6 Passengers',
      bags: '6 Bags',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=250&fit=crop',
      description: 'The Chevrolet Suburban RST offers a refined blend of style, space, and functionality for corporate travel.',
      boldWord: '',
    },
    {
      name: 'Audi A8',
      passengers: '3 Passengers',
      bags: '3 Bags',
      image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=400&h=250&fit=crop',
      description: 'The Audi A8 represents sophisticated German engineering with predictive suspension and executive rear seating.',
      boldWord: '',
    },
    {
      name: 'Range Rover',
      passengers: '5 Passengers',
      bags: '5 Bags',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=400&h=250&fit=crop',
      description: 'The Range Rover delivers exceptional off-road capability with uncompromising luxury and comfort.',
      boldWord: '',
    },
  ];

  const totalSlides = 3;
  const visibleFleet = fleet.slice(activeSlide * 3, activeSlide * 3 + 3);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  // Helper to render description with bold word
  const renderDescription = (desc: string, bold: string) => {
    if (!bold) return desc;
    const parts = desc.split(bold);
    return (
      <>
        {parts[0]}
        <span className="font-bold">{bold}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1e3a5f] mb-2">
            Our <span className="font-extrabold">Fleet</span>
          </h2>
          <p className="text-gray-600 text-base lg:text-lg max-w-4xl mx-auto mt-4 leading-relaxed">
            Our fleet is designed to meet the needs of every traveler — from solo executives to large event groups. Each vehicle is late-model, meticulously maintained, and equipped with premium amenities to ensure every ride is comfortable, stylish, and reliable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {visibleFleet.map((car, index) => (
            <div
              key={index}
              className="border border-dashed border-gray-300 rounded p-6 flex flex-col items-center text-center"
            >
              {/* Car Image */}
              <div className="w-full h-36 mb-4 flex items-center justify-center">
                <img
                  src={car.image}
                  alt={car.name.replace('\n', ' ')}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Car Name - Black text */}
              <h3 className="text-2xl lg:text-[1.75rem] font-bold text-black leading-tight mb-2 whitespace-pre-line">
                {car.name}
              </h3>

              {/* Passengers & Bags - Gray text */}
              <p className="text-gray-500 text-sm mb-4">
                ({car.passengers} | {car.bags})
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {renderDescription(car.description, car.boldWord)}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots - 9 dots total */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: 9 }).map((_, index) => {
            // Calculate which slide this dot represents
            const slideIndex = Math.floor(index / 3);
            const isActive = slideIndex === activeSlide;
            
            return (
              <button
                key={index}
                onClick={() => goToSlide(slideIndex)}
                className={`w-2 h-2 rounded-full transition-all ${
                  isActive
                    ? 'bg-gray-800'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
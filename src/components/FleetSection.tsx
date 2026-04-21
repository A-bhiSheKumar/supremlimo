import { useState, useEffect } from 'react';

const FleetSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const fleet = [
    {
      name: 'Luxury Sedan',
      image: 'https://supreme.limo/wp-content/uploads/2025/04/2025-Cadillac-LYRIQ-Luxury-1-AWD.jpg',
      capacity: '3 passengers',
      description: 'Our Luxury Sedan option is the most popular option. With seasoned, professionally dressed drivers and all-black sedans guaranteed to be 2017 or newer, you\'ll get great transportation at a great value.',
      features: ['Ample luggage space', 'Leather seats', 'Climate control']
    },
    {
      name: 'Luxury SUV',
      image: 'https://supreme.limo/wp-content/uploads/2023/06/WhatsApp-Image-2023-10-11-at-11.14.59-PM.jpeg',
      capacity: '6 passengers',
      description: 'Booking our SUV for airport transportation and other transportation services in the New York area has become a popular choice. Ideally sized for families of 3-6 or small groups of business associates. A sleek option for nightlife, and a wise option to book in case of inclement weather, too.',
      features: ['Baby seats available upon advance request', 'Smooth ride', 'Premium sound system']
    },
    {
      name: 'Luxury Van',
      image: 'https://supreme.limo/wp-content/uploads/2024/07/6DD31BB5-5FC1-44C0-87E2-FC740BC2569B.jpeg',
      capacity: '14 passengers',
      description: 'The perfect luxurious vehicle for creating unforgettable memories. Perfect for weddings, proms, or VIP occasions. Great for that special event or night out.',
      features: ['Mood lighting', 'Extended legroom', 'Premium sound system']
    },
    {
      name: 'Standard Sedan',
      image: 'https://supreme.limo/wp-content/uploads/2024/07/6DD31BB5-5FC1-44C0-87E2-FC740BC2569B.jpeg',
      capacity: '3 passengers',
      description: 'Ride a standard sedan to get to and from Westchester airport, JFK, LaGuardia, or Newark airports. The standard sedan option, while a professional and commercial level vehicle, will be sturdy and solid Lincoln MKT or similar.',
      features: ['Mood lighting', 'Extended legroom', 'Premium sound system']
    },
    {
      name: 'Ultra Luxury Sedan',
      image: 'https://supreme.limo/wp-content/uploads/2024/07/6DD31BB5-5FC1-44C0-87E2-FC740BC2569B.jpeg',
      capacity: '3 passengers',
      description: 'Not every car service in the New York area offers true Ultra Luxury sedans like we do. Mercedes S550s or similar are provided -- these are the newest and most prestigious rides you can find. Enjoy the very best in safety, comfort, features and style-- reserve now.',
      features: ['Mood lighting', 'Extended legroom', 'Premium sound system']
    },
    {
      name: 'Mercedes Sprinter Van',
      passengers: '9-14 Passengers',
      bags: '14 Bags',
      image: 'https://supreme.limo/wp-content/uploads/2025/04/2025_mercedes_sprinter_combi-2500-4x4_032_9040-e1744353073783.png',
      description: 'The Sprinter accommodates 9-14 passengers and up to 14 bags, ideal for corporate outings, roadshow service, client entertainment, and weddings.',
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(fleet.length / itemsPerSlide);

  const visibleFleet = fleet.slice(activeSlide * itemsPerSlide, activeSlide * itemsPerSlide + itemsPerSlide);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
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
                  alt={car.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Car Name */}
              <h3 className="text-2xl lg:text-[1.75rem] font-bold text-black leading-tight mb-2">
                {car.name}
              </h3>

              {/* Passengers & Bags */}
              <p className="text-gray-500 text-sm mb-4">
                ({car.passengers || car.capacity} | {car.bags || 'Standard'})
              </p>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {car.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeSlide
                  ? 'bg-gray-800 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FleetSection;
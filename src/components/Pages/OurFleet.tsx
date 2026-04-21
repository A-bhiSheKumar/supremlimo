import React, { useState } from 'react';

const OurFleet: React.FC = () => {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({});

  const toggleDetails = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const fleetData = [
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
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Long distance transfer"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Our Fleet
            </h1>

            <div className="w-24 h-1 bg-blue-600 my-6" />

            <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
              LGA Car Services | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium w-full sm:w-auto transition-all duration-300 hover:bg-blue-700">
                Book Online
              </button>

              <button className="bg-white text-black px-8 py-3 rounded font-medium w-full sm:w-auto transition-all duration-300 hover:bg-gray-100">
                   Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Collection Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gray-50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wide">
              Features
            </span>
            <h2 className="mt-2 text-4xl font-bold text-gray-900 md:text-5xl">
              Our Exclusive Collection
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Enjoy first-class travel with our luxurious, high-end vehicles designed to meet your needs
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fleetData.map((vehicle, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white">
                    {vehicle.name}
                  </h3>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  {/* Capacity */}
                  <div className="mb-4 flex items-center justify-between text-gray-600">
                    <div className="flex items-center gap-2">
                      <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-sm font-medium">Capacity: {vehicle.capacity}</span>
                    </div>
                    <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {vehicle.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6">
                    <div className="mb-2 flex items-center gap-2">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="font-semibold text-gray-900">Key Features:</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {vehicle.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto space-y-3">
                    <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      View Rates & Reserve
                    </button>

                    <button
                      onClick={() => toggleDetails(index)}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-50"
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${expandedCards[index] ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurFleet;
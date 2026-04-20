import React from 'react';

const Philadelphia: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
         <div className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" 
            alt="Luxury car at hotel entrance" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Philadelphia
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
               Limousine Service | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-all duration-300">
                Book Online
              </button>
              <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded font-medium transition-all duration-300">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Car Service Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?q=80&w=1000&auto=format&fit=crop" 
                alt="Luxury Car in Philadelphia" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            
            {/* Right Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Luxury Car & Chauffeur Service in Philadelphia
              </h2>
              <div className="space-y-4 text-justify text-lg leading-relaxed text-gray-600">
                <p>
                  Experience the finest limo service in Philadelphia with LGA Car Service — where luxury, comfort, and professionalism come together seamlessly. Whether you're traveling for business or leisure, our <strong>private car service</strong> and <strong>chauffeur-driven vehicles</strong> guarantee a smooth, stylish, and stress-free ride throughout the city.
                </p>
                <p>
                  Our diverse fleet of luxury limousines, black cars, SUVs, and executive sedans is designed to cater to every occasion. Each vehicle is immaculately maintained and driven by <strong>uniformed, experienced chauffeurs</strong> who uphold the highest standards of discretion and service. From corporate executives to visiting VIPs, every guest enjoys first-class treatment from start to finish.
                </p>
              </div>
              <button className="rounded bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Text Block */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                  Private Car Service for every occasion
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-600">
                Whether it's a birthday, anniversary, or a corporate getaway, our luxurious vehicles and attentive chauffeurs ensure that your celebration is stylish and unforgettable.
              </p>
            </div>

            {/* Concert Transportation Card */}
            <div className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-blue-600">
                Concert Transportation
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Whether you're attending a concert, show, or hockey game at <strong>Rogers Arena or BC Place</strong>, our premium transportation service ensures you get there effortlessly. Skip the parking hassles and let us handle the logistics.
              </p>
              <button className="rounded bg-blue-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                Book Now
              </button>
            </div>

            {/* Dinner Transfers Card */}
            <div className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <h3 className="mb-4 text-2xl font-bold text-blue-600">
                Dinner Transfers in Philadelphia
              </h3>
              <p className="mb-6 leading-relaxed text-gray-600">
                Make a lasting impression with our luxurious dinner transfers. <strong>Arrive at your dining destination in style</strong>, setting the tone for an exceptional evening with friends, family, or colleagues.
              </p>
              <button className="rounded bg-blue-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Best-in-class Chauffeur Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                Best-in-class Chauffeur services Philadelphia
              </h2>
              <div className="space-y-4 text-justify text-lg leading-relaxed text-gray-600">
                <p>
                  LGA Car Service specializes in <strong>airport transfers</strong>, corporate transportation, wedding limos, dinner transfers, concerts, and special events. Whether you need a <strong>VIP limo</strong> for a red-carpet event, a <strong>town car service</strong> for an important meeting, or <strong>chauffeur service</strong> for a night out in Philadelphia, our professional drivers ensure punctuality, comfort, and elegance in every ride.
                </p>
                <p>
                  We understand that every trip is unique — that's why we offer flexible <strong>hourly and point-to-point options</strong>, custom itineraries, and <strong>24/7 availability</strong>. Enjoy a truly personalized travel experience in Philadelphia with our <strong>luxury limo and black car service</strong>, backed by reliability, safety, and <em>"Quality Without Compromise."</em>
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=1000&auto=format&fit=crop" 
                alt="Chauffeur Service Philadelphia" 
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Philadelphia;
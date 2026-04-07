import React from "react";
import { Plane, Clock, Shield, Car } from "lucide-react";

const WhistlerTransfer = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden mb-40">
      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Whistler transfer service"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Whistler Transfer Service
            </h1>

            <div className="w-16 h-[2px] bg-white my-6" />

            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              Limousine Service | Private Transfers | Chauffeur-Driven Door to
              Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-white text-black px-6 py-3 rounded-md font-medium w-full sm:w-auto transition-all duration-300 hover:bg-gray-100">
                Book Online
              </button>

              <button className="border border-white text-white px-6 py-3 rounded-md font-medium w-full sm:w-auto transition-all duration-300 hover:bg-white hover:text-black">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Vancouver to Whistler Transfers Made Easy
            </h2>

            <div className="w-12 h-[2px] bg-black mb-6" />

            <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
              Experience luxury, reliability, and comfort with our Whistler
              transfer service. Whether you're heading for a ski trip,
              corporate retreat, or mountain escape, we ensure a seamless
              journey from Vancouver to Whistler.
            </p>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Sit back and enjoy the breathtaking Sea-to-Sky Highway while our
              professional chauffeurs handle everything with precision and care.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070"
            alt="Whistler welcome"
            className="rounded-lg shadow-xl h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover"
          />
        </div>
      </section>

      {/* AIRPORT SECTION */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070"
            alt="Airport transfer"
            className="rounded-lg shadow-xl h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Vancouver Airport (YVR) to Whistler
            </h2>

            <div className="w-12 h-[2px] bg-black mb-6" />

            <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
              Enjoy seamless airport pickups with real-time flight tracking,
              complimentary waiting time, and professional meet & greet
              service.
            </p>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Your chauffeur will meet you inside the terminal, assist with
              luggage, and escort you to your private luxury vehicle.
            </p>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center leading-tight">
            Why Book Your Whistler Transfer With Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <div className="flex items-start gap-4">
              <Plane className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Private Transfers</h3>
                <p className="text-gray-600 leading-relaxed">
                  No shared rides. 100% personalized experience tailored to
                  your schedule.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">24/7 Availability</h3>
                <p className="text-gray-600 leading-relaxed">
                  Early morning or late night — we operate around the clock.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Secure Booking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparent pricing with no hidden charges.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Car className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-2">Modern Fleet</h3>
                <p className="text-gray-600 leading-relaxed">
                  Luxury sedans, SUVs, and Sprinter vans available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GROUP TRANSPORT */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070"
            alt="Group transportation"
            className="rounded-lg shadow-xl h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover"
          />

          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Group & Event Transportation
            </h2>

            <div className="w-12 h-[2px] bg-black mb-6" />

            <p className="text-gray-600 mb-4 leading-relaxed text-base sm:text-lg">
              Traveling with a group? We offer luxury vans and mini coaches
              perfect for weddings, corporate events, and group trips.
            </p>

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              Enjoy spacious interiors, luggage capacity, and smooth
              coordination.
            </p>
          </div>
        </div>
      </section>

      {/* SCENIC */}
      <section className="py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Scenic Stops Along the Way
            </h2>

            <div className="w-12 h-[2px] bg-black mb-6" />

            <ul className="text-gray-600 space-y-4 text-base sm:text-lg leading-relaxed">
              <li>• Stanley Park & Lions Gate Bridge</li>
              <li>• Capilano Suspension Bridge</li>
              <li>• Brandywine Falls</li>
              <li>• Whistler Olympic Park</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070"
            alt="Scenic route"
            className="rounded-lg shadow-xl h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover"
          />
        </div>
      </section>

      {/* WINTER */}
      <section className="py-14 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070"
            alt="Winter ready transportation"
            className="rounded-lg shadow-xl h-[280px] sm:h-[350px] md:h-[400px] w-full object-cover order-2 md:order-1"
          />

          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Winter-Ready Transportation
            </h2>

            <div className="w-12 h-[2px] bg-black mb-6" />

            <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
              All vehicles are equipped with AWD and winter tires to ensure
              safe and reliable travel in mountain conditions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhistlerTransfer;
const Boston = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[500px] md:h-[600px] bg-gray-900">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
            alt="Luxury car service in Boston"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Boston
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
                    Call Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Boston Limousine, Chauffeur & Black Car Service
        </h2>
        <p className="text-gray-600 text-lg mb-10">
          Experience the perfect blend of comfort, safety, and professionalism with LGA Car Service
          — Boston's trusted provider of luxury private transportation. Whether
          you're arriving at Boston Logan Airport, heading to nearby destinations, or
          traveling between major cities, our chauffeurs ensure every ride is seamless,
          punctual, and first-class. We specialize in Logan Airport Transfers, private shuttle service,
          and long-distance car service between Boston and major Northeast cities.
        </p>

        {/* Airport Transfer */}
        <div className="mb-12">
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Logan Airport Transfer</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Boston Airport Limo & Car Service</h3>
          <p className="text-gray-600 mb-4">
            Enjoy stress-free airport transportation with our Boston Airport Limo and Chauffeur
            Service. Your chauffeur will monitor your flight in real time, greet you inside the
            terminal with a personalized name sign, and assist with luggage. We include 1 hour of
            complimentary waiting time for all international arrivals and 15 minutes for airport
            drop-offs. All airport transfers include flight tracking, professional chauffeurs, luxury
            vehicles, and 24/7 availability.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Curbside pickup for quick departures</li>
            <li>Meet & Greet service inside the arrivals hall for VIP travelers</li>
          </ul>
        </div>

        {/* Transfer Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Boston to Providence Private Transfers</h4>
            <p className="text-gray-600">
              Discover the beauty of New England in style. Enjoy a scenic, worry-free ride
              from your hotel or Boston Airport to Providence in a luxury sedan, SUV, or Sprinter Van,
              equipped with 4×4 and snow tires for all-season safety. Available 24 hours a day.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Boston to Newport Private Transfers</h4>
            <p className="text-gray-600">
              Experience the breathtaking coastal routes on a private journey from Boston to
              Newport. Our chauffeurs are experienced in long-distance scenic routes. Choose from
              luxury sedans, SUVs, or Sprinter vans — all equipped with AWD and winter tires.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Boston to New York Car Service</h4>
            <p className="text-gray-600">
              Travel between Northeast major cities in comfort. Skip commercial flights or shared
              shuttles — enjoy a private, door-to-door transfer with your own chauffeur. Perfect for
              executives, families, and frequent travelers. One-way and round-trip options available.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">Private Shuttle Service in Boston</h4>
            <p className="text-gray-600">
              Our fleet includes Mercedes Sprinter Vans, Ford Transit Vans, SUVs, and Executive
              Sedans for groups, events, and corporate clients. Perfect for corporate meetings,
              hotel and conference shuttles, and wedding & event transportation.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">Stress-free Travel</p>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose LGA Car Service in Boston</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Corporate & VIP Specialists – Trusted by executives, hotels, and travel partners",
              "24/7 Service – Available anytime for airport, hotel, or intercity travel",
              "Flight Tracking & Meet & Greet – Always on time, every time",
              "Easy Booking & Payment – Secure online or phone reservations",
              "New, Late-Model Fleet – Luxury Sedans, SUVs, Sprinter Vans",
              "All-Wheel Drive Fleet – Fully equipped for Alberta's winter conditions",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Boston;
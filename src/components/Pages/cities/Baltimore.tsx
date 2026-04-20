const Baltimore = () => {
  return (
    <div className="min-h-screen bg-white">
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
              Baltimore
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Supreme Limo is the Best Baltimore Car Service for Luxuriousness and Ease
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Looking for a reliable limo service in Baltimore? Supreme Limo offers the most luxurious
          and convenient car service in Baltimore, including airport transfers, private city
          transportation, and cross-border travel. Whether you're headed to downtown Baltimore, BWI
          Airport, or need a chauffeur service across the region, our premium vehicles and
          professional drivers ensure a smooth, stylish journey every time.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Private Car Service – Luxury & Comfort
            </h4>
            <p className="text-gray-600">
              Our private car service in Baltimore is perfect for travelers seeking comfort, safety,
              and elegance. Enjoy a luxury ride to and from the airport with spacious interiors,
              climate control, and professional chauffeurs who know the best routes. Whether
              traveling for business or pleasure, our executive car service guarantees a first-class
              experience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Cross-City Limo Service – Stress-Free Travel
            </h4>
            <p className="text-gray-600">
              Traveling between cities has never been easier. With our cross-city limo service from
              Baltimore, you can skip the hassle of public transportation and ride in peace. We
              handle all travel details including route planning and timing so you can relax. We
              also offer round-trip options for complete convenience.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              BWI Airport Limo – Airport Transfers Made Easy
            </h4>
            <p className="text-gray-600">
              Need a ride to or from BWI Airport? Supreme Limo provides seamless airport transfers
              in Baltimore. Our chauffeurs ensure timely pickups and drop-offs, whether you're
              catching a flight or returning home. Book your limo easily through our online
              system — perfect for last-minute or pre-planned trips.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Affordable Limo Service – Transparent Pricing
            </h4>
            <p className="text-gray-600">
              Looking for a premium limo in Baltimore without sacrificing quality? We offer
              affordable private transfer services with transparent pricing and no hidden fees.
              You get a high-end ride at a competitive rate, making it the best value for anyone
              seeking luxury transportation in and around Baltimore.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg md:col-span-2">
            <h4 className="text-xl font-bold text-gray-900 mb-3">
              Easy Online Booking & Customer Support
            </h4>
            <p className="text-gray-600">
              We understand that convenience matters. That's why Supreme Limo offers easy online
              booking for your Baltimore town car service or limousine. Whether you're traveling
              solo, with a group, or for corporate needs, booking takes just a few clicks.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Supreme Limo?</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Professional chauffeurs",
              "Luxury fleet of vehicles",
              "Cross-border expertise",
              "Easy online reservations",
              "Affordable rates with top-tier service",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                <p className="text-gray-600 text-sm">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6">
            Book your limo in Baltimore today with Supreme Limo — your top choice for executive
            transportation, airport transfers, and private car service. Experience the comfort,
            convenience, and class that make us the best in the industry.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Baltimore;
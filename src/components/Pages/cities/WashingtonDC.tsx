const WashingtonDC = () => {
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
              Washington DC
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Limousine Service | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>
            <div className="flex flex-wrap gap-4">
                        <a
            href="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px] inline-block text-center"
          >
            Book Online
          </a>

          <a
            href="tel:+1877877179"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px] inline-block text-center"
          >
            Call Us
          </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Intro */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Washington DC Limousine & Chauffeur Service
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Experience the most professional limo and chauffeur service in Washington DC with Supreme
          Limousine. We specialize in black car, executive, VIP, and private car services for
          business travelers, tourists, and special occasions. From airport transfers to city tours
          and cross-border trips, our luxury fleet and trained chauffeurs guarantee comfort, safety,
          and reliability every time.
        </p>

        {/* Airport Transfer */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Airport Transfers Made Easy – Washington DC Airport Limo & Shuttle Service
          </h3>
          <p className="text-gray-600 mb-6">
            Enjoy a stress-free airport transfer with our premium Washington DC airport limo service.
            Experience a first-class experience with our professionally trained chauffeurs, luxury
            vehicles, and 24/7 airport service.
          </p>
          <ul className="space-y-3">
            {[
              "Real-time flight tracking ensures your chauffeur is on-site, even if your flight arrives early or late.",
              "1 hour of complimentary waiting time for international arrivals.",
              "Choose between curbside pickup or Meet & Greet service inside the arrivals hall.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
                <p className="text-gray-600">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Private Black Car */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Private Black Car & Executive Chauffeur Services
          </h3>
          <p className="text-gray-600 mb-8">
            LGA Car Service offers flexible point-to-point transfers, round-trip rides, and hourly
            "as-directed" chauffeur services across Washington DC. Your driver remains on standby
            for your convenience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                VIP & Executive Protection Service
              </h4>
              <p className="text-gray-600">
                Our Executive Protection Chauffeur Program ensures maximum security and discretion
                for CEOs, dignitaries, and high-profile guests. Trained chauffeurs, confidential
                handling, and luxury vehicles provide unmatched peace of mind.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                VIP Greeter with Fast-Track + Porter Service
              </h4>
              <p className="text-gray-600">
                Your personal greeter meets you right at your arrival gate, assists with priority
                fast-track through customs and immigration, and coordinates porter service to handle
                your luggage.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Event Transportation</h4>
              <p className="text-gray-600">
                Whether it's a corporate conference, concert, wedding, film production, or gala,
                our professional logistics team ensures flawless coordination from planning to
                execution.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                Washington DC Sightseeing & Private Tours
              </h4>
              <p className="text-gray-600">
                Discover Washington DC's top attractions in luxury and style with our private
                chauffeur-guided tours. Popular destinations include the Lincoln Memorial, the
                White House, Capitol Hill, the National Mall, Smithsonian Museums, and more.
                Reserve today and experience "Quality Without Compromise."
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default WashingtonDC;
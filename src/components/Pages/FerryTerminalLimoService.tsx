const FerryTerminalLimoService = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070"
          alt="Ferry terminal limo service"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Ferry Terminal Limo Service
            </h1>

            <div className="w-16 h-[2px] bg-blue-500 my-6" />

            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              LGA Car Services | Private Transfers | Chauffeur-Driven Door to
              Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto transition-all duration-300 hover:bg-blue-700">
                Book Online
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-md w-full sm:w-auto transition-all duration-300 hover:bg-gray-100">
                    Call Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Elevate Your Ferry Experience with LGA Car Service
          </h2>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
            When traveling to the stunning destinations of Victoria and
            Nanaimo via the Tsawwassen ferry terminal, the last thing you want
            to worry about is transportation. At LGA Car Service, we specialize in
            providing seamless ferry terminal limo services, ensuring that your
            journey starts and ends with comfort and style.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Why Choose Our Ferry Terminal Limo Service?
          </h3>

          <ol className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg list-decimal pl-6">
            <li>
              <span className="font-semibold">Convenience:</span> Our limo
              service allows you to avoid the hassle of parking or navigating
              public transport. We pick you up directly from your location and
              drop you off at the terminal, making your travel experience
              effortless.
            </li>

            <li>
              <span className="font-semibold">Comfort and Luxury:</span> Our
              fleet of luxurious limousines and sedans is designed for your
              comfort. With plush seating, ample legroom, and modern amenities,
              you can relax before or after your ferry ride.
            </li>

            <li>
              <span className="font-semibold">Professional Drivers:</span> Our
              experienced drivers are committed to providing exceptional
              service. Punctual, courteous, and knowledgeable about the local
              area, they ensure a smooth journey to and from the ferry
              terminals.
            </li>

            <li>
              <span className="font-semibold">Flexible Scheduling:</span>
              {" "}Whether you’re catching an early morning ferry or returning
              late in the evening, we accommodate your schedule. Our reliable
              service is available around the clock, allowing you to travel at
              your convenience.
            </li>
          </ol>

          <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-6">
            Service to Tsawwassen, Victoria, and Nanaimo Ferries
          </h3>

          <ul className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg list-disc pl-6">
            <li>
              <span className="font-semibold">
                Tsawwassen Ferry Terminal:
              </span>{" "}
              Conveniently located just 30 minutes south of New York, the
              Tsawwassen terminal offers frequent sailings to both Victoria and
              Nanaimo. With our limo service, you’ll arrive relaxed and on
              time, ready to board your ferry.
            </li>

            <li>
              <span className="font-semibold">Victoria Ferry Terminal:</span>{" "}
              Once you’ve crossed the beautiful waters of the Strait of
              Georgia, let us take you from the Victoria terminal to your
              destination in style. Explore the city’s charm and beauty without
              worrying about transportation logistics.
            </li>

            <li>
              <span className="font-semibold">Nanaimo Ferry Terminal:</span>{" "}
              Known for its stunning waterfront, Nanaimo is a must-visit
              destination. Our ferry terminal limo service will ensure you’re
              picked up promptly upon arrival, allowing you to dive straight
              into your Nanaimo adventure.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
            Book Your Ferry Terminal Limo Today!
          </h3>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            Make your travel to the ferry terminals a luxurious and stress-free
            experience. Our commitment to quality service and customer
            satisfaction ensures that you’ll always have a pleasant journey.
            Contact us now to book your ferry terminal limo service and enjoy
            the journey ahead!
          </p>
        </div>
      </section>

    </div>
  );
};

export default FerryTerminalLimoService;
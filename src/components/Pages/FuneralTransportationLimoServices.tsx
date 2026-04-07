
const FuneralTransportationLimoServices = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070"
          alt="Funeral transportation limo service"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Funeral Transportation Limo Services
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
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
            Compassionate and Elegant Transportation for Memorial Services
          </h2>

          <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              Our Funeral Transportation Limo services offer a respectful and
              comfortable way for families and loved ones to travel together on
              the day of a funeral. With a focus on compassionate service, we
              provide luxury limousines and chauffeurs who understand the
              importance of this day, ensuring that everyone arrives together,
              with dignity and ease.
            </p>

            <p>
              At such a sensitive time, our goal is to make transportation
              arrangements as smooth and worry-free as possible. Our Funeral
              Transportation Limo service is designed to give you and your
              family peace of mind, allowing you to focus on remembrance and
              being with loved ones. Our experienced chauffeurs are trained to
              offer respectful, professional service, ensuring the entire
              journey is comfortable and considerate.
            </p>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
            Why Choose Our Funeral Limo Service?
          </h3>

          <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
            Our funeral transportation service offers more than just
            transportation. We understand the significance of this day and work
            to make sure every detail is taken care of with the utmost
            sensitivity. With spacious, well-maintained limousines, we provide a
            serene environment for family members and guests to travel together.
          </p>

          <h3 className="text-2xl sm:text-3xl font-bold mb-6">
            Features of Our Funeral Transportation Limo Service:
          </h3>

          <ul className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg list-disc pl-6">
            <li>
              <span className="font-semibold">Experienced Chauffeurs:</span> Our
              chauffeurs are trained to provide courteous, empathetic service,
              giving you the space and privacy you need.
            </li>

            <li>
              <span className="font-semibold">Luxury Vehicles:</span> Our fleet
              includes luxury limousines that offer ample space, comfortable
              seating, and a quiet, dignified atmosphere.
            </li>

            <li>
              <span className="font-semibold">Coordinated Travel:</span> We
              ensure that family members and guests can travel together,
              simplifying logistics during a difficult time.
            </li>

            <li>
              <span className="font-semibold">Customized Routes:</span> We’ll
              coordinate with you to plan a route that accommodates your
              schedule, including multiple stops if needed.
            </li>

            <li>
              <span className="font-semibold">Timely and Reliable:</span>
              {" "}Punctuality is our priority, as we understand the importance
              of maintaining schedules on such a significant day.
            </li>
          </ul>

          <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
            Booking and Inquiries
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
            <p>
              Our team is here to assist with all arrangements, from booking to
              final confirmations. We encourage you to contact us directly for a
              personalized consultation. You can also submit an inquiry form on
              our website, and our compassionate team will respond promptly to
              guide you through the process.
            </p>

            <p>
              With our Funeral Transportation Limo Service, we aim to help ease
              the burden during difficult times, allowing you and your family to
              focus on honoring and remembering your loved one.
            </p>
          </div>
        </div>
      </section>

      {/* CTA CARD */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=2070"
              alt="Premium transfer services"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/75" />

            <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-2xl text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                  Premium Transfer Services Available
                </h3>

                <p className="text-white/80 text-base sm:text-lg leading-relaxed">
                  Experience seamless and luxurious transportation with our
                  range of services tailored for your comfort and convenience.
                </p>
              </div>

              <button className="bg-white text-black px-6 py-3 rounded-md font-medium whitespace-nowrap transition-all duration-300 hover:bg-gray-100">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuneralTransportationLimoServices;
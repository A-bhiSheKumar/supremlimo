

const WineTour = () => {
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
              Wine Tour Limo Services
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
    {/* MAIN CONTENT */}
<section className="py-14 md:py-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
      Experience the Best of Local Wineries in Luxury and Style
    </h2>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
      Discover the finest wineries with our Wine Tour Limo services. Perfect for wine enthusiasts and groups looking to explore vineyards with sophistication, our chauffeured limousines ensure a relaxing, enjoyable, and memorable day. Indulge in tasting sessions, beautiful scenery, and top-notch service with our custom wine tour packages.
    </p>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
      Our Wine Tour Limo service offers a luxurious, convenient, and safe way to explore the region’s best wineries. Whether you’re celebrating a special occasion or simply enjoying a day out, our wine tours are curated to provide a truly memorable experience. Relax and enjoy the beautiful countryside and vineyard vistas as you travel in one of our elegant limousines.
    </p>

    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
      Why Choose Our Wine Tour Limo Service?
    </h3>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
      Our wine tour packages are designed to give you an unparalleled wine-tasting experience with comfort and elegance. We take care of all transportation details, allowing you to focus on the flavors and ambiance. Our knowledgeable chauffeurs are familiar with local vineyards and can suggest popular destinations or hidden gems based on your preferences.
    </p>

    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
      Highlights of Our Wine Tour Limo Service:
    </h3>

    <ul className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg list-disc pl-6">
      <li>
        <span className="font-semibold">Customized Tour Packages:</span> Tailored routes to your favorite wineries or a selection of our recommended stops.
      </li>
      <li>
        <span className="font-semibold">Luxurious Vehicles:</span> Travel in style with spacious, fully-equipped limousines that offer plush seating, climate control, and a private, comfortable atmosphere.
      </li>
      <li>
        <span className="font-semibold">Professional Chauffeurs:</span> Our drivers are experienced and knowledgeable about local wineries, providing you with a safe, enjoyable journey.
      </li>
      <li>
        <span className="font-semibold">Group-Friendly:</span> We cater to groups of all sizes, making it perfect for friends, couples, or corporate events.
      </li>
      <li>
        <span className="font-semibold">All-Day Service:</span> From pick-up to drop-off, we ensure a seamless and stress-free experience, allowing you to savor each stop without any rush.
      </li>
    </ul>

    <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-6">
      Suggested Wine Tour Options:
    </h3>

    <ul className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg list-disc pl-6">
      <li>
        <span className="font-semibold">Half-Day Wine Tour:</span> Enjoy three to four select wineries with ample time for tasting sessions and vineyard exploration.
      </li>
      <li>
        <span className="font-semibold">Full-Day Wine Tour:</span> A full-day adventure exploring five to six vineyards with additional time for lunch or a picnic amid the scenic views.
      </li>
      <li>
        <span className="font-semibold">Custom Wine Tour:</span> Create your own route, with as many stops as you like, tailored entirely to your preferences.
      </li>
    </ul>

    <h3 className="text-2xl sm:text-3xl font-bold mt-10 mb-4">
      Booking and Inquiries
    </h3>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
      Our Wine Tour Limo services can be customized for birthdays, anniversaries, bachelor or bachelorette parties, corporate outings, or simply a delightful day out. Contact us to discuss your plans, and we’ll handle the rest! You can also fill out our online inquiry form for further details and pricing information.
    </p>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
      Let us help you create an unforgettable wine-tasting experience, blending luxury, taste, and scenic beauty. Your wine tour awaits—sit back, relax, and raise a glass with us!
    </p>
  </div>
</section>

    </div>
  )
}

export default WineTour


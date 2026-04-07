import React from 'react'

const HourlyService = () => {
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
              Hourly Services
            </h1>

            <div className="w-16 h-[2px] bg-blue-500 my-6" />

            <p className="text-white/80 text-base sm:text-lg mb-8 leading-relaxed">
              Limousine Service | Private Transfers | Chauffeur-Driven Door to
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

xx{/* MAIN CONTENT */}
<section className="py-14 md:py-20">
  <div className="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
      Hourly Chauffeur Service — Chauffeur by the Hour
    </h2>

    <h3 className="text-2xl sm:text-3xl font-bold mb-4">
      Your Private Chauffeur, Always at Your Disposal
    </h3>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
      Enjoy complete flexibility and comfort with Supreme Limousine’s Chauffeur by the Hour Service. Whether you’re attending business meetings, exploring the city, or managing a full-day itinerary with multiple stops, say goodbye to switching between taxis, rideshares, or crowded public transport.
    </p>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
      With Supreme Limousine’s Hourly Chauffeur Service, your professional driver remains on standby throughout your journey — ready to take you wherever you need to go, whenever you’re ready.
    </p>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
      This as-directed service gives you full control of your schedule — no waiting for rides, no parking hassles, and no need to switch between transportation modes. Travel in a new, late-model luxury Sedan, SUV, or Mercedes Sprinter Van, knowing your chauffeur is dedicated exclusively to your comfort, privacy, and convenience.
    </p>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-8">
      Whether you’re in Vancouver, Calgary, Toronto, or Montreal, enjoy the freedom of traveling on your own schedule with a private, luxury vehicle and a dedicated chauffeur by your side.
    </p>

    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
      For All Your Multi-Stop Journeys
    </h3>

    <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
      Our As-Directed Chauffeur Service is ideal for those moments when you need a chauffeur on standby for multiple appointments or events throughout the day.
    </p>

    <ul className="space-y-5 text-gray-700 leading-relaxed text-base sm:text-lg list-disc pl-6 mb-10">
      <li>
        <span className="font-semibold">Business Trips:</span> Move efficiently between meetings and events while focusing on what matters. Your chauffeur ensures seamless transfers, handles all navigation, and provides a calm, private environment to work or relax.
      </li>

      <li>
        <span className="font-semibold">Concerts & Sporting Events:</span> Arrive in style and skip post-event traffic. Your chauffeur will be waiting close by, ready to pick you up as soon as you’re ready to depart.
      </li>

      <li>
        <span className="font-semibold">Sightseeing & Leisure:</span> Discover Calgary, Montreal, or Toronto your way. Explore landmarks, restaurants, and shopping districts at your own pace — your chauffeur is always nearby when it’s time to move on.
      </li>
    </ul>

    <h3 className="text-2xl sm:text-3xl font-bold mb-6">
      Why Choose Our Hourly Chauffeur Service?
    </h3>

    <div className="space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
      <div>
        <h4 className="font-semibold text-lg mb-2">
          Set Your Own Itinerary
        </h4>
        <p>
          You decide where and when to go. Your chauffeur stays with you for the duration of your booking — waiting nearby at every stop and ready to continue your journey the moment you are.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">Perfect For:</h4>
        <ul className="list-disc pl-6 space-y-2">
          <li>Business meetings and corporate roadshows</li>
          <li>Sightseeing or city tours</li>
          <li>Shopping trips and fine dining</li>
          <li>Concerts, galas, and sporting events</li>
        </ul>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">
          Save Time & Travel Seamlessly
        </h4>
        <p>
          Get dropped off and picked up right at the doorstep of each destination — no parking hassles, no delays, and no waiting for multiple rides.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">
          Comfort & Peace of Mind
        </h4>
        <p>
          Travel in style in a new, late-model Sedan, SUV, or Mercedes-Benz Sprinter Van. Keep your belongings safely inside the vehicle between stops and enjoy onboard amenities such as Fiji water, chargers, and Wi-Fi (available in most vehicles).
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">
          Professionalism You Can Trust
        </h4>
        <p>
          Our chauffeurs are trained to the highest standards of safety, confidentiality, and service. Whether for a CEO, VIP guest, or leisure traveler, we guarantee reliability, discretion, and comfort.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">
          Sustainable Luxury
        </h4>
        <p>
          Every ride is carbon-offset automatically — at no extra cost. You travel responsibly while enjoying the best in premium transportation.
        </p>
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">
          City-to-City Flexibility
        </h4>
        <p>
          Hourly services are designed for use within the same city. If your journey ends outside the city of origin, we’ll gladly accommodate it — additional distance and return time charges will apply.
        </p>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default HourlyService
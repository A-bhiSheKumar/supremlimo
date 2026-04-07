
import {  ChevronLeft, ChevronRight } from 'lucide-react';

const SightseeingTours = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
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
              Sightseeing Tours
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

      {/* Ultimate Sightseeing Services */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-4xl font-bold mb-2 text-gray-900">
              The Ultimate Sightseeing Services in Vancouver
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Experience the thrill of adventure like never before with Supreme Limo's Vancouver city sightseeing services. Customize your tour to suit your preferences and take control of your journey. Say farewell to dull tours and embrace private city sightseeing with your personal chauffeur guide. We don't cut corners when it comes to luxury, so you can rely on us for a first-class experience.
              </p>
              <p>
                Your sightseeing should be more than just average—we aim to make it exceptional!
              </p>
              <p className="font-medium text-gray-900">
                Book your Supreme Limo today, and we'll create a world that's uniquely yours!
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform rotate-3 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1609825488888-3a766db05f8b?auto=format&fit=crop&q=80" 
                alt="Vancouver Skyline" 
                className="relative w-full h-[500px] object-cover rounded-[3rem] shadow-2xl"
                style={{
                  borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Explore Vancouver City with Ease */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Sightseeing Tours: Explore Vancouver City with Ease
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Imagine a day of sightseeing in Vancouver where you don't have to worry about traffic, parking, or the nitty-gritty details. Sounds pretty sweet, and like a dream right? That's where we come in. We've got your back, always! So now, just kick back, relax, and enjoy the best that the city has to offer.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our local experts know Vancouver inside and out, and they're eager to make sure you get the most out of your visit. Whether you're a first-time visitor or a local looking for a fresh perspective, our tours are tailored for you. Allow us to be your partner and you'll have the freedom to explore, take stunning photos, and immerse yourself in the city's incredible sights.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-6 font-medium">
            So, why not join us on an adventure that combines beauty, comfort, and the simple joy of experiencing Vancouver's beauty?
          </p>
        </div>
      </section>

      {/* Whistler & Shannon Falls Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-blue-600 rounded-[3rem] transform -rotate-2 opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&q=80" 
                alt="Sea to Sky Highway" 
                className="relative w-full h-[500px] object-cover shadow-2xl"
                style={{
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Vancouver Tours including Whistler & Shannon Falls
            </h2>
            <div className="w-20 h-1 bg-blue-600 mb-8"></div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Enjoy the rush of adventure like never before with Supreme Limo's world-class sightseeing services. Wave goodbye to the boring tours and welcome an adventure brimming with legendary elegance and of course, luxury. We never compromise on luxury, and that's where you can count on us.
              </p>
              <p>
                Your sightseeing experience deserves more than the ordinary and we are here to give you the extraordinary!
              </p>
              <p className="font-medium text-gray-900">
                Order your Supreme Limo now, and we'll make the world a better place just for you!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Book With Us
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              At Supreme Limousine & Chauffeur Service, we believe that every journey should be a unique and memorable experience. Here's why you should book your private guided chauffeur tour with us:
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Navigation Arrows (decorative) */}
            <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full items-center justify-center text-white transition-colors">
              <ChevronRight size={24} />
            </button>

            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Personalized Tours</h3>
              <p className="text-gray-300 leading-relaxed">
                Our tours are designed with your interests and preferences in mind. Whether you're exploring Vancouver for the first time or you're a local looking for a new perspective, we customize each tour to ensure you get the most out of your experience.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Flexibility and Convenience</h3>
              <p className="text-gray-300 leading-relaxed">
                We understand that plans can change, so our tours offer flexibility. You can choose the duration, start time, and destinations, and make adjustments as needed. We also offer convenient pick-up and drop-off at locations of your choice.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Luxury and Comfort</h3>
              <p className="text-gray-300 leading-relaxed">
                Travel in style with our fleet of luxurious vehicles, including executive sedans, SUVs, and Sprinter Vans. We prioritize your comfort, offering amenities such as climate control, leather seating, and refreshments. Enjoy a smooth ride as you take in the sights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vancouver City Highlights Tour */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1580737570528-58c3bdee-9a5e-4b69-85f6-45f0c50d578b?auto=format&fit=crop&q=80" 
              alt="Gastown Steam Clock" 
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Vancouver City Highlights Tour
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Experience the best of Vancouver with our exclusive chauffeur-guided tour, taking you through some of the city's most iconic landmarks. Begin your journey in the lush surroundings of <strong className="text-gray-900">Stanley Park</strong>, where nature and city life intertwine, offering stunning views and rich history. Next, we head to <strong className="text-gray-900">English Bay Beach</strong>, a vibrant spot where the city meets the ocean, perfect for a leisurely stroll. Continue to <strong className="text-gray-900">Granville Island</strong>, a bustling hub of artisanal markets and unique shops.
              </p>
              <p className="mb-4">
                Then, explore the innovative exhibits at <strong className="text-gray-900">False Creek's Science World</strong>, where science comes to life. We'll also visit the bustling streets of <strong className="text-gray-900">Chinatown</strong>, rich in culture and tradition, before wrapping up in <strong className="text-gray-900">Gastown</strong>, the historic heart of Vancouver known for its cobblestone streets and the famous Steam Clock.
              </p>
              <p>
                This tour offers a comprehensive view of Vancouver's charm and diversity, all from the comfort of a luxury vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vancouver City Tour + North Shore Tour */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-gray-50">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Vancouver City Tour + North Shore Tour
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Begin your tour with a scenic drive through downtown, exploring iconic sites like <strong className="text-gray-900">Gastown</strong> and <strong className="text-gray-900">Chinatown</strong>, where history and culture merge. Stroll through the urban oasis of <strong className="text-gray-900">Stanley Park</strong>, with its ancient trees and breathtaking views of the city skyline and <strong className="text-gray-900">English Bay Beach</strong>. Then, take in the energy of <strong className="text-gray-900">Granville Island</strong>, famous for its vibrant market and local artisans.
              </p>
              <p className="mb-4">
                Visit the <strong className="text-gray-900">Capilano Suspension Bridge</strong>, a thrilling walkway that spans a lush rainforest, offering panoramic views and a touch of adventure. Continue to <strong className="text-gray-900">Grouse Mountain</strong>, where you can ride the Skyride to the summit for incredible vistas of the city, mountains, and ocean.
              </p>
              <p className="font-medium text-gray-900">
                All of this is enjoyed from the comfort of a luxury chauffeured vehicle, ensuring a seamless and relaxing experience.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80" 
              alt="Grouse Mountain Skyride" 
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Whistler & Victoria Day Tours */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560275619-4662e36fa65c?auto=format&fit=crop&q=80" 
              alt="British Columbia Parliament Buildings" 
              className="w-full h-[600px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Whistler & Victoria Day Tours
            </h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              <p className="mb-4">
                Experience British Columbia's beauty with our exclusive Victoria and Whistler tours.
              </p>
              <p className="mb-4">
                Starting in Vancouver, heading to <strong className="text-gray-900">Victoria</strong> with a scenic ferry ride, then explore the stunning <strong className="text-gray-900">Butchart Gardens</strong>, renowned for its colorful displays and themed areas like the Sunken and Rose Gardens. Afterward, discover downtown Victoria, including the iconic <strong className="text-gray-900">British Columbia Parliament Buildings</strong> and the historic Empress Hotel.
              </p>
              <p className="mb-4">
                Another tour is Whistler day tour. Enjoy Sea to Sky highway views while on the way to <strong className="text-gray-900">Whistler</strong>, with a stop at <strong className="text-gray-900">Shannon Falls</strong>, the third-highest waterfall in BC. Continue the adventure with a ride on the <strong className="text-gray-900">Sea to Sky Gondola</strong>, offering panoramic views of Howe Sound. In Whistler, explore the vibrant village filled with shops, restaurants, and year-round activities.
              </p>
              <p>
                These tours combine natural beauty with city charm, all from the comfort of a luxury chauffeured vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button>
    </div>
  );
};

export default SightseeingTours;
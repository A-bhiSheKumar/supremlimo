import  { useState, useEffect } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';


const CruiseShipTransfer = () => {
  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slider images data
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2072&auto=format&fit=crop",
      title: "Authorized Terminal Access",
      description: "Fully licensed and approved to enter Canada Place Cruise Ship Terminal for both pick-ups and drop-offs. Our chauffeurs hold valid Port Passes, which allow smooth and expedited access to the terminal area, eliminating the hassle of off-site pickup points."
    },
    {
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop",
      title: "Direct Terminal Pickup",
      description: "Our vehicles have exclusive access to the cruise terminal drop-off zone. Skip the shuttle buses and taxi lines—your chauffeur meets you right at the terminal entrance with a personalized greeting."
    },
    {
      image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop",
      title: "Professional Port Passes",
      description: "All our chauffeurs carry valid Port of Vancouver passes, ensuring seamless entry and exit from the Canada Place terminal. Your safety and convenience are our top priorities."
    }
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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
              Cruise Ship Transfer
            </h1>
            <div className="w-20 h-1 bg-blue-600 mb-6"></div>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              LGA Car Services | Private Transfers | Chauffeur-Driven Door to Door Comfort
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

      {/* Cruise Ship Limo Service Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cruise Ship Limo Service in Vancouver
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Whether you're embarking on a cruise or wrapping up your journey, <strong>LGA Car Service</strong> is ready to welcome you with a spotless fleet of luxury vehicles. LGA Car Service ensures your transition is smooth, luxurious, and stress-free with our <strong>Cruise Ship Limo Service in Vancouver</strong>. We specialize in private cruise ship transfers between <a href="#" className="text-blue-600 hover:underline">Vancouver International Airport (YVR)</a> and the <a href="#" className="text-blue-600 hover:underline">Canada Place Cruise Ship Terminal at the Port of Vancouver</a> — and we are fully authorized and approved for direct pick-up and drop-off at the terminal.
          </p>
        </div>
      </section>

      {/* Effortless Transfers Section */}
      <section className="py-16 md:py-24 bg-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Effortless Cruise Ship Transfers — Arrival & Departure
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed text-center mb-8 text-lg">
            Whether you're just arriving in Vancouver or preparing to set sail, <a href="#" className="text-blue-600 hover:underline">LGA Car Service</a> ensures your cruise ship private transfer experience is smooth, stylish, and stress-free. Our professionally maintained vehicles and experienced chauffeurs provide a relaxed, efficient ride to your next destination. Whether you're heading to the airport, hotel, or a <a href="#" className="text-blue-600 hover:underline">sightseeing tour</a>, we make your transition from sea to land effortless and elegant.
          </p>

          <ul className="space-y-4 max-w-4xl mx-auto">
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                For <strong>departures</strong>, enjoy seamless transfers from your hotel or the <a href="#" className="text-blue-600 hover:underline">YVR airport transfer</a> straight to the <strong>Canada Place Cruise Ship Terminal</strong>. As an authorized transportation provider, all our chauffeurs hold valid port passes for smooth access and drop-off directly at the terminal entrance.
              </span>
            </li>
            <li className="flex items-start gap-3 text-gray-700">
              <span className="text-blue-600 mt-1">•</span>
              <span>
                For <strong>arrivals</strong>, our chauffeurs coordinate with cruise ship schedules and provide 30 minutes of complimentary waiting time. As you disembark, head to <strong>Door D</strong> and look for the green "<strong>Private Shuttle & Limousines</strong>" sign near the wooden benches. Check in with the <strong>Vehicle Dispatch Attendant</strong>, and your chauffeur will be dispatched from the holding lot directly to the terminal—no waiting, no confusion.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* WORKING SLIDER SECTION - Authorized Terminal Access */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-lg overflow-hidden shadow-2xl group">
            {/* Slides Container */}
            <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                    index === currentSlide ? 'translate-x-0' : 
                    index < currentSlide ? '-translate-x-full' : 'translate-x-full'
                  }`}
                >
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="text-center text-white px-4 max-w-3xl">
                      <h3 className="text-3xl md:text-4xl font-bold mb-4 transform transition-all duration-500 translate-y-0 opacity-100">
                        {slide.title}
                      </h3>
                      <p className="text-white/90 mb-6 text-sm md:text-base leading-relaxed transform transition-all duration-500 delay-100">
                        {slide.description}
                      </p>
                      <button className="border-2 border-white text-white px-8 py-3 rounded hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Previous slide"
            >
              <ChevronLeft size={28} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Next slide"
            >
              <ChevronRight size={28} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sightseeing Tours Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Enhance Your Trip: Sightseeing Tours Available
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
            Experience personalized sightseeing tours crafted around your interests and schedule. From lively markets to peaceful parks, we'll guide you through Vancouver's top attractions. Enjoy local city highlights, explore the North Shore with stops like Capilano Suspension Bridge and Grouse Mountain, or take a scenic drive to Whistler or a full-day adventure to Victoria.
          </p>

          {/* Pre/Post Cruise Adventure */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">
              Pre or Post-Cruise Adventure : A Smooth Transition
            </h3>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto">
              Make the most of your time in Vancouver with <strong>LGA Car Service's professional chauffeurs</strong>, who specialize in pre- and post-cruise sightseeing tours. Whether you have a few hours before embarkation or a couple of days after your cruise, our knowledgeable chauffeurs transform every moment into a memorable experience. Make the most of your time in Vancouver without the hassle of finding multiple transportation options. Enjoy door-to-door service that ensures a comfortable and stress-free journey, so you can focus on making memories.
            </p>
          </div>

          {/* Attractions Grid */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Granville Island</h4>
              <p className="text-gray-600 leading-relaxed">
                Just 15 minutes from the cruise terminal, Granville Island is a vibrant hub for local artists, unique shops, and gourmet food. Wander through the Public Market or take in a live show, and let your chauffeur handle the rest.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Stanley Park</h4>
              <p className="text-gray-600 leading-relaxed">
                This 1,000-acre natural oasis is a must-see in Vancouver. Enjoy views of the waterfront, take a stroll along the seawall, or stop by the famous Totem Poles and Prospect Point for stunning photos.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Gastown</h4>
              <p className="text-gray-600 leading-relaxed">
                Dive into Vancouver's history in Gastown, home to cobblestone streets, Victorian architecture, and the famous steam-powered clock. It's the perfect blend of history and charm.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Robson Street</h4>
              <p className="text-gray-600 leading-relaxed">
                Known for upscale shopping and trendy eateries, Robson Street is Vancouver's premier shopping destination. With a private limo, shop to your heart's content without worrying about carrying your bags around town.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seattle Transfers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cruise Ship Terminal to Seattle Transfers: Cross-Border Convenience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            For those continuing their journey to Seattle, <strong>LGA Car Service</strong> offers cross-border transfers directly from the <strong>Vancouver cruise terminal</strong>. Travel in style and comfort as our experienced chauffeurs handle the drive, navigating border crossings with ease. Enjoy a smooth, direct route to <a href="#" className="text-blue-600 hover:underline">Seattle-Tacoma International Airport (SEA)</a> or your next destination in Seattle, giving you more time to relax and less time worrying about logistics. We have drivers with Nexus for <a href="#" className="text-blue-600 hover:underline">Vancouver to Seattle Private Transfer</a> available as well.
          </p>

          <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
            <li className="flex items-center gap-2 text-blue-600">
              <span className="text-lg">⇄</span>
              <a href="#" className="hover:underline font-medium">Vancouver ⇄ Seattle Private Transfer <span className="text-gray-600 italic">(Direct to SEA Airport, Seattle hotels, or homes)</span></a>
            </li>
            <li className="flex items-center gap-2 text-blue-600">
              <span className="text-lg">⇄</span>
              <a href="#" className="hover:underline font-medium">Vancouver ⇄ Bellingham Private Transfer</a>
            </li>
            <li className="flex items-center gap-2 text-blue-600">
              <span className="text-lg">•</span>
              <a href="#" className="hover:underline font-medium">Cross-border travel with valid USDOT for 9+ passengers</a>
            </li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LGA Car Service for Your Cruise Ship Transportation?
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            LGA Car Service is dedicated to providing exceptional service for cruise passengers visiting Vancouver. From luxury vehicles to professional drivers, we prioritize safety, comfort, and efficiency. Choose LGA Car Service for a memorable experience that complements the luxury of your cruise. Whether you're sightseeing, transferring to Seattle, or extending your stay, we're here to make your time in Vancouver as enjoyable as possible.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            We are <strong>USDOT registered</strong>, fully authorized to provide <strong>cross-border transportation into the USA</strong> for groups of <strong>9 passengers or more</strong> — perfect for large parties heading to Seattle or Bellingham post-cruise.
          </p>
        </div>
      </section>

      {/* Eco-Friendly Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nurturing the Planet as We Nurture Your Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          
          <p className="text-gray-600 leading-relaxed mb-6">
            LGA Car Service's dedication to excellence extends beyond luxury to include environmental concerns. Our Eco-Friendly services allow you to contribute to a greener future without sacrificing the enjoyment of your journey.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            Finally, LGA Car Service's Cruise Ship Transfer service embodies elegance, convenience, and great attention to detail. We don't just take you somewhere; we immerse you in an experience that mirrors the grandeur of your cruise vacation. Choose LGA Car Service for a cruise ship transportation that will be as memorable as the trip itself.
          </p>
        </div>
      </section>

      {/* Global Excellence Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury cars at cruise terminal" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Global Excellence, Local Presence
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed">
                <strong>Five-Star Reputation:</strong> Trusted by international travelers, luxury concierges, and travel professionals, <strong>LGA Car Service</strong> consistently delivers a <strong>first-class experience</strong> backed by glowing reviews. Wherever your voyage takes you, our voyage Ship Transfer service will be there to greet you when you return to land. We operate in significant cruise ship ports, guaranteeing that our service reaches you no matter where your vacation finishes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <img 
              src="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2072&auto=format&fit=crop" 
              alt="Chauffeur opening door" 
              className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-xl mb-8"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Book Your Cruise Transfer Today
          </h2>
          
          <p className="text-gray-600 leading-relaxed mb-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <span className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              Authorized Port Access
            </span>
            <span className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              Cross-Border Transfers
            </span>
            <span className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              Luxury Vehicles
            </span>
            <span className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              Professional Drivers
            </span>
            <span className="flex items-center gap-2">
              <Check size={20} className="text-green-600" />
              24/7 Customer Support
            </span>
          </p>
          
          <button className="border-2 border-gray-900 text-gray-900 px-10 py-4 rounded hover:bg-gray-900 hover:text-white transition-all duration-300 text-lg font-medium">
            Book Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default CruiseShipTransfer;
import  { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CorporateVipTravel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const vehicleSlides = [
    {
      title: "Mercedes Sprinter Van",
      description: "Ideal for group transportation for upto 14 passengers or corporate shuttling for your next event.",
      image: "https://images.unsplash.com/photo-1616440347437-b1c73416ef12?q=80&w=1000"
    },
    {
      title: "Executive Sedan",
      description: "Perfect for individual executives or small groups seeking comfort and sophistication.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000"
    },
    {
      title: "Luxury SUV",
      description: "Spacious interior with premium amenities for up to 6 passengers.",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % vehicleSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + vehicleSlides.length) % vehicleSlides.length);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Corporate VIP travel"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
              Corporate VIP travel
            </h1>

            <div className="w-16 h-[2px] bg-white my-6" />

            <p className="text-white/80 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
              LGA Car Services | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
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
      </section>

      {/* Trusted Corporate Partner Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1000" 
              alt="Corporate Transportation" 
              className="w-full h-[500px] object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Your Trusted Corporate Transportation Partner
            </h2>
            <div className="w-16 h-[2px] bg-blue-600 mb-6"></div>
            <p className="text-gray-600 leading-relaxed text-lg">
              In today's fast-paced corporate environment, time is of the importance, and first impressions are more important than ever. LGA Car Service understands the value of stress-free and prestigious corporate travel. Introducing 'Corporate VIP Travel,' a signature service developed to meet the specific needs of executives, entrepreneurs, and professionals. We provide a tailored experience that precisely matches with your business goals thanks to our unwavering commitment to elegance, punctuality, and dependability. Let us reinvent the way you travel for business so that every trip is more than just a commute.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Travel Care Section */}
      <section className="py-20 px-4 md:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Let us take Care of your Executive Travel
          </h2>
          <div className="w-16 h-[2px] bg-blue-600 mx-auto mb-8"></div>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our premium vehicle fleet has been carefully selected to provide maximum comfort and elegance. Whether you're traveling alone or with coworkers, our large interiors let you to work or relax without sacrificing comfort. Sit in the luxurious leather seats and relax in a quiet, distraction-free environment while you prepare for an important meeting or unwind after a long day. In the business world, time is an important asset. You'll never have to worry about delays or missed appointments again with Corporate VIP Travel. Our skilled drivers are trained to be timely to the minute, ensuring you arrive on time every time. We realize how hectic your schedule is, and we're here to help you keep it running smoothly.
          </p>
        </div>
      </section>

      {/* Airport Car Service Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Slider */}
          <div className="relative h-[600px] bg-black rounded-lg overflow-hidden group">
            <img 
              src={vehicleSlides[currentSlide].image} 
              alt={vehicleSlides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all backdrop-blur-sm"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-3">{vehicleSlides[currentSlide].title}</h3>
              <p className="text-white/80 mb-6 max-w-md mx-auto">{vehicleSlides[currentSlide].description}</p>
                       <a
            href="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px] inline-block text-center"
          >
            Book Online
          </a>

        
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {vehicleSlides.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white w-6' : 'bg-white/50'}`}
                />
              ))}
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">
              Book your Airport Car Service with us
            </h2>
            <div className="w-16 h-[2px] bg-blue-600 mb-6"></div>
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Our vehicles are outfitted with facilities to fulfill your every need, from complimentary bottled water and snacks to superior climate control. Stay connected with on-board Wi-Fi, easily charge your devices, and experience the luxury that comes standard in all of our vehicles. We appreciate your desire for privacy and confidentiality. Our tinted windows and screens create a private environment in which you can discuss sensitive topics or simply enjoy moments of isolation while on the run.
              </p>
              <p>
                Corporate VIP travel is about more than simply luxury; it's also about efficiency. We maximize your journey time and arrive at your location utilizing the most efficient routes thanks to dedicated routes, skilled drivers, and cutting-edge GPS technology. There will be no more traffic-related stress or unexpected detours.
              </p>
                       <a
            href="/contact-us"
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px] inline-block text-center"
          >
            Book Online
          </a>

        
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Choose Us Section */}
      <section className="relative py-24 px-4 md:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1000')`
          }}
        >
          <div className="absolute inset-0 bg-black/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Reasons to choose us
            </h2>
            <div className="w-24 h-[2px] bg-white mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Reliability As A Cornerstone</h3>
              <p className="text-gray-600 leading-relaxed">
                At LGA Car Service, reliability is the foundation of our services. We pride ourselves on being a partner you can trust to ensure your shipping needs are met flawlessly, allowing you to focus on what really matters – your business goals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Precise Logistics</h3>
              <p className="text-gray-600 leading-relaxed">
                We understand that every business traveler is unique. That's why our Corporate VIP Travel service is fully customizable. Whether you require multiple stops, specific vehicle preferences, or unique scheduling, we are here to accommodate your requirements and provide a seamless experience that suits your professional personality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Dedicated Professional Drivers</h3>
              <p className="text-gray-600 leading-relaxed">
                Our drivers are not just drivers – they are your mobility partners. Highly trained, impeccably dressed and well-versed in etiquette, they understand the nuances of corporate travel. Expect courteous and discreet service to enhance your trip.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">24/7 Availability</h3>
              <p className="text-gray-600 leading-relaxed">
                The corporate world doesn't sleep and neither do we. No matter the time of day or night, you can count on LGA Car Service to provide 24/7 service, so you'll never be stranded or waiting for a ride.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg text-center hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-900">Meticulous Attention To Detail</h3>
              <p className="text-gray-600 leading-relaxed">
                From the moment you book our service to the moment you arrive at your destination, every detail is taken care of. Our customer support team ensures that your preferences are recorded, your itinerary is organized and any special requests are met precisely.
              </p>
            </div>

            {/* Card 6 - CTA Card */}
            <div className="bg-blue-50 p-8 rounded-lg shadow-lg text-center flex flex-col justify-center items-center border-2 border-blue-100 hover:transform hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Open an Account with us</h3>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
                Get in Touch with us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Chat Button */}
      {/* <button className="fixed bottom-8 right-8 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </button> */}
    </div>
  );
};

export default CorporateVipTravel;
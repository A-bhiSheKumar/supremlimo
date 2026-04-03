import { Star } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 leading-tight mb-6">
              Experience<br />
              Vancouver's<br />
              Finest<br />
              Chauffeur<br />
              Service
            </h2>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Supreme Limousine & Chauffeur Service is your premier choice for luxury transportation, 
                private car service, and chauffeur-driven travel. Serving Vancouver,{' '}
                <a href="#" className="text-primary hover:underline">Calgary</a>,{' '}
                <a href="#" className="text-primary hover:underline">Toronto</a>, Montreal, and beyond, 
                we are proud to deliver a perfect balance of comfort, style, and professionalism.
              </p>
              
              <p>
                Whether you need an executive chauffeur for a business meeting, a black car service, 
                a limo for a special event, seamless multi-city corporate travel, or a reliable{' '}
                <a href="#" className="text-primary hover:underline">airport transfer</a> in Vancouver, 
                we are your trusted choice for clients who demand excellence.
              </p>
              
              <p>
                Our professional chauffeurs and limo drivers are trained to provide more than just a ride — 
                they deliver a seamless, hassle-free, reliable, and unforgettable journey.
              </p>
              
              <p>
                Trust Supreme Limousine to redefine chauffeur service in Vancouver — where professionalism, 
                discretion, and five-star service come together to exceed your expectations.
              </p>
            </div>
          </div>

          {/* Right Content - Card + Image */}
          <div className="relative">
            {/* Floating Card */}
            <div className="absolute top-0 left-0 z-10 bg-white rounded-lg shadow-xl p-6 w-64 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm font-serif italic text-gray-800">
                  Supreme<br/>Limousines
                </div>
                <div className="flex items-center text-blue-600">
                  <Star size={16} fill="currentColor" />
                  <span className="ml-1 text-sm font-medium">5/5</span>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-900">200+ Five-Star Google Reviews</p>
                <p className="text-sm text-gray-600 mt-1">
                  Vancouver's Top Rated & Trusted Limo Company
                </p>
              </div>
              
              <p className="text-xs text-gray-500 mb-4">12 Years + Experience</p>
              
              <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:bg-primary-hover transition-colors">
                Book Online
              </button>
            </div>

            {/* Main Image */}
            <div className="ml-16 mt-12">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
                alt="Luxury Car Interior"
                className="w-full h-[500px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
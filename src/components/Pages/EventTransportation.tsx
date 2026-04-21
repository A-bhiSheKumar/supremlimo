
const EventTransportation = () => {
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
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Event Transportation & Support Services
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
                    Call Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Event Transportation & Support Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2072&auto=format&fit=crop" 
                alt="Luxury car door handle detail" 
                className="w-full h-[500px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Event Transportation & Event Support Services
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                At LGA Car Service, we deliver world-class luxury transportation and full event support services for corporate, private, and VIP events of every scale. From planning to on-site execution, our dedicated Event Support Department ensures flawless logistics, professional coordination, and premium travel comfort for every guest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Support Department - How We Work */}
      <section className="py-16 md:py-24 bg-gray-900 relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
            alt="Car background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Event Support Department – How We Work
          </h2>
          <div className="w-24 h-1 bg-white mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Pre-Event Planning & Consultation
              </h3>
              <p className="text-gray-600 mb-4">
                We work closely with your event team to understand timelines, guest lists, venue flow, and transportation priorities. Every event plan starts with:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Route design & venue access mapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Vehicle selection based on group size & budget</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Timing, staging & dispatch strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Custom schedules for VIPs, keynote speakers, executives, etc.</span>
                </li>
              </ul>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Tailored Transportation Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                No two events are alike — we build a customized plan for:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Corporate events & conferences</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Trade shows & exhibitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Award shows & red-carpet events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Sports tournaments & concerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Weddings & private celebrations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Government, embassy & diplomatic travel</span>
                </li>
              </ul>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Dedicated Client Liaison
              </h3>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                  alt="Event Manager" 
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <p className="text-gray-600">
                Your <strong>Event Manager</strong> handles everything — bookings, updates, manifests, changes, cancellations, confirmations, and on-site support.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                On-Site Event Transportation Coordination
              </h3>
              <p className="text-gray-600 mb-4">
                Our team is present on location to:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Track all vehicles & riders in real time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Manage arrivals, departures & staging zones</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Handle last-minute trip additions or guest updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Coordinate multiple pick-ups & venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Communicate directly with dispatch & chauffeurs</span>
                </li>
              </ul>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">5</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quality & Chauffeur Standards
              </h3>
              <p className="text-gray-600 mb-4">
                All chauffeurs:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Background checked & safety certified</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Trained in VIP protocol & guest handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Experienced with stadiums, hotels, airports & secured venues</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Dressed in professional black-tie attire</span>
                </li>
              </ul>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-6xl font-bold text-blue-600 mb-4 border-l-4 border-blue-600 pl-4">6</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Post-Event Wrap-Up
              </h3>
              <p className="text-gray-600 mb-4">
                We provide:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Final passenger log & trip summary</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Centralized billing & single invoice per event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Optional cost splitting by department, sponsor, guest group</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Client feedback review to refine future events</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries & Event Types Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Industries & Event Types We Serve
              </h3>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Corporate meetings & leadership retreats</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Product launches & brand activations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Conventions, expos & tech events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Film production & entertainment industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Concerts, arenas & stadium transport</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Sporting events & team logistics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Charity galas & government protocol events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Luxury weddings & destination events</span>
                </li>
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose us for Event Transportation?
              </h3>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Full event logistics & transportation management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Dedicated event manager as your single point of contact</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>24/7 dispatch, real-time communication & live trip monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Professional chauffeurs trained for high-profile events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Scalable fleet — sedans, SUVs, sprinters, shuttle buses & coaches</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>Seamless service for 10 to 10,000+ guests</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-900 mt-1">•</span>
                  <span>VIP-level experience for executives, sponsors, speakers & talent</span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-all duration-300">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </section>  
    </div>
  );
};

export default EventTransportation;
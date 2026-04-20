
import { Plane, Clock, ClipboardList } from 'lucide-react';


const AirportTransferServices = () => {
  return (
    <div className="min-h-screen bg-white mb-40">
      
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
              Airport Transfer
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

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=2070&auto=format&fit=crop" 
                alt="Private jet and luxury car" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl grayscale"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The reliability of airport transfers awaits you in Vancouver
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                LGA Car Service is happy to be your dependable <a href="#" className="text-blue-600 hover:underline">airport transfer</a> company in Vancouver, committed to make travel as easy as possible. Our services are designed to provide speedy and convenient transportation to and from the airport, reducing the stress of transportation logistics.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With a diverse fleet of <a href="#" className="text-blue-600 hover:underline">sedans, SUVs, and Sprinter vans</a>, we provide a range of solutions to fit your travel requirements. Our skilled drivers value punctuality and professionalism when navigating Vancouver. LGA Car Service will be ready to carry you luxuriously and safely to your destination as soon as your flight lands. Our <a href="#" className="text-blue-600 hover:underline">airport transfer</a> service provides you with peace of mind and efficiency, making it your doorway to stress-free travel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Plane className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Flight Tracking for Peace of mind
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Travel stress-free as we track every flight in real time. Your chauffeur adjusts to early arrivals or delays, ensuring they're waiting when you land.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                1 Hour of Complimentary Waiting Time
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every airport pickup includes 1 hour of free waiting time, allowing you to move through customs and baggage claim at your own pace — without stress or extra charges.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ClipboardList className="w-12 h-12 text-gray-900" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Meet & Greet with Name Sign
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your Chauffeur will be waiting inside the terminal holding a personalized name sign, ready to assist with your luggage and escort you to your private vehicle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coast to Coast Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            From Landing to Take-Off — Coast to Coast Coverage
          </h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-600 leading-relaxed mb-6">
              From Vancouver to Edmonton, Calgary, Toronto, and Montreal, LGA Car Service has you covered from landing to take-off. We provide luxury airport transfers, private car service, and professional chauffeur transportation across Canada's major cities — ensuring every journey is smooth, safe, and punctual.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Choose LGA Car Service for worry-free airport travel, reliable flight tracking, and exceptional service that sets the standard for premium chauffeur and black car transportation nationwide.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              LGA Car Service operates around the clock, providing transportation to and from <a href="#" className="text-blue-600 hover:underline">Vancouver International Airport (YVR), South Terminal</a>, and Private FBO. Additionally, our services extend to <a href="#" className="text-blue-600 hover:underline">Abbotsford Airport (YXX)</a>, <a href="#" className="text-blue-600 hover:underline">Calgary Airport (YYC)</a>, <a href="#" className="text-blue-600 hover:underline">Montreal Airport (YUL)</a>, <a href="#" className="text-blue-600 hover:underline">Toronto Airport (YYZ)</a>, <a href="#" className="text-blue-600 hover:underline">Bellingham Airport (BLI)</a>, and <a href="#" className="text-blue-600 hover:underline">Sea-Tac Airport (SEA)</a>.
            </p>
            <p className="text-gray-900 font-medium text-lg">
              Experience the difference — coast to coast, comfort to confidence.
            </p>
          </div>
        </div>
      </section>

      {/* FBO & Private Aviation */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1566008885218-90abf9200ddb?q=80&w=2072&auto=format&fit=crop" 
                alt="FBO Terminal with luxury cars" 
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                FBO & Private Aviation Car Service
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Whether you're hiring from an FBO or renting directly from an airport, LGA Car Service ensures a safer, faster, and easier experience. Our team caters to the unique needs of private aviation travelers, providing a dependable and luxurious car rental service that stands out for its convenience and reliability. With LGA Car Service, you can expect seamless transportation as soon as you land at <a href="#" className="text-blue-600 hover:underline">Signature Aviation</a>, <a href="#" className="text-blue-600 hover:underline">Sky Service FBO</a> or <a href="#" className="text-blue-600 hover:underline">Million Air</a> making your ground transportation journey as smooth as possible from start to finish.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With LGA Car Service, you're covered from landing to take-off. Trust us for your airport transfer needs and experience the unrivaled reliability of Vancouver airport transfers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VIP Meet & Greet */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                VIP Meet & Greet: The Ultimate Airport Experience
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                With LGA Car Service's VIP Meet & Greet service, travel becomes effortless. Our dedicated greeter will attend to you at every step, from the moment you arrive at the airport until you reach your final destination. Experience a smooth and satisfying journey, as we handle everything from luggage assistance to expedited check-ins, ensuring you breeze through security and immigration.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our VIP Meet & Greet service is designed to provide you with comfort and ease, making each aspect of your airport journey stress-free. Whether you're arriving, departing, or transferring, our greeter is there to handle logistics so that you can relax and focus on your travels. With LGA Car Service, enjoy an elevated travel experience that's tailored to meet the needs of discerning travelers seeking a seamless airport transition.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With LGA Car Service, you're covered from landing to take-off. Trust us for your airport transfer needs and experience the unrivaled reliability of Vancouver airport transfers.
              </p>
            </div>
            <div className="relative order-1 md:order-2">
              <img 
                src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1988&auto=format&fit=crop" 
                alt="VIP Meet and Greet Service" 
                className="w-full h-[450px] object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-28 bg-gray-900">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury car background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-white mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <Plane className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Seamless Airport Travel
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Enjoy a complimentary one-hour wait period with flight monitoring with our meet and greet service.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <Clock className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                24/7 Availability
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We offer dependable and excellent service around the clock, every day of the week
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Online Booking Available
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our user-friendly online platform allows you to book online in CAD from anywhere, at any time.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Live Driver Tracking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                You can track your driver and know real time location and eta on your mobile phone using our trip updates link.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Options */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Transport options
              </h2>
              <div className="w-16 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-600 leading-relaxed text-lg">
                LGA Car Service is your preferred luxury automobile rental destination. Our luxurious fleet redefines elegance and luxury, guaranteeing that your vacation is nothing short of extraordinary.
              </p>
            </div>

            {/* Right Grid */}
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Business Sedans */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Business Sedans
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Enjoy the classic elegance of our Cadillac Lyriq EVs, XT6 executive sedans. These cars offer the ideal blend of beauty and functionality, with exquisite lines and a sophisticated interior, making them excellent for both business and leisure.
                  </p>
                </div>

                {/* Mercedes S-Class */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Mercedes S-Class
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    The unparalleled elegance of our Mercedes S-Class sedans will elevate your trip experience. These vehicles, known for their luxurious interiors and innovative amenities, deliver unrivaled levels of comfort, making every kilometer a genuinely indulgent occasion.
                  </p>
                </div>

                {/* Luxury SUVs */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Luxury SUVs
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    Our SUV collection is designed to fulfill the needs of individuals seeking versatility without sacrificing luxury. These vehicles are great for families, parties, or individuals wishing to experience the world in sophisticated comfort, with plenty of space and top-of-the-line equipment.
                  </p>
                </div>

                {/* Sprinter Vans */}
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    Sprinter Vans
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    When your journey requires plenty of seating and a touch of sophistication, our Sprinter Vans deliver. Combining functionality with style, these vans offer a spacious interior without sacrificing the premium experience you expect from a LGA Car Service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-16 bg-blue-600"></div>
              <span className="text-gray-600 font-medium">Google Reviews</span>
              <div className="h-px w-16 bg-blue-600"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Our Clients Are Saying
            </h2>
            
            {/* Rating */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <span className="text-4xl font-bold text-gray-900">5.0</span>
              <div className="flex">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-gray-500">230 reviews</span>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {/* Review 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                  H
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Heather Gardiner</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">a year ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Airport pick up and a ride to Squamish and from start to finish, this was a wonderful experience! Easy quote/booking. Great communication from company and driver. Clean and comfortable SUV with a very skilled driver. Would absolutely recommend ... <button className="text-blue-600 hover:underline">More</button>
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                  J
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">John Fodchuk</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">a year ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Called on short notice for an Airport Transfer for a group. Very accommodating, clean and safe! My new go to!
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-bold">
                  S
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Sundeep Singh Grewal</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">a year ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                5 star review. Excellent service, beautiful cars. Professional, safe and I would 100% recommend. I used the service to a round trip airport drop off and pick up. The Escalade was smooth, clean and Mr Gill was professional, prompt and attentive ... <button className="text-blue-600 hover:underline">More</button>
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" 
                  alt="Christopher" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Christopher Barnard</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">2 years ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Outstanding and friendly service. I was able to secure a very clean and comfortable Escalade driven by Kam with no notice. Kam picked me and my wife from the airport within 10 mins of my call and greeted us with a friendly smile. I can't ... <button className="text-blue-600 hover:underline">More</button>
              </p>
            </div>

            {/* Review 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
                  alt="Ansh" 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-gray-900">Ansh Arora</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">2 years ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                I booked airport transfer with them for my family. Flight was delayed 3 hours but LGA Car Service took my stress away as they adjusted pickup time accordingly. Great communication through whatsApp. Worth every penny. Best airport transfer ... <button className="text-blue-600 hover:underline">More</button>
              </p>
            </div>

            {/* Review 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold">
                  N
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Nikhil Bhagirath</h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map((star) => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-400 text-sm">2 years ago</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                I would highly recommend LGA Car Service . Extremely smooth transaction. We got a brand new car which was great. Friendly staff. Picked up at airport and dropped off. We will 100% rent from them again and also would recommend them to ... <button className="text-blue-600 hover:underline">More</button>
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded transition-colors">
              View Google Reviews
            </button>
            <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded transition-colors">
              Leave A Review
            </button>
          </div>
          
          <p className="text-center mt-6 text-gray-500 text-sm">
            powered by <span className="text-blue-600 font-medium">Google</span>
          </p>
        </div>
      </section>

    </div>
  );
};

export default AirportTransferServices;
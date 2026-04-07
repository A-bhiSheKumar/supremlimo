import React from 'react';

const OurFleet: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
     <section className="relative h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070"
          alt="Long distance transfer"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Our Fleet
            </h1>

            <div className="w-24 h-1 bg-blue-600 my-6" />

            <p className="text-white/90 text-lg mb-8 max-w-xl leading-relaxed">
              Limousine Service | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="bg-blue-600 text-white px-8 py-3 rounded font-medium w-full sm:w-auto transition-all duration-300 hover:bg-blue-700">
                Book Online
              </button>

              <button className="bg-white text-black px-8 py-3 rounded font-medium w-full sm:w-auto transition-all duration-300 hover:bg-gray-100">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Sedans Section */}
      <section id="sedans" className="py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Luxury Redefined : Top Class Sedans
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              At <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Supreme Limousine</a>, our fleet of late model vehicles is the epitome of elegance, comfort, and adaptability, ensuring the perfect vehicle for any event or occasion. <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Multiple Vehicles</a> are available for <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">group or event transportation</a>. Each vehicle in our <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">fleet</a> is well-maintained, guaranteeing a smooth and luxurious trip tailored to specific needs.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Cadillac LYRIQ EV */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-48 w-full overflow-hidden rounded-lg bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cadillac LYRIQ EV" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Business Sedan : Cadillac LYRIQ EV
              </h3>
              <p className="leading-relaxed text-gray-600">
                The Cadillac LYRIQ EV is the ideal business car, combining executive elegance with performance. With its sleek design and cutting-edge technology, the Cadillac LYRIQ EV guarantees a smooth and effective ride, reflecting the professionalism and success of passengers.
              </p>
            </div>

            {/* Cadillac XT6 */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-48 w-full overflow-hidden rounded-lg bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cadillac XT6" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Mid Size SUV : Cadillac XT6
              </h3>
              <p className="leading-relaxed text-gray-600">
                The Cadillac XT6 is the perfect midsize SUV, offering all-wheel drive capability, executive-style bucket seats in the middle row, and generous trunk space—making it an excellent choice for groups of up to three passengers. Designed for both comfort and performance, the XT6 delivers a smooth ride.
              </p>
            </div>

            {/* Mercedes S Class */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-48 w-full overflow-hidden rounded-lg bg-gray-50">
                <img 
                  src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mercedes S Class" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                First Class Sedan : Mercedes S Class
              </h3>
              <p className="leading-relaxed text-gray-600">
                The <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Mercedes S-Class</a> offers an unmatched driving experience and is the pinnacle of luxury. For individuals who expect nothing less than the finest, the <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Mercedes S-Class</a> offers an unparalleled degree of elegance and design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury SUVs Section */}
      <section className="bg-gray-50 py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Elevate Your Journey with Our Luxury SUVs
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              Elevate Comfort with Captain's Chairs and Panoramic Moonroof, ideal for point to point or hourly rides as well as <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">airport transfers</a>. When it comes to <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">business travel</a>, <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">family vacations</a>, or special occasions, our <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">luxury SUVs</a> offer the ideal balance of style and functionality, transforming every trip into an amazing experience.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            {/* Cadillac Escalade ESV */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-56 w-full overflow-hidden rounded-lg bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1563720360172-67b8f3dce741?q=80&w=1000&auto=format&fit=crop" 
                  alt="Cadillac Escalade ESV" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Cadillac Escalade ESV
              </h3>
              <p className="leading-relaxed text-gray-600">
                The <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">Cadillac Escalade</a> offers a luxurious and comfortable ride, making it the best option for anyone who want to travel in first class style and adaptability.
              </p>
            </div>

            {/* GMC Yukon Denali */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-56 w-full overflow-hidden rounded-lg bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1000&auto=format&fit=crop" 
                  alt="GMC Yukon Denali" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                GMC Yukon Denali
              </h3>
              <p className="leading-relaxed text-gray-600">
                The <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">GMC Yukon Denali</a> is a symbol of luxury and toughness, excellent choice for groups of 6 as its roomy cabin offers sufficient comfort for every passenger.
              </p>
            </div>

            {/* Chevrolet Suburban */}
            <div className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="mb-6 h-56 w-full overflow-hidden rounded-lg bg-white shadow-sm">
                <img 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop" 
                  alt="Chevrolet Suburban" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Chevrolet Suburban
              </h3>
              <p className="leading-relaxed text-gray-600">
                The Chevy Suburban has a stylish, athletic appearance With its outstanding capability, the Suburban is an excellent choice for both long distance and inter city rides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shuttles Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Shuttles for any Occasion
            </h2>
            <p className="mx-auto max-w-4xl text-lg leading-relaxed text-gray-600">
              Whether you're planning a group event, wedding, or business gathering, our <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">sprinter and shuttles</a> provide roomy seats and reliable service to guarantee a hassle-free travel for every guest. We offer a smooth <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline">transportation service</a> that is customized to your requirements and brings a little ease to your occasion.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Ford Transit */}
            <div className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 h-40 w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1000&auto=format&fit=crop" 
                  alt="Ford Transit 14 Pax Van" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Ford Transit 14 Pax Van
              </h3>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-blue-500 text-blue-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mb-4 h-0.5 w-16 bg-blue-500" />
              <button className="rounded bg-blue-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                BOOK NOW
              </button>
            </div>

            {/* Mercedes Sprinter */}
            <div className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 h-40 w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1545167496-31b3aa75296c?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mercedes 14-Pax Sprinter Van" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                Mercedes 14-Pax Sprinter Van
              </h3>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-blue-500 text-blue-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mb-4 h-0.5 w-16 bg-blue-500" />
              <button className="rounded bg-blue-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                BOOK NOW
              </button>
            </div>

            {/* Mini Coach Bus */}
            <div className="group flex flex-col items-center rounded-xl border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="mb-6 h-40 w-full overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1000&auto=format&fit=crop" 
                  alt="Mini Coach Bus" 
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                22, 24 & 32 Pax Mini Coach Bus
              </h3>
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-5 w-5 fill-blue-500 text-blue-500" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="mb-4 h-0.5 w-16 bg-blue-500" />
              <button className="rounded bg-blue-600 px-6 py-2.5 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-md">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section id="quote" className="relative h-64 w-full bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2070&auto=format&fit=crop')`,
            opacity: '0.3'
          }}
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Premium Transfer Services Available
          </h2>
          <p className="mb-6 text-gray-300">Experience luxury transportation at its finest</p>
          <button className="rounded bg-blue-600 px-8 py-3 font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg">
            Get Quote Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurFleet;
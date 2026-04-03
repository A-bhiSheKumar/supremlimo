const CTABanner = () => {
  return (
    <section className="relative h-[400px] lg:h-[450px] w-full overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&h=600&fit=crop"
          alt="Luxury car at night"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Airplane Silhouette - Top Right */}
      <div className="absolute top-8 right-8 lg:top-12 lg:right-16 opacity-20">
        <svg width="120" height="120" viewBox="0 0 24 24" fill="white">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-xl lg:text-2xl font-light mb-2">
          Your Journey Begins Here
        </p>
        <h2 className="text-white text-3xl lg:text-5xl font-bold mb-8">
          Book Online In Minutes
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px]">
            Book Online
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3 rounded-full font-medium transition-colors min-w-[160px]">
            Call Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
const Hero = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1563720223185-11003d516935?w=1920&q=80"
          alt="Luxury SUV Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg md:text-xl mb-4 font-light tracking-wide">
          Welcome to
        </p>
        <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-2 max-w-4xl leading-tight">
          Supreme Limousine & Chauffeur
        </h1>
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
          Service
        </h2>
        
        {/* Decorative Line */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-16 md:w-24 h-0.5 bg-blue-500" />
          <p className="text-white text-sm md:text-base font-light tracking-wide">
            Your Executive Transportation Partner Across Canada
          </p>
          <div className="w-16 md:w-24 h-0.5 bg-blue-500" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="btn-primary text-lg px-8 py-4">
            Book Online
          </button>
          <button className="btn-outline text-lg px-8 py-4">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
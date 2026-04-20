import bannerimage from '../assets/banner1.jpg';
const Hero = () => {
  return (
    <section className="relative h-[600px] lg:h-[700px] w-full overflow-hidden">
      {/* Background Image - Interior car with blue lighting */}
      <div className="absolute inset-0">
        <img
          src={bannerimage}
          alt="Luxury car interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-white text-lg md:text-xl mb-3 font-normal tracking-wide">
          Welcome to
        </p>
        <h1 className="text-white text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-1 max-w-4xl leading-tight">
          LGA Car Service & Chauffeur
        </h1>
        <h2 className="text-white text-3xl md:text-5xl lg:text-[3.5rem] font-bold mb-8">
          Service
        </h2>
        
        {/* Decorative Blue Lines */}
        <div className="flex items-center space-x-4 mb-10">
          <div className="w-20 md:w-32 h-0.5 bg-blue-500" />
          <p className="text-white text-sm md:text-base font-light tracking-wider uppercase text-[13px]">
            Your Executive Transportation Partner Across Canada
          </p>
          <div className="w-20 md:w-32 h-0.5 bg-blue-500" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded text-base font-medium transition-colors min-w-[160px]">
            Book Online
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-3.5 rounded text-base font-medium transition-colors min-w-[160px]">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
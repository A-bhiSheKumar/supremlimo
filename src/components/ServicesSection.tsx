import image from '../assets/banner1.jpg';
const ServicesSection = () => {
  const services = [
    { title: 'Airport Transfers', image: image },
    { title: 'Whistler Transfers', image: 'https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&h=400&fit=crop' },
    { title: 'Corporate Transportation', image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop' },
    { title: 'Cruise Ship Transfers', image: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600&h=400&fit=crop' },
    { title: 'Seattle Transfers', image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=600&h=400&fit=crop' },
    { title: 'Hourly Transfer Service', image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=600&h=400&fit=crop' },
    { title: 'Sightseeing Tours', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop' },
    { title: 'Long Distance Transfer', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&h=400&fit=crop' },
    { title: 'Event Transportation', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=400&fit=crop' },
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[2.75rem] lg:text-[3.5rem] xl:text-[4rem] font-bold text-[#1e3a5f] mb-4 lg:mb-6">
            Our <span className="font-extrabold">Services</span>
          </h2>
          <p className="text-gray-700 text-base lg:text-lg max-w-4xl mx-auto leading-relaxed px-4">
            We proudly offer our{' '}
            <a href="#" className="text-blue-600 hover:underline">corporate black car</a>,{' '}
            <a href="#" className="text-blue-600 hover:underline">executive transportation services</a>{' '}
            and luxury shuttle service for events in Vancouver. With professional chauffeurs, 
            a luxury fleet, and precise logistics, we ensures seamless travel for business, 
            events, and VIP clients.
          </p>
        </div>

        {/* Grid - 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {services.map((service, index) => (
            <a
              key={index}
              href="#"
              className="group relative aspect-[4/3] overflow-hidden rounded-lg block"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 flex items-center justify-between">
                <h3 className="text-white text-lg lg:text-xl font-semibold">
                  {service.title}
                </h3>
                <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
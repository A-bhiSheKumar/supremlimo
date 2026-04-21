import image from '../assets/banner1.jpg';

const ServicesSection = () => {
  const services = [
    { title: 'Worldwide Airport Transfer Service', href: '/services/airport-transfer', image: image },
    { title: 'New York Airport Car & Limo Service', href: '/services/whistler-transfer', image: 'https://images.unsplash.com/photo-1658942445272-ef6bb53bd436?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'NYC Car Service & Limo Service', href: '/services/cruise-ship-transfer', image: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Family Car Service With Car Seats', href: '/services/sightseeing-tours', image: 'https://images.unsplash.com/photo-1675923759360-348b03df0d3e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHNlZGFufGVufDB8fDB8fHww' },
    { title: 'Hourly Car Service & Limo Service', href: '/services/hourly-services', image: 'https://images.unsplash.com/photo-1705908748578-34fd1e9a033c?q=80&w=2717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Long-Distance & Out-Of-Town Car Service', href: '/services/long-distance-transfer', image: 'https://images.unsplash.com/photo-1662832245207-e4e52c3b713e?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { title: 'Corporate Car Service & Limo Service', href: '/services/corporate-vip-travel', image: 'https://images.unsplash.com/photo-1620547316190-289b3899e010?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNhcnMlMjBzdXZ8ZW58MHx8MHx8fDA%3D' },
    { title: 'Private Aviation & FBO Car Service', href: '/services/funeral-transportation-limo-services', image: 'https://images.unsplash.com/photo-1615850271535-005a8777e22d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGNhcnMlMjBzdXZ8ZW58MHx8MHx8fDA%3D' },
    { title: 'Group Transportation Service For Schools & Universities', href: '/services/travel-to-seattle', image: 'https://images.unsplash.com/photo-1760486569714-1eef90e634f4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnMlMjBzdXZ8ZW58MHx8MHx8fDA%3D' },
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
            and luxury shuttle service for events in New York. With professional chauffeurs,
            a luxury fleet, and precise logistics, we ensures seamless travel for business,
            events, and VIP clients.
          </p>
        </div>

        {/* Grid - 3 columns */}
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
  {services.map((service, index) => (
    <a
      key={index}
      href={service.href}
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
          <svg
            className="w-4 h-4 lg:w-4.5 lg:h-4.5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7 17L17 7M17 7H7M17 7V17"
            />
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
import { useState } from 'react';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import logo from '../assets/limo-logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [citiesDropdown, setCitiesDropdown] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    {
      name: 'Our Services',
      href: '#services',
      hasDropdown: true,
      // dropdownItems: [
      //   { name: 'Worldwide Airport Transfer Service', href: '/services/airport-transfer' },
      //   { name: 'Whistler Transfer Service', href: '/services/whistler-transfer' },
      //   { name: 'Cruise Ship Transfers', href: '/services/cruise-ship-transfer' },
      //   { name: 'Corporate VIP Travel', href: '/services/corporate-vip-travel' },
      //   { name: 'Event Transportation Services', href: '/services/event-transportation-support-services' },
      //   { name: 'Sightseeing Tours', href: '/services/sightseeing-tours' },
      //   { name: 'Medical Transport Limo', href: '/services/medical-transport-limo' },
      //   { name: 'New York to Seattle Transfers', href: '/services/travel-to-seattle' },
      //   { name: 'Funeral Transportation Limo Services', href: '/services/funeral-transportation-limo-services' },
      //   { name: 'Ferry Terminal Limo Service', href: '/services/ferry-terminal-limo-service' },
      //   { name: 'Wine Tour Limo Services', href: '/services/wine-tour-limo-services' },
      //   { name: 'Long Distance Transfers', href: '/services/long-distance-transfer' },
      //   { name: 'Hourly Services', href: '/services/hourly-services' },
      // ]
      dropdownItems: [
        { name: 'Worldwide Airport Transfer Service', href: '/services/airport-transfer' },
        { name: 'New York Airport Car & Limo Service', href: '/services/whistler-transfer' },
        { name: 'NYC Car Service & Limo Service', href: '/services/cruise-ship-transfer' },
        { name: 'Family Car Service With Car Seats', href: '/services/sightseeing-tours' },
        { name: 'Hourly Car Service & Limo Service', href: '/services/hourly-services' },
        { name: 'Long-Distance & Out-Of-Town Car Service', href: '/services/long-distance-transfer' },
        { name: 'Corporate Car Service & Limo Service', href: '/services/corporate-vip-travel' },
        { name: 'Private Aviation & FBO Car Service', href: '/services/funeral-transportation-limo-services' },
        { name: 'Group Transportation Service For Schools & Universities', href: '/services/travel-to-seattle' },
      ]
    },
    { name: 'Our Fleet', href: '/our-fleet' },
    {name: "Contact Us", href: "/contact-us"},
    {
      name: 'Cities',
      href: '#cities',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Philadelphia', href: '/cities/philadelphia' },
        { name: 'Boston', href: '/cities/boston' },
        { name: 'Washington, D.C.', href: '/cities/washington-dc' },
        { name: 'Baltimore', href: '/cities/baltimore' },
      ],
    },
    // { name: 'Reviews', href: '/reviews' },
    // { name: 'Blog', href: '/blog' },
    // { name: 'Contact', href: '/contact' },
  ];

  // Social SVG Icons
  const SocialIcons = {
    Facebook: () => (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    Twitter: () => (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
    Instagram: () => (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
    Linkedin: () => (
      <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    )
  };

  return (
    <header className="w-full relative z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center py-2 space-x-6 text-sm">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                <SocialIcons.Facebook />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-400 transition-colors">
                <SocialIcons.Twitter />
              </a>
              <a href="#" className="text-gray-600 hover:text-pink-600 transition-colors">
                <SocialIcons.Instagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-700 transition-colors">
                <SocialIcons.Linkedin />
              </a>
            </div>

            {/* Contact Info */}
            <a href="mailto:reservations@lgacarservice.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Mail size={16} className="mr-2" />
              reservations@lgacarservice.com
            </a>
            <a href="tel:+1-800-000-0000" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
              <Phone size={16} className="mr-2" />
              Toll Free
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="/" className="block">
                <img
                  src={logo}
                  alt="LGA Car Service Logo"
                  className="h-14 w-auto object-contain"
                />
              </a>

              <div className="mt-1 leading-tight">
                <span className="block text-lg font-semibold text-gray-800 tracking-wide">
                  LGA Car Services
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.name === 'Our Services') setServicesDropdown(true);
                    if (link.name === 'Cities') setCitiesDropdown(true);
                  }}
                  onMouseLeave={() => {
                    if (link.name === 'Our Services') setServicesDropdown(false);
                    if (link.name === 'Cities') setCitiesDropdown(false);
                  }}
                >
                  <a
                    href={link.href}
                    className={`flex items-center text-[15px] font-medium transition-colors py-2 ${link.active
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <ChevronDown size={14} className={`ml-1 transition-transform ${(link.name === 'Our Services' && servicesDropdown) ||
                        (link.name === 'Cities' && citiesDropdown) ? 'rotate-180' : ''
                        }`} />
                    )}
                  </a>

                  {/* Services Dropdown */}
                  {link.name === 'Our Services' && servicesDropdown && (
                    <div className="absolute top-full left-0 mt-0 w-[320px] bg-white shadow-lg border border-gray-100 py-2 z-50">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Cities Dropdown */}
                  {link.name === 'Cities' && citiesDropdown && (
                    <div className="absolute top-full left-0 mt-0 w-[200px] bg-white shadow-lg border border-gray-100 py-2 z-50">
                      {link.dropdownItems?.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-2.5 text-[14px] text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* <button className="bg-blue-600 text-white px-8 py-2.5 rounded text-[15px] font-medium hover:bg-blue-700 transition-colors ml-4">
                Login
              </button> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${link.active
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                  >
                    {link.name}
                  </a>
                  {/* Mobile Dropdown Items */}
                  {link.hasDropdown && link.dropdownItems && (
                    <div className="pl-4 mt-1 space-y-1">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                Login
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
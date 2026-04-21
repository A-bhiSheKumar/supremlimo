import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1f232b] text-white relative mt-40">

      {/* ===== CTA FLOATING CARD ===== */}
      <div className="max-w-6xl mx-auto px-6 relative -top-24 z-10">
        <div className="grid md:grid-cols-2 rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

          {/* LEFT IMAGE */}
          <div className="h-[260px] md:h-auto">
            <img
              src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1400"
              alt="cars"
              className="w-full h-full object-cover grayscale"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="bg-black flex flex-col justify-center px-10 py-10">
            <h3 className="text-2xl font-semibold mb-3">
              Premium Transfer Services Available
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-md">
              Experience seamless and luxurious transportation with our range
              of services tailored for your comfort and convenience
            </p>

            <button className="border border-white px-6 py-3 w-fit text-sm hover:bg-white hover:text-black transition-all duration-300">
              Book Your Ride Now
            </button>
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-6xl mx-auto px-6 pt-0 pb-20 grid md:grid-cols-3 gap-16">

        {/* LEFT COLUMN */}
        <div>
          <h3 className="text-2xl font-semibold leading-snug">
            LGA Car Service & <br /> Chauffeur Services
          </h3>

          <p className="text-gray-400 mt-2 mb-6 text-sm">
            PT License # 75500
          </p>

          <div className="space-y-6 text-sm">

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="bg-black p-2 rounded-full">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">
                  Dispatch 24/7 ( Text or Call )
                </p>
                <p className="text-white">+1 877 8771779</p>
              </div>
            </div>

            

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="bg-black p-2 rounded-full">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Email</p>
                <p className="text-white">reservations@lgacarservice.ca</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="bg-black p-2 rounded-full">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-gray-400 text-xs">Address</p>
                <p className="text-white leading-relaxed">
                  944 E 53rd Ave, New York, <br />
                  BC V5X 1J6, Canada
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-400">
            Privacy Policy <span className="mx-2">|</span> Terms of Service
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Services</h3>

          <ul className="space-y-4 text-gray-300 text-sm">
            {[
              {
                name: "Airport Transfer",
                path: "/services/airport-transfer",
              },
              {
                name: "Cruise Ship Transfer",
                path: "/services/cruise-ship-transfer",
              },
              {
                name: "Whistler Transfer",
                path: "/services/whistler-transfer",
              },
              {
                name: "Corporate VIP Travel",
                path: "/services/corporate-vip-travel",
              },
              {
                name: "Long Distance Transfer",
                path: "/services/long-distance-transfer",
              },
              {
                name: "Hourly - As Directed Service",
                path: "/services/hourly-services",
              },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="group cursor-pointer block"
                >
                  <div className="flex flex-col gap-2">
                    <span className="text-gray-300 group-hover:text-white transition">
                      {item.name}
                    </span>
                    <div className="h-[1px] bg-gray-600 group-hover:bg-white transition"></div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* CITIES */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Cities</h3>

          <ul className="space-y-4 text-gray-300 text-sm mb-8">
            {[
              "New York",
              "Calgary",
              "Toronto",
              "Montreal",
              "Whistler",
              "Seattle",
            ].map((city, i) => (
              <li key={i} className="group cursor-pointer">
                <div className="flex flex-col gap-2">
                  <span className="group-hover:text-white transition">
                    {city}
                  </span>
                  <div className="h-[1px] bg-gray-600 group-hover:bg-white transition"></div>
                </div>
              </li>
            ))}
          </ul>

          <button className="bg-[#2f6fed] px-6 py-2 text-sm rounded hover:bg-blue-700 transition">
            Book Online
          </button>
        </div>
      </div>

      {/* ===== MAP ===== */}
      <div className="w-full h-[360px]">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=944+E+53rd+Ave+New+York&output=embed"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="bg-black py-4 px-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">

        {/* Social Icons */}
        <div className="flex gap-3 mb-3 md:mb-0">
          {["f", "t", "i", "in"].map((s, i) => (
            <div
              key={i}
              className="w-8 h-8 flex items-center justify-center bg-[#1f232b] rounded-full hover:bg-white hover:text-black transition cursor-pointer"
            >
              {s}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <p>
          Copyright © 2025 LGA Car Service & Chauffeur Service Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
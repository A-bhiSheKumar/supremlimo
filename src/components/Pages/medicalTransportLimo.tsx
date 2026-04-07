import React from "react";

const MedicalTransportLimo = () => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">

      {/* HERO */}
      <section className="relative h-[500px] md:h-[600px] bg-black">
        <img
          src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Medical Transport Limo
            </h1>

            <div className="w-16 h-[2px] bg-blue-500 my-6" />

            <p className="text-white/80 text-base sm:text-lg mb-8">
              Limousine Service | Private Transfers | Chauffeur-Driven Door to Door Comfort
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md w-full sm:w-auto">
                Book Online
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-md w-full sm:w-auto">
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">

          {/* TITLE */}
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Medical Transport Limousine Service in Vancouver, BC
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            At Supreme Limo, we are committed to providing accessible, comfortable, and reliable transportation for all, including individuals with medical needs. Our Medical Transport Limousine Service in Vancouver, British Columbia, is designed to ensure safe, dignified, and convenient travel for people, whether for medical appointments, therapy sessions, family events, or other outings.
          </p>

          <hr className="mb-8" />

          {/* WHY CHOOSE */}
          <h3 className="text-2xl font-bold mb-4">
            Why Choose Supreme Limo for Medical Transportation?
          </h3>

          <div className="space-y-6 text-gray-700 leading-relaxed">

            <div>
              <p className="font-semibold">1. Professional, Compassionate Drivers</p>
              <p>
                Our drivers are trained in assisting passengers with mobility needs. With a focus on safety and empathy, they are dedicated to providing supportive and respectful service, helping passengers in and out of the vehicle and ensuring a comfortable journey.
              </p>
            </div>

            <div>
              <p className="font-semibold">2. Reliable and Timely Service</p>
              <p>
                We understand the importance of being punctual, especially when it comes to medical appointments or other time-sensitive commitments. Our team works with you to ensure timely pick-ups and drop-offs, so you never have to worry about missing an appointment.
              </p>
            </div>

            <div>
              <p className="font-semibold">3. Flexible Booking Options</p>
              <p>
                Whether you need one-time transport or regular service, we offer flexible scheduling options to meet your unique needs. Our customer service team will help you plan the most convenient schedule and ensure that everything is ready when you are.
              </p>
            </div>

            <div>
              <p className="font-semibold">4. Privacy and Comfort</p>
              <p>
                Our medical transport services are designed to provide a private, comfortable space where you can relax during the journey. We go the extra mile to make each trip as enjoyable as possible, regardless of the destination.
              </p>
            </div>

          </div>

          <hr className="my-8" />

          {/* WHO CAN BENEFIT */}
          <h3 className="text-2xl font-bold mb-4">
            Who Can Benefit from Our Accessible Limousine Service?
          </h3>

          <p className="text-gray-600 mb-4">
            Our Medical Transport Limousine Service serves a wide range of passengers, including but not limited to:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Individuals attending medical appointments or treatments</li>
            <li>Seniors who want comfortable, reliable transportation for outings</li>
            <li>Passengers recovering from surgery or a medical procedure</li>
            <li>Disabled individuals seeking safe, accessible travel for any occasion</li>
          </ul>

          <hr className="my-8" />

          {/* SERVICE AREA */}
          <h3 className="text-2xl font-bold mb-4">Service Area</h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            We proudly serve the Greater Vancouver Area, including but not limited to Vancouver, Richmond, Burnaby, Surrey, and surrounding communities. Whether you’re heading to a medical center, rehabilitation facility, family gathering, or a special event, we’re here to provide accessible and reliable transportation wherever you need to go.
          </p>

          <hr className="mb-8" />

          {/* CTA TEXT */}
          <h3 className="text-2xl font-bold mb-4">
            Book Your Accessible Transportation with Supreme Limo Today
          </h3>

          <p className="text-gray-600 leading-relaxed">
            Supreme Limo is dedicated to offering inclusive and compassionate service to meet the mobility needs of all individuals. To book your medical transport limousine, contact us today. Let us provide you with the care, comfort, and reliability you deserve on your journey.
          </p>

        </div>
      </section>

      {/* IMAGE CTA */}
      <section className="py-14 md:py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556122071-e404eaedb77f?q=80&w=2070"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                Premium Transfer Services Available
              </h3>
              <p className="text-white/80 mb-6 max-w-xl">
                Experience seamless and luxurious transportation tailored for your comfort and safety.
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-md">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalTransportLimo;
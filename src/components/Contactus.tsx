import React, { useState } from 'react';

const ContactQuoteSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    pickupDate: '',
    pickupTime: '',
    pickupLocation: '',
    dropOffLocation: '',
    passengers: '',
    vehicleType: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Side - Form */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get a Free Quote
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We'd love to hear from you! Whether you have a question about our services, need 
              assistance with a booking, or want to provide feedback, we're here to help. Please fill out the 
              form below, and a member of our team will get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select Services</option>
                  <option value="airport">Airport Transfer</option>
                  <option value="corporate">Corporate Travel</option>
                  <option value="wedding">Wedding Service</option>
                  <option value="hourly">Hourly Charter</option>
                  <option value="point-to-point">Point to Point</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pickup Date</label>
                <input
                  type="date"
                  name="pickupDate"
                  placeholder="Pickup Date"
                  value={formData.pickupDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                <input
                  type="time"
                  name="pickupTime"
                  placeholder="Pickup Time"
                  value={formData.pickupTime}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Pick-up Location</label>
                <input
                  type="text"
                  name="pickupLocation"
                  placeholder="Pick-up Location"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Drop-Off Location</label>
                <input
                  type="text"
                  name="dropOffLocation"
                  placeholder="Drop-Off Location"
                  value={formData.dropOffLocation}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">No. Of Passengers</label>
                <input
                  type="number"
                  name="passengers"
                  placeholder="Number of Passengers"
                  value={formData.passengers}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                <select
                  name="vehicleType"
                  value={formData.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                >
                  <option value="">Select a Vehicle</option>
                  <option value="standard-sedan">Standard Sedan</option>
                  <option value="luxury-sedan">Luxury Sedan</option>
                  <option value="ultra-luxury">Ultra Luxury Sedan</option>
                  <option value="luxury-suv">Luxury SUV</option>
                  <option value="luxury-van">Luxury Van</option>
                  <option value="sprinter">Mercedes Sprinter</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Please type any special requests here (e.g., car seats, flight information etc)"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-700 transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right Side - Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Contact Info</h3>
            
            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+18778771779" className="text-gray-700 hover:text-blue-600 transition-colors">
                    +1 877 8771779
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:reservations@lgacarservice.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    reservations@lgacarservice.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactQuoteSection;
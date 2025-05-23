import React from "react";
import reserveImg from "../assets/images/reserved.png";
import RestaurantNavbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReservationPage() {
  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen">
      <RestaurantNavbar />

      {/* Hero Section */}
      <section className="relative h-[450px] w-full overflow-hidden">
        <img
          src={reserveImg}
          alt="Restaurant"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <p className="text-yellow-500 font-serif italic mb-2 text-lg">
            Reservations
          </p>
          <h1 className="text-5xl font-serif font-bold mb-4">
            Book Your Table
          </h1>
          <div className="h-1 w-16 bg-yellow-600 mb-4"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto m-20 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="relative">
            <img
              src={reserveImg}
              alt="Restaurant"
              className="w-full h-full object-cover rounded-lg opacity-90"
            />
            <div className="absolute inset-0 bg-black bg-opacity-70 p-10 rounded-lg flex flex-col justify-center">
              <h3 className="text-3xl font-serif mb-6 text-yellow-500">
                Opening Hours
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-yellow-500/30 pb-2">
                  <span>Mon - Thu</span>
                  <span>09:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between border-b border-yellow-500/30 pb-2">
                  <span>Fri - Sun</span>
                  <span>11:00 AM - 11:30 PM</span>
                </div>
              </div>
              <div className="pt-6">
                <p className="font-serif text-xl text-yellow-400 mb-2">Contact</p>
                <p>(+233) 456 7890</p>
                <p>info@yourrestaurant.com</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-[#1a1a1a] p-10 rounded-lg shadow-lg border border-gray-800">
            <h2 className="text-3xl font-serif mb-6">Reservation Form</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name *"
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone *"
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <select
                  required
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                >
                  <option value="">Number of Guests *</option>
                  {[...Array(7)].map((_, i) => (
                    <option key={i + 1}>{i + 1} {i + 1 === 1 ? "Person" : "People"}</option>
                  ))}
                  <option>7+ People</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="date"
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
                <input
                  type="time"
                  className="bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  required
                />
              </div>
              <textarea
                rows="4"
                placeholder="Special Requests (Optional)"
                className="w-full bg-[#2a2a2a] text-white px-5 py-4 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
              <button
                type="submit"
                className="w-full md:w-auto bg-yellow-600 hover:bg-yellow-700 text-white font-semibold px-10 py-4 rounded-md uppercase transition"
              >
                Book A Table
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

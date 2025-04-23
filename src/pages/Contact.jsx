import React from "react";
import Footer from "../components/Footer";
import { MapPin, Mail, Phone } from "lucide-react";
import RestaurantNavbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      <RestaurantNavbar />

      {/* Hero Section */}
      <div className="relative h-96 bg-center bg-no-repeat bg-cover">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/60 z-0" />

        {/* Background Image Layer */}
        <div className="absolute inset-0 bg-[url('assets/images/contact.png')] bg-cover bg-center opacity-40 z-0" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold mt-4">Contact Us</h1>
          <div className="flex items-center text-yellow-400 text-lg">
            <span>Home</span>
            <span className="mx-2">•</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.0409378830327!2d-0.17436122564537482!3d5.560951033601204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9117c1a3e0e7%3A0x6040bd0138187e45!2sburo.!5e0!3m2!1sen!2sgh!4v1744889385326!5m2!1sen!2sgh"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Info Cards */}
      <div className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-10 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
              <div className="mb-6 flex justify-center">
                <MapPin className="text-yellow-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Our Location</h3>
              <p className="text-gray-300">
                Plot No.7, Buro - Osu
              </p>
            </div>
            <div className="text-center p-10 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
              <div className="mb-6 flex justify-center">
                <Mail className="text-yellow-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Address</h3>
              <p className="text-gray-300">booking@restaurant.com</p>
              <p className="text-gray-300">info@restaurant.com</p>
            </div>
            <div className="text-center p-10 bg-gray-800 shadow-lg rounded-lg border border-gray-700">
              <div className="mb-6 flex justify-center">
                <Phone className="text-yellow-500 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Phone Number</h3>
              <p className="text-gray-300">Booking Request: +233-23-123456</p>
              <p className="text-gray-300">Table Booking: +233-23-123456</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex flex-col md:flex-row bg-black text-white">
        {/* Left side - Contact Form */}
        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-3 text-center md:text-left">
            Message us
          </h2>
          <p className="text-gray-400 mb-10 text-center md:text-left">
            Have a question about our service? We're here to help. Contact us today!
          </p>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 bg-transparent border border-gray-800 focus:border-yellow-600 focus:outline-none text-white"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 bg-transparent border border-gray-800 focus:border-yellow-600 focus:outline-none text-white"
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 bg-transparent border border-gray-800 focus:border-yellow-600 focus:outline-none text-white"
              />
            </div>

            <div>
              <textarea
                placeholder="Special Request"
                rows={4}
                className="w-full px-5 py-4 bg-transparent border border-gray-800 focus:border-yellow-600 focus:outline-none text-white resize-none"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-yellow-600 hover:bg-yellow-700 text-black font-medium uppercase tracking-wider transition-colors duration-300"
              >
                SEND YOUR MESSAGE
              </button>
            </div>
          </form>
        </div>

        {/* Right side - Restaurant Image */}
        <div className="w-full md:w-1/2 h-[550px] bg-[url('assets/images/hero2.png')] bg-cover bg-center">

          {/* This div will show the restaurant image as the background */}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;

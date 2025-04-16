import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin, Clock, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

export default function RestaurantNavbar() {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black shadow-lg"
          : "bg-transparent border-b border-gray-800"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center h-16 text-sm border-b border-amber-200">
        <div className="flex items-center space-x-2">
          <MapPin size={16} className="text-amber-200" />
          <span className="text-white">
            Restaurant St, Plot No.7,Buro - Osu
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Clock size={16} className="text-amber-200" />
          <span className="text-white">Daily : 8:00 am to 10:00 pm</span>
        </div>

        <div className="flex items-center space-x-6">
          <div className="hidden md:flex items-center space-x-2">
            <Phone size={16} className="text-amber-200" />
            <span className="text-white">+233 23 456 7890</span>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <Mail size={16} className="text-amber-200" />
            <span className="text-white">booking@restaurant.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation - part of fixed header */}
      <nav
        className={`transition-all duration-300 py-4 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <button className="md:hidden text-white">
            <Menu size={24} />
          </button>

          <div className="flex items-center">
            <div className="text-amber-200 text-3xl font-serif">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full border-2 border-amber-200 flex items-center justify-center mr-2 text-sm">
                  HP
                </div>
                <div>
                  <span className="font-bold tracking-wide">H&P</span>
                  <div className="text-xs tracking-widest text-center mt-1">
                    RESTAURANT
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
  <ul className="flex space-x-8 font-light text-white">
    <li>
      <Link to="/" className="hover:text-amber-200 cursor-pointer">Home</Link>
    </li>
    <li>
      <Link to="/menu" className="hover:text-amber-200 cursor-pointer">Menu</Link>
    </li>
    <li>
      <Link to="/about" className="hover:text-amber-200 cursor-pointer">About</Link>
    </li>
    <li>
      <Link to="/gallery" className="hover:text-amber-200 cursor-pointer">Gallery</Link>
    </li>
    <li>
      <Link to="/contact" className="hover:text-amber-200 cursor-pointer">Contact</Link>
    </li>
  </ul>
</div>

          <button className="bg-amber-200 text-black px-6 py-3 font-medium hover:bg-amber-300 transition duration-300">
            FIND A TABLE
          </button>
        </div>
      </nav>
    </header>
  );
}

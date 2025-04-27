import { useState, useEffect } from "react";
import { Menu, Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md"; // Correct import from react-icons
import { useCart } from "../components/contexts/CartContext"; // Import the CartContext hook

export default function RestaurantNavbar() {
  const { cart } = useCart(); // Access cart from context
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          <span className="text-white">Plot No.7, Buro - Osu</span>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Clock size={16} className="text-amber-200" />
          <span className="text-white">Daily: 8:00 am to 10:00 pm</span>
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

          {/* Cart Icon */}
          <div className="relative">
            <Link to="/cart" className="relative">
              <MdShoppingCart size={24} className="text-amber-200" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2 py-1">
                {cart.length} {/* Display the number of items in the cart */}
              </span>
            </Link>
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
          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
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

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8 font-light text-white">
              <li>
                <Link to="/" className="hover:text-amber-200 cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-200 cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-amber-200 cursor-pointer">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-amber-200 cursor-pointer">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-200 cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Table Reservation Button */}
          <Link to="/login">
            <button className="bg-amber-200 text-black px-6 py-3 font-medium hover:bg-amber-300 transition duration-300">
              LOGIN
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <ul className="space-y-4">
            <li>
              <Link to="/" className="hover:text-amber-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-amber-200">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-amber-200">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-200">
                Contact
              </Link>
            </li>
            
          </ul>
        </div>
      )}
    </header>
  );
}

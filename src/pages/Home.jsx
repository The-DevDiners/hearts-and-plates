import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import breakfastImg from "../assets/images/breakfast.jpg"
import tacosImg from "../assets/images/tacos.png"
import drinksImg from "../assets/images/drinks.png"

export default function RestaurantHomepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const backgroundImages = [
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80",
    "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=1600&q=80",
  ];

  const categories = [
    {
      title: "Breakfast",
      img: breakfastImg,
      patternId: "pattern-breakfast",
      alt: "Stack of pancakes with berries and honey",
    },
    {
      title: "Appetizers",
      img: tacosImg,
      patternId: "pattern-appetizers",
      alt: "Grilled chicken wings with sauce",
    },
    {
      title: "Drinks",
      img: drinksImg,
      patternId: "pattern-drinks",
      alt: "Fancy cocktail with garnish",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  return (
    <div className="relative w-full min-h-screen text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Images with Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index + 1} showing restaurant ambiance`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay to make text readable */}
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80"></div>
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <main className="relative z-30 flex items-center justify-center min-h-screen pt-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            {/* Intro text */}
            <div className="mb-16">
              <h3 className="text-amber-200 tracking-widest uppercase mb-2">
                DELIGHTFUL EXPERIENCE
              </h3>
              <div className="flex justify-center items-center my-6">
                <div className="h-px w-12 bg-amber-200"></div>
                <div className="mx-2 text-amber-200">♦</div>
                <div className="h-px w-12 bg-amber-200"></div>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-serif mb-8">
              Flavors Inspired by
              <br />
              the Seasons
            </h1>

            <p className="text-xl text-gray-300 mb-12">
              Come with family & feel the joy of mouthwatering food
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-12 mb-16 w-full">
              {/* View Our Menu */}
              <div className="flex justify-center md:flex-1">
                <button className="border border-amber-200 text-amber-200 px-8 py-3 min-w-48 hover:bg-amber-200 hover:text-black transition duration-300 tracking-widest uppercase">
                  VIEW OUR MENU
                </button>
              </div>

              {/* Book a Table */}
              <div className="flex justify-center md:flex-1 md:justify-end">
                <div className="relative">
                  <div className="bg-amber-200 p-6 flex flex-col items-center justify-center relative z-10">
                    <div className="mb-2">
                      <svg
                        viewBox="0 0 24 24"
                        width="32"
                        height="32"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-black"
                      >
                        <rect x="3" y="14" width="18" height="2"></rect>
                        <rect x="9" y="16" width="6" height="6"></rect>
                        <rect x="5" y="8" width="2" height="6"></rect>
                        <rect x="17" y="8" width="2" height="6"></rect>
                        <rect x="8" y="4" width="8" height="2"></rect>
                        <line x1="9" y1="6" x2="9" y2="8"></line>
                        <line x1="15" y1="6" x2="15" y2="8"></line>
                      </svg>
                    </div>
                    <div className="text-black text-center font-medium">
                      <div className="text-sm uppercase tracking-widest">
                        BOOK A
                      </div>
                      <div className="text-sm uppercase tracking-widest">
                        TABLE
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 -z-10 transform rotate-45 border border-amber-200 scale-110"></div>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 mt-12">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  aria-label={`Go to slide ${index + 1}`}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentSlide === index ? "bg-amber-200" : "bg-gray-500"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>

        {/* Slide Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-black transition-colors duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-black transition-colors duration-300"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </main>

      <div className="bg-black text-white py-24 relative overflow-hidden">
        

        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h3 className="text-amber-200 tracking-widest text-sm mb-4">
              FLAVORS FOR ROYALTY
            </h3>

            <div className="flex justify-center items-center my-6">
              <div className="w-2 h-2 rounded-full bg-amber-200" />
              <div className="w-16 h-px bg-amber-200 mx-2" />
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 border border-amber-200 rotate-45" />
                <div className="absolute inset-0 border border-amber-200 -rotate-45" />
              </div>
              <div className="w-16 h-px bg-amber-200 mx-2" />
              <div className="w-2 h-2 rounded-full bg-amber-200" />
            </div>

            <h2 className="text-5xl font-semibold mt-6 mb-6">
              We Offer Top Notch
            </h2>
            <p className="text-gray-400">
              Indulge in our curated menu crafted with love and flavor,
              guaranteed to delight your taste buds.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer transition-transform duration-300 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={category.img}
                    alt={category.alt}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />
                </div>

                {/* Art Deco */}
                <div className="w-full flex justify-center -mt-4">
                  <div className="w-32 h-6 relative">
                    <svg
                      viewBox="0 0 120 24"
                      className="w-full h-full text-amber-200"
                    >
                      <pattern
                        id={category.patternId}
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                        patternTransform="rotate(45)"
                      >
                        <line
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="10"
                          stroke="currentColor"
                          strokeWidth="1"
                        />
                      </pattern>
                      <rect
                        width="120"
                        height="24"
                        fill={`url(#${category.patternId})`}
                      />
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="text-center mt-6">
                  <h3 className="text-3xl font-medium mb-3">
                    {category.title}
                  </h3>
                  <a
                    href="/menu"
                    className="inline-block text-amber-200 text-sm tracking-widest hover:text-amber-300 transition"
                  >
                    VIEW MENU
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

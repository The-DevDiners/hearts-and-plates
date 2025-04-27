import React, { useState, useEffect } from "react";
import axios from "axios";
import RestaurantNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCart } from "../components/contexts/CartContext";
import {
  MdFreeBreakfast,
  MdLunchDining,
  MdDinnerDining,
  MdIcecream,
  MdFastfood,
} from "react-icons/md";

const categoryIcons = {
  Breakfast: <MdFreeBreakfast className="inline mr-1 text-yellow-400" />,
  Appetizer: <MdFastfood className="inline mr-1 text-yellow-400" />,
  Lunch: <MdLunchDining className="inline mr-1 text-yellow-400" />,
  Dinner: <MdDinnerDining className="inline mr-1 text-yellow-400" />,
  Dessert: <MdIcecream className="inline mr-1 text-yellow-400" />,
};

const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [menuData, setMenuData] = useState({});
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get(
        "https://jam-hearts-plates-h-and-p-restaurant.onrender.com/menu"
      );
      const items = response.data?.data || [];

      const grouped = items.reduce((acc, item) => {
        const category = item.category || "Uncategorized";
        if (!acc[category]) acc[category] = [];
        acc[category].push(item);
        return acc;
      }, {});

      setMenuData(grouped);
    } catch (error) {
      console.error("Failed to fetch menu:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredMenu = Object.entries(menuData).map(([category, items]) => {
    const filteredItems = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );
    return { category, items: filteredItems };
  });

  return (
    <section className="py-16 bg-cover bg-center relative bg-gradient-to-b from-[#1a202c] to-[#2d3748]">
      <RestaurantNavbar />
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">
        <h2 className="text-4xl font-bold text-center mt-30">
          Explore and Enjoy
        </h2>

        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="Search Menu..."
            className="py-2 px-4 w-1/2 bg-white text-gray-800 rounded-md"
            onChange={handleSearch}
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          <button
            onClick={() => setSearchTerm("")}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-1 px-3 rounded"
          >
            Show All
          </button>
          {Object.keys(menuData).map((category) => (
            <button
              key={category}
              onClick={() => setSearchTerm(category.toLowerCase())}
              className="bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-1 px-3 rounded"
            >
              {categoryIcons[category] || "🍽"} {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {filteredMenu.map(({ category, items }) => (
          <div key={category} className="mb-14" id={category}>
            <h3 className="text-2xl font-semibold mb-6 text-yellow-400 flex items-center">
              {categoryIcons[category] || "🍽"} {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {items.length > 0 ? (
                items.map((item) => {
                  // Example image URLs for demo purposes
                  const imageUrl = item.image
                    ? item.image.startsWith("http")
                      ? item.image // Use the backend URL directly if available
                      : `/images/${item.image}` // Handle relative paths (if any)
                    : "https://via.placeholder.com/150"; // Placeholder URL as fallback

                  return (
                    <div
                      key={item._id || item.id}
                      data-aos="fade-up"
                      className="bg-zinc-800/90 text-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
                    >
                      <img
                        src={imageUrl}
                        alt={item.name}
                        className="h-40 w-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null; // Prevents infinite loop
                          e.target.src = "https://via.placeholder.com/150"; // Fallback placeholder image if error
                        }}
                      />

                      <div className="p-4">
                        <h4 className="text-xl font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-300">
                          {item.description}
                        </p>
                        <p className="mt-2 font-bold text-yellow-400">
                          {item.price ? `₵${item.price}` : "Ask for Price"}
                        </p>
                        <button
                          onClick={() => addToCart(item)}
                          className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded text-black font-semibold"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <p className="text-center text-white">
                  No items match your search.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default MenuSection;

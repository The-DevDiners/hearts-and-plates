import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/contexts/CartContext";
import RestaurantNavbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const total = calculateTotal();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      clearCart();
      setIsSubmitting(false);
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <section className="py-16 bg-black text-white min-h-screen">
      <RestaurantNavbar cart={cart} />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mt-30">Checkout</h2>

        <div className="mt-10">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Cart Summary</h3>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="flex justify-between border-b border-gray-700 pb-2">
                  <div>
                    <p className="text-lg font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                  <div className="text-lg font-semibold">${item.price.toFixed(2)}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex justify-between font-semibold text-xl">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-10 bg-gray-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Billing Information</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={billingInfo.name}
                    onChange={handleInputChange}
                    className="mt-2 w-full p-3 bg-black text-white border border-gray-700 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={billingInfo.email}
                    onChange={handleInputChange}
                    className="mt-2 w-full p-3 bg-black text-white border border-gray-700 rounded-md"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-300">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={billingInfo.address}
                    onChange={handleInputChange}
                    className="mt-2 w-full p-3 bg-black text-white border border-gray-700 rounded-md"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={billingInfo.phone}
                    onChange={handleInputChange}
                    className="mt-2 w-full p-3 bg-black text-white border border-gray-700 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-center">
               <Link to="/order">
               <button
                  type="submit"
                  className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Proceed to Payment"}
                </button>
               </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CheckoutPage;

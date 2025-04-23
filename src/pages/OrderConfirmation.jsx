import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import RestaurantNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrderConfirmationPage = () => {
  const [order, setOrder] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrder = JSON.parse(localStorage.getItem("latestOrder")) || [];
    setOrder(storedOrder);
  }, []);

  // Calculate the total price
  const calculateTotal = () => {
    return order.reduce((total, item) => total + parseFloat(item.price), 0);
  };

  return (
    <section className="py-16 bg-black text-white min-h-screen">
      <RestaurantNavbar />
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mt-30">Order Confirmation</h2>

        <div className="mt-10">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Thank you for your order!</h3>
            <p className="text-lg mb-4">
              Your order has been successfully placed. Here are the details:
            </p>

            {/* Cart Summary */}
            <div className="space-y-4">
              {order.length > 0 ? (
                order.map((item, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-700 pb-2">
                    <div>
                      <p className="text-lg font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-400">{item.description}</p>
                    </div>
                    <div className="text-lg font-semibold">${parseFloat(item.price).toFixed(2)}</div>
                  </div>
                ))
              ) : (
                <p>No order details found.</p>
              )}
            </div>

            <div className="mt-6 flex justify-between font-semibold text-xl border-t border-gray-700 pt-4">
              <span>Total</span>
              <span>${calculateTotal().toFixed(2)}</span>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => navigate("/")}
                className="bg-yellow-400 text-black px-6 py-3 font-semibold rounded-md hover:bg-yellow-500 transition duration-300"
              >
                Back to Homepage
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default OrderConfirmationPage;

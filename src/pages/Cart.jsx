import { useCart } from "../components/contexts/CartContext";
import { Link, useNavigate } from "react-router-dom"; // <-- Add useNavigate
import { useEffect } from "react";

function CartPage() {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => {
    if (item.price && item.quantity) {
      return sum + (item.price * item.quantity);
    }
    return sum;
  }, 0);

  const formattedTotal = total && !isNaN(total) ? total.toFixed(2) : "0.00";

  const handleProceedToCheckout = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login"); // 🔥 Redirect to login if no user
    } else {
      navigate("/checkout"); // 🔥 Proceed to checkout if logged in
    }
  };

  return (
    <div className="min-h-screen bg-white text-black py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mt-10 mb-4 border-b border-amber-500 pb-2">Cart Details</h1>

        {cart.length === 0 ? (
          <div className="text-center text-lg text-gray-500">
            Your cart is currently empty.
            <div className="mt-4">
              <Link
                to="/menu"
                className="text-amber-500 underline hover:text-amber-600 transition"
              >
                Go back to Menu
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={`${item.id}-${item.quantity}`}
                  className="bg-gray-100 p-4 rounded-lg shadow flex justify-between items-center"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image || "https://images.unsplash.com/photo-1555992336-03a23c9dca62"}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div>
                      <h2 className="text-xl font-semibold">{item.name}</h2>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-600">Price: GHS {item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-amber-500 pt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold text-amber-500">
                Total: GHS {formattedTotal}
              </h3>

              <button
                onClick={handleProceedToCheckout}
                className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-medium transition"
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;

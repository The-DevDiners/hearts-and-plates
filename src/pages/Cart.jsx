import { useCart } from "../components/contexts/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mt-30 border-b border-amber-200 pb-2">Cart Details</h1>

        {cart.length === 0 ? (
          <div className="text-center text-lg text-gray-400">
            Your cart is currently empty.
            <div className="mt-4">
              <Link
                to="/menu"
                className="text-amber-300 underline hover:text-amber-400 transition"
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
                  key={item.id}
                  className="bg-gray-900 p-4 rounded-lg shadow-lg flex justify-between items-center"
                >
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p className="text-sm text-gray-400">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-400">
                      Price: GHS {item.price.toFixed(2)}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-amber-200 pt-6 flex justify-between items-center">
              <h3 className="text-xl font-semibold">
                Total: GHS {total.toFixed(2)}
              </h3>

              <Link to="/checkout">
                <button className="bg-amber-400 hover:bg-amber-500 text-black px-6 py-3 rounded-lg font-medium transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;

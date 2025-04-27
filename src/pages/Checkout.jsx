import React, { useState, useEffect } from 'react';
import { useCart } from '../components/contexts/CartContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutPage = () => {
  const { cart, clearCart } = useCart();
  const [total, setTotal] = useState(0);
  const [paymentOption, setPaymentOption] = useState('dine-in');
  const [orderDetails, setOrderDetails] = useState({
    address: '',
    deliveryTime: '',
  });
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [momoFormVisible, setMomoFormVisible] = useState(false);
  const [momoDetails, setMomoDetails] = useState({
    fullName: '',
    mobileNumber: '',
    network: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    setTotal(cart.reduce((acc, item) => acc + item.price * item.quantity, 0));
  }, [cart]);

  const handleToken = async (token) => {
    try {
      const response = await axios.post('/api/checkout', {
        token,
        amount: total * 100,
        paymentOption,
        orderDetails,
      });
      if (response.status === 200) {
        alert('Payment Successful!');
        clearCart();
        navigate('/order');
      }
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed, please try again.');
    }
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleMomoPayment = () => {
    if (!momoDetails.fullName || !momoDetails.mobileNumber || !momoDetails.network) {
      alert('Please complete all Mobile Money fields.');
      return;
    }

    // Simulate successful payment
    setTimeout(() => {
      alert('Mobile Money Payment Successful!');
      clearCart();
      navigate('/order');
    }, 1500);
  };

  return (
    <div
      className="checkout-page min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-2xl max-w-3xl w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Checkout</h1>

        {/* Payment Option */}
        <div className="flex justify-center mb-8">
          <label className="flex items-center mr-6">
            <input
              type="radio"
              value="dine-in"
              checked={paymentOption === 'dine-in'}
              onChange={handlePaymentOptionChange}
              className="mr-2"
            />
            <span className="text-lg text-gray-700">Dine-In</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="delivery"
              checked={paymentOption === 'delivery'}
              onChange={handlePaymentOptionChange}
              className="mr-2"
            />
            <span className="text-lg text-gray-700">Delivery</span>
          </label>
        </div>

        {/* Address and Time if Delivery */}
        {paymentOption === 'delivery' && (
          <div className="mb-8 space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Address</label>
              <input
                type="text"
                value={orderDetails.address}
                onChange={(e) => setOrderDetails({ ...orderDetails, address: e.target.value })}
                className="border p-3 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Delivery Time</label>
              <input
                type="time"
                value={orderDetails.deliveryTime}
                onChange={(e) => setOrderDetails({ ...orderDetails, deliveryTime: e.target.value })}
                className="border p-3 w-full rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        )}

        {/* Cart Summary */}
        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-2xl text-gray-800 mb-4">Cart Summary</h3>
          <ul className="space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>{item.quantity} × {item.price} GHS</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-6">
            <span className="text-xl font-semibold text-gray-800">Total:</span>
            <span className="text-xl font-semibold text-gray-800">{total} GHS</span>
          </div>
        </div>

        {/* Make Payment */}
        <div className="text-center">
          <button
            onClick={() => setShowPaymentForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
            disabled={cart.length === 0}
          >
            Make Payment
          </button>
        </div>

        {/* Stripe and MoMo Forms */}
        {showPaymentForm && (
          <div className="mt-8 space-y-4">
            {/* Stripe Form */}
            {!momoFormVisible && (
              <StripeCheckout
                stripeKey="your_public_stripe_key_here"
                token={handleToken}
                amount={total * 100}
                name="Hearts & Plates Checkout"
                billingAddress
                shippingAddress
                currency="GHS"
                panelLabel="Pay Now"
                label="Pay with Card"
                className="w-full"
              />
            )}

            {/* Mobile Money Button */}
            {!momoFormVisible && (
              <div className="text-center">
                <button
                  onClick={() => setMomoFormVisible(true)}
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
                >
                  Pay with Mobile Money
                </button>
              </div>
            )}

            {/* MoMo Payment Form */}
            {momoFormVisible && (
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Mobile Money Payment</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={momoDetails.fullName}
                    onChange={(e) => setMomoDetails({ ...momoDetails, fullName: e.target.value })}
                    className="border p-3 w-full rounded-md shadow-md"
                  />
                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={momoDetails.mobileNumber}
                    onChange={(e) => setMomoDetails({ ...momoDetails, mobileNumber: e.target.value })}
                    className="border p-3 w-full rounded-md shadow-md"
                  />
                  <select
                    value={momoDetails.network}
                    onChange={(e) => setMomoDetails({ ...momoDetails, network: e.target.value })}
                    className="border p-3 w-full rounded-md shadow-md"
                  >
                    <option value="">Select Network</option>
                    <option value="MTN">MTN</option>
                    <option value="Vodafone">Vodafone</option>
                    <option value="AirtelTigo">AirtelTigo</option>
                  </select>

                  <button
                    onClick={handleMomoPayment}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 w-full"
                  >
                    Confirm Payment
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;

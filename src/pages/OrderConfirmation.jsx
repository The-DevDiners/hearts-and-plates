import React from 'react';
import { useNavigate } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <div className="order-confirmation min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-6">
          Thank You for Your Order!
        </h1>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">
            Your payment was successful 🎉
          </h2>
          <p className="text-gray-600">
            A confirmation email has been sent to you.
          </p>
        </div>

        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="bg-green-600 hover:bg-green-700 transition text-white font-semibold py-3 px-8 rounded-full shadow-md"
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;

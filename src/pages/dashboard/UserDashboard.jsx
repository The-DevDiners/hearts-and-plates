import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar';
import { useCart } from '../../components/contexts/CartContext';
import axios from 'axios';

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const { cart, clearCart } = useCart();
  const [recentOrders, setRecentOrders] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }
    fetchRecentOrders(token);
  }, [navigate]);

  const fetchRecentOrders = async (token) => {
    try {
      const response = await axios.get(
        'https://jam-hearts-plates-h-and-p-restaurant.onrender.com/orders',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setRecentOrders(response.data.orders);
    } catch (error) {
      console.error('Failed to fetch recent orders:', error);
    }
  };

  const handleCheckout = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
      }

      await axios.post(
        'https://jam-hearts-plates-h-and-p-restaurant.onrender.com/orders',
        { items: cart },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert('Checkout successful!');
      clearCart();
    } catch (error) {
      console.error(error);
      alert('Checkout failed. Please try again.');
    }
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="lg:ml-64 w-full p-6 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-semibold mb-6">
          {user ? `Welcome, ${user.fullName || user.userName}!` : 'Welcome to Your Dashboard!'}
        </h2>

        {/* Checkout Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
          {cart.length > 0 ? (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                  <p className="text-gray-800 font-medium">{item.name}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-gray-600">Price: GHS {item.price}</p>
                </div>
              ))}
              <div className="mt-4 text-right">
                <p className="font-semibold text-lg">Total: GHS {getTotalPrice()}</p>
                <button
                  onClick={handleCheckout}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300"
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <p className="text-gray-600">Your cart is empty.</p>
          )}
        </div>

        {/* Recent Orders Section */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
          {recentOrders.length > 0 ? (
            <div className="space-y-4">
              {recentOrders.map((order, index) => (
                <div key={index} className="bg-white p-4 shadow-md rounded-lg">
                  <p className="text-gray-800 font-medium">Order ID: {order.id}</p>
                  <p className="text-gray-600">Status: {order.status}</p>
                  <p className="text-gray-600">Total: GHS {order.total}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">You have no recent orders.</p>
          )}
        </div>

        {/* Other Dashboard Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Profile Settings</h3>
            <p className="text-gray-600">Update your profile information here.</p>
          </div>
          <div className="bg-white p-4 shadow-md rounded-lg">
            <h3 className="text-xl font-semibold mb-2">Reservations</h3>
            <p className="text-gray-600">Manage your restaurant reservations.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

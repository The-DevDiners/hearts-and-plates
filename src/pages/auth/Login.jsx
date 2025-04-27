import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AuthForm() {
  const navigate = useNavigate();

  const [tab, setTab] = useState('login');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    fullName: '',
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    role: '',
  });
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('https://jam-hearts-plates-h-and-p-restaurant.onrender.com/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Login failed');
        return;
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));

      const checkoutRedirect = sessionStorage.getItem('checkoutRedirect');
      if (checkoutRedirect) {
        sessionStorage.removeItem('checkoutRedirect');
        navigate('/dashboard');
      } else {
        navigate('/dashboard');
      }

      alert('Login successful!');
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred. Please try again.');
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    if (!signupData.fullName) {
      alert('Full Name is required!');
      return;
    }

    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(signupData.fullName)) {
      alert('Full Name must only contain letters and spaces.');
      return;
    }

    try {
      const res = await axios.post('https://jam-hearts-plates-h-and-p-restaurant.onrender.com/users/signup', {
        fullName: signupData.fullName,
        userName: signupData.userName,
        email: signupData.email,
        password: signupData.password,
        confirmPassword: signupData.confirmPassword,
        phone: signupData.phone,
        role: signupData.role,
      });

      const data = res.data;
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      alert('Signup successful!');
      navigate('/dashboard');

    } catch (error) {
      console.error('Signup error:', error);
      const message = error.response?.data?.details?.[0]?.message || 'Signup failed.';
      alert(message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-black p-4 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="bg-[#1c1c1c]/90 shadow-2xl rounded-2xl w-full max-w-md p-8 border border-[#444] text-white backdrop-blur-sm">
        <div className="flex justify-between mb-6">
          <button
            className={`text-lg font-semibold ${tab === 'login' ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => setTab('login')}
          >
            Login
          </button>
          <button
            className={`text-lg font-semibold ${tab === 'signup' ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => setTab('signup')}
          >
            Signup
          </button>
        </div>

        <form className="space-y-4" onSubmit={tab === 'login' ? handleLogin : handleSignup}>
          {error && <div className="text-red-500">{error}</div>}

          {tab === 'login' && (
            <div>
              <input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-500 font-semibold"
              >
                Login
              </button>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-yellow-400">Forgot Password?</a>
              </div>
            </div>
          )}

          {tab === 'signup' && (
            <div>
              <input
                type="text"
                placeholder="Full Name"
                value={signupData.fullName}
                onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="text"
                placeholder="Username"
                value={signupData.userName}
                onChange={(e) => setSignupData({ ...signupData, userName: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                value={signupData.email}
                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                value={signupData.password}
                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                value={signupData.confirmPassword}
                onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="text"
                placeholder="Phone Number"
                value={signupData.phone}
                onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <select
                value={signupData.role}
                onChange={(e) => setSignupData({ ...signupData, role: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 text-white mb-4"
              >
                <option value="">Select Role</option>
                <option value="user">User</option>
                <option value="manager">Manager</option>
                <option value="chef">Chef</option>
                <option value="finance">Finance</option>
                <option value="waitstaff">Waitstaff</option>
                <option value="ceo">CEO</option>
                <option value="admin">Admin</option>
              </select>
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-500 font-semibold"
              >
                Signup
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

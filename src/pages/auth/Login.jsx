import React, { useState } from 'react';

export default function AuthForm() {
  const [tab, setTab] = useState('login'); // State to track which form is active

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
            onClick={() => setTab('login')} // Set tab to 'login'
          >
            Login
          </button>
          <button
            className={`text-lg font-semibold ${tab === 'signup' ? 'text-yellow-400' : 'text-gray-400'}`}
            onClick={() => setTab('signup')} // Set tab to 'signup'
          >
            Signup
          </button>
        </div>

        <form className="space-y-4">
          {/* Login Form */}
          {tab === 'login' && (
            <div className="login-form">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <button
                type="submit"
                className="w-full bg-yellow-400 text-black p-3 rounded-lg hover:bg-yellow-500 font-semibold"
              >
                Login
              </button>
            </div>
          )}

          {/* Signup Form */}
          {tab === 'signup' && (
            <div className="signup-form">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 placeholder-gray-400 text-white mb-4"
              />
              <select
                className="w-full p-3 rounded-lg bg-[#2b2b2b] border border-gray-600 text-white mb-4"
              >
                <option value="">Select Role</option>
                <optgroup label="General Users">
                  <option>Customer</option>
                  <option>Rider</option>
                </optgroup>
                <optgroup label="Management">
                  <option>Manager</option>
                  <option>Chef</option>
                  <option>Finance</option>
                </optgroup>
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

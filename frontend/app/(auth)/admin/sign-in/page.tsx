"use client";

import React from "react";

const SignInPage = () => {
  return (
    // ✅ Pastikan full screen dengan min-h-screen dan background hijau
    <div className="w-screen h-screen bg-green-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold text-green-800">
            Kebun Jubung System
          </h1>
          <h2 className="text-xl font-semibold text-gray-700 mt-2">
            Admin Login
          </h2>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-green-800">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-800">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-green-800">Special Code</label>
            <input
              type="text"
              placeholder="Special Code"
              className="w-full px-4 py-2 border border-green-500 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;

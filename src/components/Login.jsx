import React, { useState } from "react";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...");
  };

  return (
    <div className="absolute right-0 mt-96 bg-white shadow-lg rounded-md p-4 w-80 z-10">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Login to Your Account
      </h3>
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">
            Password
          </label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-36 bg-green-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Login
        </button>
        <p className="text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;

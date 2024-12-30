import React, { useState, useEffect } from "react";

const Login = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in...");
    // Add your login logic here (API call, etc.)
    setIsDropdownOpen(false); // Close the dropdown after login attempt
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest(".dropdown") === null) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative dropdown">
      {/* Login Button */}
      <button
        onClick={toggleDropdown}
        className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 focus:outline-none"
      >
        Login
      </button>

      {/* Dropdown Form */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md p-4 w-80 z-10">
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              Login
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;

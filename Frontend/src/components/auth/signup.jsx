import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className=" flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-500 hover:text-pink-500">
          Sign up
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mt-3 flex">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
          </div>
          <div>
            <input
              type="text"
              id="name"
              placeholder="Enter your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.name}</p>}
          </div>

          <div className="mt-3 flex">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
          </div>
          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.email}</p>}
          </div>

          <div className="mt-3 flex">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Create a Password
            </label>
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Enter a Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.password}</p>}
          </div>

          <div className="mt-3 flex">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Re-Enter Password
            </label>
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Re-Enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.confirmPassword}</p>}
          </div>

          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 mb-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300 border-none focus:outline-none"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:text-pink-700 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

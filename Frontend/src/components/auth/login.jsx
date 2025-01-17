import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      console.log("Form submitted", formData);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-500 hover:text-pink-500">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 flex ">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 "
            >
              Email
            </label>
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className=" w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.email}</p>}

          <div className="mb-2 flex mt-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
          {errors.password && <p className="text-red-500 text-sm mt-1 flex justify-start">{errors.password}</p>}

          <div className="flex justify-end mb-4">
            <a href="#" className="text-blue-500 hover:text-pink-700 hover:underline">
              Forgot password?
            </a>
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">
              Remember Me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300 focus:outline-none"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:text-pink-700 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

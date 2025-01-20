import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePicture: null,
  });

  const [preview, setPreview] = useState(null); // For previewing the profile picture
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === "profilePicture") {
      const file = files[0];
      setFormData((prev) => ({
        ...prev,
        [id]: file,
      }));
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleRemovePicture = () => {
    setFormData((prev) => ({
      ...prev,
      profilePicture: null,
    }));
    setPreview(null);
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

    if (!formData.profilePicture) {
      newErrors.profilePicture = "Profile picture is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with form submission (e.g., API call)
      const formDataToSubmit = new FormData();
      formDataToSubmit.append("name", formData.name);
      formDataToSubmit.append("email", formData.email);
      formDataToSubmit.append("password", formData.password);
      formDataToSubmit.append("profilePicture", formData.profilePicture);

      console.log("Form submitted", formDataToSubmit);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-blue-500 hover:text-pink-500">
          Sign up
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
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
            {errors.name && (
              <p className="text-red-500 text-sm mt-1 flex justify-start">
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
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
            {errors.email && (
              <p className="text-red-500 text-sm mt-1 flex justify-start">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
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
            {errors.password && (
              <p className="text-red-500 text-sm mt-1 flex justify-start">
                {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mt-3 flex">
            <label
              htmlFor="confirmPassword"
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
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1 flex justify-start">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Profile Picture Upload */}
          <div className="mt-3">
            <label
              htmlFor="profilePicture"
              className="block text-sm font-medium text-gray-700"
            >
              Upload Profile Picture
            </label>
            <div className="flex justify-center items-center mt-2">
              {preview ? (
                <div>
                  <div className="h-24 w-24 rounded-full overflow-hidden border-2 border-blue-500 mb-2">
                    <img
                      src={preview}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={handleRemovePicture}
                    className="text-sm text-blue-500 hover:text-pink-700"
                  >
                    Change Picture
                  </button>
                </div>
              ) : (
                <input
                  type="file"
                  id="profilePicture"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full mt-3 px-3 py-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              )}
            </div>
            {errors.profilePicture && (
              <p className="text-red-500 text-sm mt-1 flex justify-start">
                {errors.profilePicture}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-pink-700 transition duration-300 border-none focus:outline-none mt-4"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:text-pink-700 hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;

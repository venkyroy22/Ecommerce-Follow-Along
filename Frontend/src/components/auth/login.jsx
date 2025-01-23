import { React, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  // State to hold email and password values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For handling error messages

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submit behavior
    try {
      // Make the POST request to the backend (replace with your actual API endpoint)
      const response = await axios.post("http://localhost:8000/api/v2/user/login", { email, password });
      
      // Assuming response contains a token or user data on successful login
      console.log(response.data);
      // Redirect or take some action upon successful login here
    } catch (error) {
      // Handle errors (e.g., invalid credentials)
      setError("There was an error logging in. Please check your credentials.");
      console.error("There was an error logging in!", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="hover:text-pink-500 mt-6 text-center text-3xl font-extrabold text-blue-500">
          Login
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
                <div>
                    <label htmlFor="email" className="flex items-start block text-sm font-medium text-gray-700">Email address</label>
                    <div className="mt-1">
                        <input type="email" name="email" placeholder="Enter email" autoComplete="email" required value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="flex items-start block text-sm font-medium text-gray-700">Password</label>
                    <div className="mt-1">
                        <input type="password" name="password" placeholder="password" autoComplete="password" required value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember-me" id="remember-me"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"/>
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                    </div>
                    <div className="text-sm">
                        <a href=".forgot-password" className="font-medium text-blue-600 hover:text-pink-500 hover:underline">Forgotten Password?</a>
                    </div>
                </div>
                <div>
                    {/* onClick for Submit Button */}
                    <button type="button" onClick={handleSubmit} className="relative w-full h-10 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-pink-700" >
                        Login
                    </button>
                </div>
                {error && <p className="text-center text-red-900">{error}</p>} {/* Display error message if there is one */}
                <p className="text-center text-red-900">Don't have an account? <Link to={'/signup'} className="hover:text-pink-500 hover:underline text-blue-600">Sign up</Link></p>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
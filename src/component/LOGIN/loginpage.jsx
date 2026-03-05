import React from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import Logo from "../../assets/logo.svg";
import bgimage from "../../assets/water-mark.jpg";
import { FaGoogle, FaFacebookF, FaYahoo } from "react-icons/fa";

export default function Login({ setIsSignup }) {
  return (
    <>
      {/* Desktop & Tablet (md & lg) */}
      <div className="hidden md:flex w-full flex-row bg-gradient-to-b from-white to-teal-800 ">
        {/* Left Visual Section */}
        <div className="flex-1 hidden md:flex bg-white rounded-l-3xl relative flex-col justify-center items-center px-8 pt-16 pb-16">
          <img
            src={bgimage}
            alt="water_mark"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          {/* <div className="flex items-center space-x-3 mb-16 z-10">
            <img src={Logo} alt="Logo" className="w-15 h-15 lg:-mt-40 lg:-ml-35" />
            <span className="text-gray-700 text-2xl font-semibold lg:-mt-40 ">AATMAYANTRA</span>
          </div> */}

<div className="flex items-center space-x-2 mb-16 z-10 -ml-75 md:-ml-20 lg:mr-45">
          <img src={Logo} alt="Logo" className="w-15 h-15 -mt-37 "  />
          <span className="text-gray-700 text-2xl font-semibold -mt-37">AATMAYANTRA</span>
        </div>

          <h1 className="text-5xl font-serif mb-6 text-center max-w-xs z-10">
            Welcome <span className="text-teal-600 italic">Back!</span>
          </h1>
          <p className="text-gray-600 mb-8 max-w-xs text-center z-10">
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={() => setIsSignup(true)}
            className="px-16 py-3 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 rounded-md text-white font-medium transition-colors z-10"
          >
            Sign Up
          </button>
        </div>

        {/* Right Form Section */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <div className="bg-white rounded-xl p-8 sm:p-10 w-full max-w-md drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
            <form className="space-y-5">
              {/* Name */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Name
                </label>
                <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Password */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Password
                </label>
                <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Forgot password */}
              <div className="text-right mb-6">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forget Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
              >
                Login
              </button>
            </form>

            {/* Social logins */}
            <div className="flex items-center mb-4 mt-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="text-center text-gray-500 mx-4 text-sm">Or sign in with</p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            <div className="flex justify-center space-x-3 mt-2 text-gray-600">
              <button aria-label="Login with Google" className="hover:text-blue-700 text-2xl">
                <FaGoogle />
              </button>
              <button aria-label="Login with Facebook" className="hover:text-blue-900 text-2xl">
                <FaFacebookF />
              </button>
              <button aria-label="Login with Yahoo" className="hover:text-purple-700 text-2xl">
                <FaYahoo />
              </button>
            </div>

            <div className="mt-6 text-center text-sm lg:hidden">
              Don’t have an account?{" "}
              <button
                onClick={() => setIsSignup(true)}
                className="text-teal-600 font-medium hover:underline"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile (sm) layout */}
      <div className="flex flex-col md:hidden w-full bg-white">
        {/* Mobile Top Gradient */}
        <div className="bg-gradient-to-b from-[rgba(29,116,100,1)] to-[rgba(55,218,188,1)] text-white text-center py-8 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Welcome Back!</h1>
          <p className="text-sm mt-1">Login to continue</p>
          <button
            onClick={() => setIsSignup(true)}
            className="mt-3 border border-white px-6 py-1 rounded-full text-sm hover:bg-white hover:text-teal-600 transition-colors"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
         

         <form className="space-y-5">
              {/* Name */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Name
                </label>
                <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Password */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Password
                </label>
                <RiLockPasswordLine className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-700"
                />
              </div>

              {/* Forgot password */}
              <div className="text-right mb-6">
                <a href="#" className="text-blue-500 text-sm hover:underline">
                  Forget Password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] hover:bg-teal-800 transition-colors text-white py-2 rounded-md font-semibold"
              >
                Login
              </button>
            </form>

          {/* <p className="text-center mt-3 text-sm text-gray-600">Or sign in with</p> */}

<div className="flex items-center mb-4 mt-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="text-center text-gray-500 mx-4 text-sm">Or sign in with</p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>


          {/* Social Icons */}
          <div className="flex justify-center space-x-3 mt-2 text-gray-600">
            <FaGoogle className="hover:text-blue-500 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-900 cursor-pointer" />
            <FaYahoo className="hover:text-purple-700 cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
}

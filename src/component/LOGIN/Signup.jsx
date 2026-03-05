import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";

import Logo from "../../assets/logo.svg";
import bgimage from "../../assets/water-mark.jpg";
import { FaGoogle, FaFacebookF, FaYahoo } from "react-icons/fa";

import OtpModal from "./OTPModal";

export default function Signup({ setIsSignup }) {
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [signupData, setSignupData] = useState(null);   // ★ NEW (stores form data)

  const [openOTP, setOpenOTP] = useState(false);
  const [loading, setLoading] = useState(false);

const [signupToken, setSignupToken] = useState(null);
const [signupRefToken, setSignupRefToken] = useState(null);


  const navigate = useNavigate();

  const validateForm = () => {
    if (!userType) return "Please select user type";
    if (!email || !email.includes("@")) return "Enter valid email";
    if (!contact || contact.length !== 10) return "Phone number must be 10 digits";
    if (!name || name.length < 3) return "Name must be at least 3 characters";
    if (!password || password.length < 6) return "Password must be at least 6 characters";
    return null;
  };

  // ================== SIGNUP SUBMIT ==================
  const handleSubmit = async (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) return alert(error);

    try {
      setLoading(true);

      // ★ Save form data for resend OTP
      const dataToSend = {
        user_type: userType,
        email: email,
        phone_number: contact,
        username: name,
        password: password,
      };

      setSignupData(dataToSend);

      const formData = new FormData();
      Object.entries(dataToSend).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await axios.post(
        "https://atmayantra-10.onrender.com/api/auth/signup/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Signup success:", res.data);

      setOpenOTP(true); // open otp modal
    } catch (error) {
      console.log(error.response?.data);
      alert(
        error.response?.data?.error ||
        error.response?.data?.message ||
        "Signup failed!"
      );
    } finally {
      setLoading(false);
    }
  };

  // ========== RESEND OTP (uses SAME SAVED DATA) ==========
  const handleResendOtp = async () => {
    if (!signupData) {
      alert("Signup data missing!");
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(signupData).forEach(([key, value]) =>
        formData.append(key, value)
      );

      const res = await axios.post(
        "https://atmayantra-10.onrender.com/api/auth/signup/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Resend OTP success:", res.data);
      return res;
    } catch (error) {
      console.log("Resend OTP error:", error.response?.data);
      throw error;
    }
  };

  // ===================== OTP VERIFIED =====================
  const handleVerifyOtp = () => {
    setOpenOTP(false);

    if (userType === "Yoga Trainer" || userType === "Trainer") {
      navigate("/trainer-form");
    } else if (userType === "Yoga doctor (Psychiatrists)") {
      navigate("/doctor-form");
    } else if (userType === "Physiotherapist") {
      navigate("/physio-form");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      {/* OTP MODAL */}
      <OtpModal
  open={openOTP}
  onClose={() => setOpenOTP(false)}
  phone_number={contact}
  userType={userType}
  signupData={{ user_type: userType, email, phone_number: contact, username: name, password }}
  setSignupToken={setSignupToken}        // <-- pass the setter
  setSignupRefToken={setSignupRefToken}  // <-- pass the setter
/>




      {/* ========================== DESKTOP ========================== */}
      <div className="hidden md:flex w-full flex-row bg-gradient-to-b from-white to-teal-800">
        {/* LEFT FORM */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 sm:p-10">
          <div className="bg-white rounded-xl p-8 sm:p-10 w-full max-w-md drop-shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Create Account
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/* User Type */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  User Type
                </label>
                <select
                  className="w-full border border-gray-300 rounded-md p-2 pt-4"
                  defaultValue=""
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="" disabled>
                    – Select User Type –
                  </option>
                  <option value="User">User</option>
                  <option value="Yoga Trainer">Trainer</option>
                  <option value="Yoga doctor (Psychiatrists)">
                    Yoga doctor (Psychiatrists)
                  </option>
                  <option value="Physiotherapist">Physiotherapist</option>
                </select>
              </div>

              {/* Email */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Email
                </label>
                <MdEmail className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="email"
                  placeholder="abc123@gmail.com"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Contact */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  Contact Number
                </label>
                <FaPhoneAlt className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  maxLength={10}
                />
              </div>

              {/* Name */}
              <div className="relative mt-4">
                <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                  User Name
                </label>
                <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-md p-2 pt-4"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  className="w-full border border-gray-300 rounded-md p-2 pt-4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] text-white py-2 rounded-md font-semibold"
              >
                {loading ? "Signing up..." : "Sign up"}
              </button>
            </form>

            {/* OR divider */}
            <div className="flex items-center mb-4 mt-5">
              <div className="flex-grow border-t border-gray-300"></div>
              <p className="text-center text-gray-500 mx-4 text-sm">
                Or sign in with
              </p>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social icons */}
            <div className="flex justify-center space-x-3 mt-2 text-gray-600">
              <button className="text-2xl">
                <FaGoogle />
              </button>
              <button className="text-2xl">
                <FaFacebookF />
              </button>
              <button className="text-2xl">
                <FaYahoo />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT GRAPHIC */}
        <div className="flex-1 hidden md:flex bg-white rounded-l-3xl relative flex-col justify-center items-center px-8 pt-16 pb-16">
          <img
            src={bgimage}
            alt="water_mark"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />

          <div className="flex items-center space-x-2 mb-16 z-10 md:-ml-20 lg:mr-45">
            <img src={Logo} alt="Logo" className="w-15 h-15 -mt-45" />
            <span className="text-gray-700 text-2xl font-semibold -mt-45">
              AATMAYANTRA
            </span>
          </div>

          <h1 className="text-5xl font-serif mb-6 text-center max-w-xs z-10">
            Hello <span className="text-teal-600 italic">Youth!</span>
          </h1>

          <p className="text-gray-600 mb-8 max-w-xs text-center z-10">
            Enter your personal details and start journey with us
          </p>

          <button
            onClick={() => setIsSignup(false)}
            className="px-16 py-3 bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] rounded-md text-white font-medium transition-colors z-10"
          >
            Login
          </button>
        </div>
      </div>

      {/* ====================== MOBILE VERSION ====================== */}
      <div className="flex flex-col md:hidden w-full bg-white">
        <div className="bg-gradient-to-b from-[rgba(29,116,100,1)] to-[rgba(55,218,188,1)] text-white text-center py-8 rounded-b-3xl">
          <h1 className="text-2xl font-bold">Hello Welcome!</h1>
          <button
            onClick={() => setIsSignup(false)}
            className="mt-3 border border-white px-6 py-1 rounded-full text-sm"
          >
            Login
          </button>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Create Account
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* SAME MOBILE FORM AS DESKTOP */}
            {/* User Type */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                User Type
              </label>
              <select
                className="w-full border border-gray-300 rounded-md p-2 pt-4"
                defaultValue=""
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="" disabled>
                  – Select User Type –
                </option>
                <option value="User">User</option>
                <option value="Yoga Trainer">Trainer</option>
                <option value="Yoga doctor (Psychiatrists)">
                  Yoga doctor (Psychiatrists)
                </option>
                <option value="Physiotherapist">Physiotherapist</option>
              </select>
            </div>

            {/* Email */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                Email
              </label>
              <MdEmail className="absolute top-3 right-3 text-gray-500 text-lg" />
              <input
                type="email"
                placeholder="abc123@gmail.com"
                className="w-full border border-gray-300 rounded-md p-2 pt-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Contact */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                Contact Number
              </label>
              <FaPhoneAlt className="absolute top-3 right-3 text-gray-500 text-lg" />
              <input
                type="tel"
                placeholder="9876543210"
                className="w-full border border-gray-300 rounded-md p-2 pt-4"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                maxLength={10}
              />
            </div>

            {/* Name */}
            <div className="relative mt-4">
              <label className="absolute -top-2 left-2 bg-white px-1 text-sm text-teal-700">
                User Name
              </label>
              <FaUser className="absolute top-3 right-3 text-gray-500 text-lg" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-2 pt-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                className="w-full border border-gray-300 rounded-md p-2 pt-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[linear-gradient(to_right,rgba(29,116,100,1),rgba(40,160,140,1),rgba(55,218,188,1))] text-white py-2 rounded-md font-semibold"
            >
              {loading ? "Signing up..." : "Sign up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

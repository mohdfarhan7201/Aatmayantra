import React from "react";
import yoga_pose from "../../assets/dashboard1.svg";
import profileImg from "../../assets/profile.svg"; // ← your round image
import { useTheme } from "../../context/ThemeContext";

export default function WelcomeBox() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`
        w-full flex items-center justify-between rounded-xl px-8 py-6 mb-8 
        transition-all duration-300 
        ${darkMode ? "bg-[#1f1f1f] text-white" : "bg-white text-black shadow-md"}
      `}
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-5">
        {/* Profile Image */}
        <img
          src={profileImg}
          alt="Profile"
          className="w-20 h-20 rounded-full  object-cover"
        />

        {/* Text */}
        <div>
          <h2
            className={`text-2xl font-semibold ${
              darkMode ? "text-white" : "text-green-700"
            }`}
          >
            Welcome Back Sara!
          </h2>

          <p className={`mt-1 text-sm leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
            <span className="font-semibold">Upcoming Class:</span> Hast Yoga <br />
            Tomorrow 7 AM
          </p>
        </div>
      </div>

      {/* RIGHT YOGA IMAGE */}
      <img
        src={yoga_pose}
        alt="Yoga Illustration"
        className="w-64 h-40"
      />
    </div>
  );
}

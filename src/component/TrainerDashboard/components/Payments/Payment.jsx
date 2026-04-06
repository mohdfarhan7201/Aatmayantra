import React from 'react'
import Header from "./Header";
import StatusCard from "./StatusCard";
import EarningChart from "./EarningChart";
import TransectionRecord from "./Transection/TransactionRecord"
import Profile from "../Profile";
import { Routes, Route, useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Instructor() {
  const { darkMode } = useTheme();
  const location = useLocation();

  const isProfilePage = location.pathname.includes("profile");

  return (
    <div className={`p-6 min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
    }`}>
      
      {!isProfilePage && (
        <>
          <Header />
          <StatusCard />
          <EarningChart />
          <TransectionRecord />
        </>
      )}

      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default Instructor

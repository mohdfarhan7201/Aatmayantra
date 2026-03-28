
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DashboardCards from "./cards";
import MenberSummary from "../Dashboard1/MemberSummary/MemberSummary";
import Profile from '../Profile';

import { useLocation } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

export default function Members() {
  const { darkMode } = useTheme();

const location = useLocation();

return (
    <div
    className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
    }`}
    >
      {/* HEADER */}
      {/* <Header /> */}
        {location.pathname !== "triner/members/profile" && <Header />}
       <DashboardCards />  
       <MenberSummary/> 
       <Routes>
        <Route path="/trainer/members/profile" element={<Profile/>}></Route>
        </Routes>  
    </div>
  );
}
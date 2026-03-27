
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import DashboardCards from "./cards";
import MenberSummary from "../Dashboard1/MemberSummary/MemberSummary";

import { useTheme } from "../../context/ThemeContext";

export default function Members() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`p-6 min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {/* HEADER */}
      <Header />
       <DashboardCards />  
       <MenberSummary/>   
    </div>
  );
}
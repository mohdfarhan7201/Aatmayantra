import React from "react";
import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard1/Dashboard";
import Profile from "./components/Profile";
import Sessions from "./components/Sessions/Session";
import Shedule from "./components/Shedule/shedule";
import Attendance from "./components/Attendance/attendance";
import Members from "./components/Members/member";
import Chat from "./components/Chats/chat";
import Reports from "./components/Reports/Report";
import Setting from "./components/Settings/Setting";
import Payment from "./components/Payments/Payment";
import Logout from "./components/LOGIN/LogoutConfirm";

import { ThemeProvider, useTheme } from "./context/ThemeContext";

function Layout() {
  const { darkMode } = useTheme();

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "dark bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      <Sidebar />

      <main className="flex-1 overflow-auto ml-64">
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          {/* <Route path="session/*" element={<Sessions />} />
          <Route path="shedule/*" element={<Shedule/>} /> */}
          <Route path="attendance/*" element={<Attendance/>} />
          {/* <Route path="members/*" element={<Members/>} />
          <Route path="chat/*" element={<Chat/>} />
          <Route path="report/*" element={<Reports/>} />
          <Route path="payment/*" element={<Payment/>} /> */}
          <Route path="setting/*" element={<Setting />} />
          <Route path="logout" element={<Logout />} />

        </Routes>
      </main>
    </div>
  );
}

export default function TrainerApp() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
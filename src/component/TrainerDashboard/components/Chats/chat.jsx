import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import Profile from "../Profile";

import { useTheme } from "../../context/ThemeContext";
import { usersData } from "./usersData";

export default function Members() {
  const { darkMode } = useTheme();
  const location = useLocation();

  const [users, setUsers] = useState(usersData);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {location.pathname !== "/trainer/chat/profile" && <Header />}

      <div className="flex">
        {location.pathname !== "/trainer/chat/profile" && (
          <Sidebar
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
        )}

        {location.pathname !== "/trainer/chat/profile" && selectedUser && (
          <ChatWindow
            user={selectedUser}
            setUsers={setUsers}
            onBack={() => setSelectedUserId(null)}
          />
        )}
      </div>

      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
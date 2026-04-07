

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const baseTabClass = "pb-2 transition-colors duration-200";

  const activeTabClass =
    "text-green-700 border-b-4 border-green-700";

  const inactiveTabClass =
    "text-gray-600 hover:text-green-600";

  return (
    <div className="flex gap-10 items-center text-lg font-semibold px-6 py-4 bg-white">
      
      {/* Upcoming */}
      <NavLink
        to="/trainer/session"
        end   // ⭐⭐ IMPORTANT FIX
        className={({ isActive }) =>
          `${baseTabClass} ${
            isActive ? activeTabClass : inactiveTabClass
          }`
        }
      >
        Upcoming Sessions
      </NavLink>

      {/* Uploaded */}
      <NavLink
        to="/trainer/session/uploaded"
        className={({ isActive }) =>
          `${baseTabClass} ${
            isActive ? activeTabClass : inactiveTabClass
          }`
        }
      >
        Uploaded Sessions
      </NavLink>

      {/* Add New Session */}
      <button
        onClick={() => navigate("/trainer/session/add")}
        className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        + Add New Session
      </button>
    </div>
  );
}

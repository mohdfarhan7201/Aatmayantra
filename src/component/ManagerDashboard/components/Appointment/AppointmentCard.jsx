import React from "react";

export default function AppointmentCard() {
  return (
    <div className="bg-gray-50 rounded-xl p-4 border border-gray-300 shadow-sm w-full">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://randomuser.me/api/portraits/women/68.jpg"
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="text-sm text-gray-500">Booked by</p>
          <h2 className="text-sm font-semibold text-gray-700">
            Nandita Pandey
          </h2>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-1">
        <span className="font-semibold">Time:</span> 09:00 - 10:30 AM
      </p>

      <p className="text-sm text-gray-600 mb-3">
        <span className="font-semibold">Mode:</span>{" "}
        <span className="text-green-500 font-medium">Online</span>
      </p>

      <div className="flex gap-2">
        <button className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-md">
          Re-schedule
        </button>
        <button className="text-xs px-3 py-1 bg-red-100 text-red-500 rounded-md">
          Cancel
        </button>
        <button className="text-xs px-3 py-1 bg-cyan-100 text-cyan-600 rounded-md">
          Details
        </button>
      </div>
    </div>
  );
}
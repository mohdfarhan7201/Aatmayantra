import React from "react";
import { CalendarPlus } from "lucide-react";

export default function Header({ onOpen }) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold text-gray-700">
        Appointments
      </h1>

      <button
        onClick={onOpen}
        className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-lg shadow"
      >
        <CalendarPlus size={18} />
        Create Appointment
      </button>
    </div>
  );
}
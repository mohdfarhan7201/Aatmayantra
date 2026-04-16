import React from "react";
import { UserPlus, CalendarPlus } from "lucide-react";

export default function ActionCards({ onAddInstructor, onCreateSession }) {
  return (
    <div className="grid grid-cols-2 gap-4 w-full px-5">
      
      {/* Add Instructors */}
      <div
        onClick={onAddInstructor}
        className="flex items-center justify-center gap-3 w-full px-6 py-3 rounded-xl cursor-pointer 
        bg-gradient-to-r from-teal-400 to-green-500 text-white shadow-md 
        hover:scale-105 transition-all duration-200"
      >
        <div className="bg-white/20 p-2 rounded-lg">
          <UserPlus size={22} />
        </div>
        <span className="font-medium text-lg">Add Instructors</span>
      </div>

      {/* Create Appointment/Session */}
      <div
        onClick={onCreateSession}
        className="flex items-center justify-center gap-3 w-full px-6 py-3 rounded-xl cursor-pointer 
        bg-gradient-to-r from-orange-400 to-red-500 text-white shadow-md 
        hover:scale-105 transition-all duration-200"
      >
        <div className="bg-white/20 p-2 rounded-lg">
          <CalendarPlus size={22} />
        </div>
        <span className="font-medium text-lg">
          Create Appointment/Session
        </span>
      </div>

    </div>
  );
}
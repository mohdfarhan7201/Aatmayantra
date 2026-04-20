import React from "react";
import AppointmentCard from "./AppointmentCard";

export default function AppointmentList() {
  const data = new Array(8).fill(0);

  return (
    <div className="h-[350px] overflow-y-auto pr-2">
      <div className="grid grid-cols-3 gap-4">
        {data.map((_, index) => (
          <AppointmentCard key={index} />
        ))}
      </div>
    </div>
  );
}
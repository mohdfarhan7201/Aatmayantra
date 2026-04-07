import React from "react";
import SessionCard from "./SessionCard";


const sessions = new Array(12).fill({
title: "Morning Yoga For Beginners",
date: "20 Aug 2025 7:00 AM",
thumbnail: "https://i.ibb.co/VW0y3QF/yoga1.jpg",
});


export default function GridView() {
return (
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 h-[70vh] overflow-y-scroll">
{sessions.map((s, index) => (
<SessionCard key={index} session={s} />
))}
</div>
);
}
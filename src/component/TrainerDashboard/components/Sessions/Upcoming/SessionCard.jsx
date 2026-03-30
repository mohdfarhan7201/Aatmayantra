import React from "react";
export default function SessionCard({ session }) {
return (
<div className="bg-white rounded-xl shadow p-4 relative">
<span className="absolute top-3 right-3 bg-green-100 text-green-700 px-3 py-1 rounded text-sm">Upcoming</span>


<img src={session.thumbnail} className="w-full h-40 object-cover rounded-lg" />


<h2 className="font-semibold mt-3">{session.title}</h2>
<p className="text-sm text-gray-500">{session.date}</p>


<button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded w-full">
Start Session
</button>
</div>
);
}
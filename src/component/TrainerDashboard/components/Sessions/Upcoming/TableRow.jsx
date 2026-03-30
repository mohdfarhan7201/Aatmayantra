import React from "react";
export default function TableRow({ row }) {
return (
<tr className="border-b">
<td className="p-3 flex items-center gap-3">
<img src={row.thumb} className="w-14 h-14 rounded object-cover" />
{row.title}
</td>


<td className="p-3">{row.date}</td>
<td className="p-3">{row.duration}</td>


<td className="p-3">
<span className="px-3 py-1 bg-green-100 text-green-700 rounded text-sm">Upcoming</span>
</td>


<td className="p-3">
<button className="bg-purple-600 text-white px-3 py-1 rounded">Start Session</button>
</td>
</tr>
);
}
import React, { useState } from "react";
import TableRow from "./TableRow";
import { PiGreaterThan , PiLessThan } from "react-icons/pi";

const data = [
{ title: "Morning Yoga For Beginners", date: "20 Aug 7:00 AM", duration: "30 m", thumb: "https://i.ibb.co/VW0y3QF/yoga1.jpg" },
{ title: "Hatha Yoga Flow", date: "20 Aug 7:00 AM", duration: "30 m", thumb: "https://i.ibb.co/pWt8cDy/yoga2.jpg" },
{ title: "Gentle Yoga And Meditation", date: "20 Aug 7:00 AM", duration: "30 m", thumb: "https://i.ibb.co/dfJtJHQ/yoga3.jpg" },
// repeat
...new Array(15).fill({ title: "Morning Yoga", date: "20 Aug 7:00 AM", duration: "30 m", thumb: "https://i.ibb.co/VW0y3QF/yoga1.jpg" })
];


export default function TableView() {
const rowsPerPage = 5;
const [page, setPage] = useState(1);


const totalPages = Math.ceil(data.length / rowsPerPage);


const current = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);


const generatePages = () => {
let start = Math.max(1, page - 1);
let end = Math.min(totalPages, start + 2);


let pages = [];
for (let i = start; i <= end; i++) pages.push(i);
return pages;
};


return (
<div className="p-6">
<table className="w-full bg-white rounded-xl shadow overflow-hidden">
<thead className="bg-gray-200 text-left">
<tr>
<th className="p-3">Session Title</th>
<th className="p-3">Date</th>
<th className="p-3">Duration</th>
<th className="p-3">Status</th>
<th className="p-3">Actions</th>
</tr>
</thead>


<tbody>
{current.map((item, index) => (
<TableRow key={index} row={item} />
))}
</tbody>
</table>


<div className="mt-4 flex items-center justify-end gap-2">
<button
disabled={page === 1}
onClick={() => setPage(page - 1)}
className="px-3 py-1 bg-gray-300 rounded-full disabled:opacity-50"
>
<PiLessThan/>
</button>


{generatePages().map((p) => (
<button
key={p}
onClick={() => setPage(p)}
className={`px-3 py-1 rounded-full ${p === page ? "bg-black text-white" : "bg-gray-300"}`}
>
{p}
</button>
))}


<button
disabled={page === totalPages}
onClick={() => setPage(page + 1)}
className="px-3 py-1 bg-gray-300 rounded-full disabled:opacity-50"
>
<PiGreaterThan/>
</button>
</div>
</div>
);
}
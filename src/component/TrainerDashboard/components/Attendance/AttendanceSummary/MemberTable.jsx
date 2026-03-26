// import React from "react";

// export default function MemberTable({ data }) {
//   const getStatusColor = (status) => {
//     if (status === "Present") return "text-green-600";
//     if (status === "Missed") return "text-red-500";
//     return "text-blue-500";
//   };

//   const handleView = (member) => {
//     alert(`Viewing ${member.name}`);
//   };

//   return (
//     <table className="w-full text-[14px] ">
//       <thead className="text-gray-500 border-b">
//         <tr>
//           <th className="text-left py-2 text-black">Member</th>
//           <th className="text-black">Subscription</th>
//           <th className="text-black">Status</th>
//           <th className="text-black">Progress</th>
//           <th className="text-black">Last Activity</th>
//           <th className="text-black">Rating</th>
//           <th className="text-black">View Details</th>
//         </tr>
//       </thead>

//       <tbody>
//         {data.map((m) => (
//           <tr key={m.id} className="border-b">
            
//             {/* MEMBER */}
//             <td className="py-2 flex items-center gap-2">
//               <div className="w-6 h-6 rounded-full bg-gray-300"></div>
//               {m.name}
//             </td>

//             <td className="text-center">Premium</td>

//             {/* STATUS */}
//             <td className={`text-center font-medium ${getStatusColor(m.status)}`}>
//               {m.status}
//             </td>

//             {/* PROGRESS */}
//             <td className="text-center">
//               <div className="w-[60px] h-[5px] bg-gray-200 rounded-full mx-auto">
//                 <div className="w-[40%] h-full bg-green-600 rounded-full"></div>
//               </div>
//             </td>

//             <td className="text-center">{m.last}</td>

//             {/* RATING */}
//             <td className="text-center text-yellow-400">
//               {"★".repeat(m.rating)}
//             </td>

//             {/* VIEW BUTTON */}
//             <td className="text-center">
//               <button
//                 onClick={() => handleView(m)}
//                 className="bg-blue-600 text-white text-[11px] px-3 py-[2px] rounded-md"
//               >
//                 View
//               </button>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";

export default function MemberTable({ data }) {
  const navigate = useNavigate();

  const getStatusColor = (status) => {
    if (status === "Present") return "text-green-600";
    if (status === "Missed") return "text-red-500";
    return "text-blue-500";
  };

  const handleView = (member) => {
    navigate(`member/${member.id}`, { state: member }); // ✅ navigation
  };

  return (
    <table className="w-full text-[14px] ">
      <thead className="text-gray-500 border-b">
        <tr>
          <th className="text-left py-2 text-black">Member</th>
          <th className="text-black">Subscription</th>
          <th className="text-black">Status</th>
          <th className="text-black">Progress</th>
          <th className="text-black">Last Activity</th>
          <th className="text-black">Rating</th>
          <th className="text-black">View Details</th>
        </tr>
      </thead>

      <tbody>
        {data.map((m) => (
          <tr key={m.id} className="border-b">
            
            <td className="py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-300"></div>
              {m.name}
            </td>

            <td className="text-center">Premium</td>

            <td className={`text-center font-medium ${getStatusColor(m.status)}`}>
              {m.status}
            </td>

            <td className="text-center">
              <div className="w-[60px] h-[5px] bg-gray-200 rounded-full mx-auto">
                <div className="w-[40%] h-full bg-green-600 rounded-full"></div>
              </div>
            </td>

            <td className="text-center">{m.last}</td>

            <td className="text-center text-yellow-400">
              {"★".repeat(m.rating)}
            </td>

            <td className="text-center">
              <button
                onClick={() => handleView(m)}
                className="bg-blue-600 text-white text-[11px] px-3 py-[2px] rounded-md"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
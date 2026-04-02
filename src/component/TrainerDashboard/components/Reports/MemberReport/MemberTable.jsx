// import MemberRow from "./MemberRow";

// export default function MemberTable({ members, onView }) {
//   return (
//     <div className="w-full">
      
//       {/* Header Row */}
//       <div className="grid grid-cols-6 text-sm text-gray-500 px-4 py-2 border-b">
//         <span>Member’s Name</span>
//         <span>Course</span>
//         <span>Sessions</span>
//         <span>Completion</span>
//         <span>Status</span>
//         <span className="text-center">View Details</span>
//       </div>

//       {/* Data */}
//       <div className="space-y-2 mt-2">
//         {members.map((m, i) => (
//           <MemberRow key={i} member={m} onView={onView} />
//         ))}
//       </div>
//     </div>
//   );
// }

import MemberRow from "./MemberRow";

export default function MemberTable({ members, onView }) {
  return (
    <div className="w-full">

      {/* Header Row */}
      <div className="flex items-center text-sm text-gray-500 px-4 py-2 border-b">

        <div className="w-[25%]">Member’s Name</div>
        <div className="w-[15%]">Course</div>
        <div className="w-[10%]">Sessions</div>
        <div className="w-[16%] text-center">Completion</div>
        <div className="w-[17%] text-center">Status</div>
        <div className="w-[15%] text-center">View Details</div>

      </div>

      {/* Data */}
      <div className="space-y-2 mt-2">
        {members.map((m, i) => (
          <MemberRow key={i} member={m} onView={onView} />
        ))}
      </div>

    </div>
  );
}
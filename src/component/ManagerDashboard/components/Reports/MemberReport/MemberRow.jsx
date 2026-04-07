import StatusBadge from "./StatusBadge";
import ProgressCircle from "./ProgressCircle";

export default function MemberRow({ member, onView }) {
  return (
    <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">

      {/* Name */}
      <div className="w-[30%] flex items-center gap-2">
        <img
          src={`https://randomuser.me/api/portraits/men/${member.id || 10}.jpg`}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm">{member.name}</span>
      </div>

      {/* Course */}
      <div className="w-[16%] text-sm text-gray-500 -ml-12">
        {member.course || "course name"}
      </div>

      {/* Sessions */}
      <div className="w-[10%] text-sm">
        {member.session}
      </div>

      {/* Completion */}
      <div className="w-[15%] flex justify-center">
        <ProgressCircle value={member.completion} />
      </div>

      {/* Status */}
      <div className="w-[16%] flex justify-center">
        <StatusBadge status={member.status} />
      </div>

      {/* Button */}
      <div className="w-[16%] flex justify-center">
        <button
          onClick={() => onView(member)} // 🔥 FIX (IMPORTANT)
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1.5 rounded-full"
        >
          View
        </button>
      </div>

    </div>
  );
}
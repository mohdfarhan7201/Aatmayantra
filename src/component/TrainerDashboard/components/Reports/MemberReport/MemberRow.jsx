import StatusBadge from "./StatusBadge";
import ProgressCircle from "./ProgressCircle";

export default function MemberRow({ member, onView }) {
  return (
    <div className="grid grid-cols-6 items-center bg-gray-50 px-4 py-3 rounded-lg border">

      {/* Name */}
      <div className="flex items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/10.jpg"
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm">{member.name}</span>
      </div>

      {/* Course */}
      <div className="text-sm text-gray-500 ml-16">
        course name
      </div>

      {/* Sessions */}
      <div className="text-sm ml-20">
        {member.session}
      </div>

      {/* Completion */}
      <div className="flex justify-center">
        <ProgressCircle value={member.completion} />
      </div>

      {/* Status */}
      <div className="flex justify-center">
        <StatusBadge status={member.status} />
      </div>

      {/* Button */}
      <div className="flex justify-center">
        <button
          onClick={onView}
          className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-4 py-1.5 rounded-full"
        >
          View
        </button>
      </div>
    </div>
  );
}
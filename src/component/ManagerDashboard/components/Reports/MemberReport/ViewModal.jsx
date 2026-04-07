import { FiX, FiMail, FiPhone, FiCalendar, FiStar } from "react-icons/fi";

export default function ViewModal({ onClose, member }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

      {/* MODAL */}
      <div className="bg-white rounded-2xl w-[720px] shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="relative bg-gradient-to-r from-[#E6F7F1] to-[#E6F4F1] px-6 py-5">
            
<h1 className="text-[23px] font-semibold mb-3 text-gray-700">
                Member Report
              </h1>
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm"
          >
            <FiX size={16} />
          </button>

          {/* USER */}
          <div className="flex items-center gap-4">
            <img
              src={`https://randomuser.me/api/portraits/men/${member.id || 10}.jpg`}
              className="w-16 h-16 rounded-full object-cover"
            />

            <div>
              <h2 className="text-[16px] font-semibold text-gray-800 leading-tight">
                {member.name}
              </h2>
              <p className="text-[11px] text-gray-500">
                Member ID: #{1000 + (member.id || 1)}
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-4">

          {/* TOP SECTION */}
          <div className="grid grid-cols-2 gap-4">

            {/* MEMBER INFO */}
            <div className="bg-gray-50 rounded-xl p-4 border">
              <h3 className="text-[13px] font-semibold mb-3 text-gray-700">
                Member Information
              </h3>

              <div className="space-y-2 text-[12px] text-gray-600">
                <div className="flex items-center gap-2">
                  <FiMail size={14} />
                  {member.name.toLowerCase().replace(" ", "")}@email.com
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone size={14} />
                  +91 {9000000000 + (member.id || 1)}
                </div>

                <div className="flex items-center gap-2">
                  <FiCalendar size={14} />
                  Joined Date March 18, 2024
                </div>

                <div className="flex items-center gap-2">
                  <FiStar size={14} />
                  Membership Plan Premium Plan
                </div>
              </div>
            </div>

            {/* COURSE INFO */}
            <div className="bg-gray-50 rounded-xl p-4 border">
              <h3 className="text-[13px] font-semibold mb-3 text-gray-700">
                Course Details
              </h3>

              <div className="grid grid-cols-2 gap-y-3 text-[12px] text-gray-600">

                <div>
                  <p>Total Sessions</p>
                  <p className="font-semibold text-[14px] text-gray-800">
                    13
                  </p>
                </div>

                <div>
                  <p>Complete Session</p>
                  <p className="font-semibold text-[14px] text-gray-800">
                    {member.session}
                  </p>
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                    {member.completion}%
                  </span>
                </div>

                <div>
                  <p>Joined Date</p>
                  <p className="text-[11px]">March 18, 2024</p>
                </div>

                <div>
                  <p>Status</p>
                  <span
                    className={`text-[10px] px-2 py-[2px] rounded-full ${
                      member.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {member.status}
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* COURSE TABLE */}
          <div className="grid grid-cols-2 gap-4">
                  {/* <div/> */}
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="text-[13px] font-semibold mb-3 text-gray-700 ">
              Course Details
            </h3>

            <div className="text-[12px] text-gray-500 flex justify-between mb-2">
              <span>Course Name</span>
              <span>Sessions</span>
              <span>Completed</span>
            </div>

            <div className="flex justify-between items-center text-[12px]">
              <span>{member.course || "Yoga Basics"}</span>
              <span>{member.session}</span>
              <span className="bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                {member.completion}%
              </span>
            </div>
          </div>

          {/* ATTENDANCE */}
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="text-[13px] font-semibold mb-3 text-gray-700">
              Attendance Summary
            </h3>

            <div className="flex justify-between text-[12px] mb-3">
              <div>
                <p>Total Sessions</p>
                <p className="font-semibold text-gray-800">13</p>
              </div>

              <div>
                <p>Attended</p>
                <p className="font-semibold text-gray-800">10</p>
              </div>

              <div>
                <p>Attendance Rate</p>
                <p className="font-semibold text-gray-800">
                  {member.completion}%
                </p>
              </div>
            </div>

            {/* PROGRESS */}
            <div>
              <div className="flex justify-between text-[12px] mb-1">
                <span>Course Progress</span>
                <span>{member.completion}%</span>
              </div>

              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-green-500 rounded-full"
                  style={{ width: `${member.completion}%` }}
                  />
              </div>
            </div>
</div>
          </div>

        </div>
      </div>
    </div>
  );
}
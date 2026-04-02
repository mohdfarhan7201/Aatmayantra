import { FiX, FiMail, FiPhone, FiCalendar, FiStar } from "react-icons/fi";

export default function ViewModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      
      {/* Modal */}
      <div className="bg-white rounded-2xl w-[700px] shadow-xl overflow-hidden">

        {/* HEADER */}
        <div className="relative bg-gradient-to-r from-green-100 to-teal-100 p-6">
          
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-8 h-8 rounded-full bg-white flex items-center justify-center shadow"
          >
            <FiX />
          </button>

          <div className="flex items-center gap-4">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-16 h-16 rounded-full"
            />

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Mukesh Verma
              </h2>
              <p className="text-xs text-gray-500">
                Member ID: #8751
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-5 space-y-4">

          {/* TOP GRID */}
          <div className="grid grid-cols-2 gap-4">
            
            {/* Member Info */}
            <div className="bg-gray-50 rounded-xl p-4 border">
              <h3 className="text-sm font-semibold mb-3 text-gray-700">
                Member Information
              </h3>

              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <FiMail /> mukeshverma@email.com
                </div>
                <div className="flex items-center gap-2">
                  <FiPhone /> +91 9876543210
                </div>
                <div className="flex items-center gap-2">
                  <FiCalendar /> Joined Date March 18, 2024
                </div>
                <div className="flex items-center gap-2">
                  <FiStar /> Membership Plan Premium Plan
                </div>
              </div>
            </div>

            {/* Course Details */}
            <div className="bg-gray-50 rounded-xl p-4 border">
              <h3 className="text-sm font-semibold mb-3 text-gray-700">
                Course Details
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs text-gray-600">
                <div>
                  <p>Total Sessions</p>
                  <p className="font-semibold text-base text-gray-800">13</p>
                </div>

                <div>
                  <p>Complete Session</p>
                  <p className="font-semibold text-base text-gray-800">10</p>
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                    80%
                  </span>
                </div>

                <div>
                  <p>Joined Date</p>
                  <p className="text-[11px]">March 18, 2024</p>
                </div>

                <div>
                  <p>Membership Plan</p>
                  <span className="text-[10px] bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                    Premium Plan
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* COURSE TABLE */}
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="text-sm font-semibold mb-3 text-gray-700">
              Course Details
            </h3>

            <div className="text-xs text-gray-500 flex justify-between mb-2">
              <span>Course Name</span>
              <span>Sessions</span>
              <span>Completed</span>
            </div>

            {/* Row */}
            <div className="flex justify-between items-center text-xs mb-2">
              <span>Yoga Basics</span>
              <span>8 / 10</span>
              <span className="bg-green-100 text-green-600 px-2 py-[2px] rounded-full">
                80%
              </span>
            </div>

            <div className="flex justify-between items-center text-xs">
              <span>Meditation Essentials</span>
              <span>5 / 10</span>
              <span className="bg-red-100 text-red-500 px-2 py-[2px] rounded-full">
                Inactive
              </span>
            </div>
          </div>

          {/* ATTENDANCE */}
          <div className="bg-gray-50 rounded-xl p-4 border">
            <h3 className="text-sm font-semibold mb-3 text-gray-700">
              Attendance Summary
            </h3>

            <div className="flex justify-between text-xs mb-3">
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
                <p className="font-semibold text-gray-800">78%</p>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-2">
              <div className="flex justify-between text-xs mb-1">
                <span>Course Progress</span>
                <span>78%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-500 rounded-full w-[78%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-1">
                <span>Course Progress</span>
                <span>78%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-green-400 rounded-full w-[78%]" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
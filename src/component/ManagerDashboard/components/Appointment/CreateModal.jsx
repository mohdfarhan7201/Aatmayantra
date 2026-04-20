import React from "react";
import { X, Calendar } from "lucide-react";

export default function CreateModal({ onClose }) {
  return (
   <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex justify-center items-center z-50">
      
      {/* Modal */}
      <div className="bg-white rounded-xl w-[480px] px-6 shadow-lg">
        
        {/* Header */}
        <div className="flex justify-between items-center pb-2 mb-2">
          <h2 className="text-2xl font-semibold text-gray-700">
            Create Appointment
          </h2>
          <X
            size={18}
            className="cursor-pointer text-gray-500"
            onClick={onClose}
          />
        </div>

        {/* Form */}
        <div className="space-y-3">
          
          {/* Patient Name */}
          <div>
            <label className="text-sm text-teal-600 font-medium">
              Patient Name/ID:
            </label>
            <input
              type="text"
              placeholder="Enter Patient Name or ID"
              className="w-full mt-1 px-3 py-2 border rounded-lg outline-none text-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Doctor */}
          <div>
            <label className="text-sm text-teal-600 font-medium">
              Doctor / Trainer:
            </label>
            <select className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none focus:ring-2 focus:ring-blue-400">
              <option>Select Doctor or Trainer</option>
              <option>Dr. Sharma</option>
              <option>Trainer Rahul</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm text-teal-600 font-medium">
              Date & Time
            </label>

            <div className="flex items-center gap-2 mt-1">
              <input
                type="date"
                className="w-full px-3 py-2 border rounded-lg text-sm outline-none"
              />
              <div className="p-2 bg-gray-100 rounded-lg">
                <Calendar size={16} />
              </div>
            </div>
          </div>

          {/* Time Section */}
          <div className="grid grid-cols-3 gap-2">
            
            <div>
              <label className="text-xs text-gray-500">
                Start Time
              </label>
              <select className="w-full mt-1 px-2 py-2 border rounded-lg text-sm">
                <option>Select Start Time</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                End Time
              </label>
              <select className="w-full mt-1 px-2 py-2 border rounded-lg text-sm">
                <option>Select End Time</option>
              </select>
            </div>

            <div>
              <label className="text-xs text-gray-500">
                Slot Duration
              </label>
              <select className="w-full mt-1 px-2 py-2 border rounded-lg text-sm">
                <option>Select Duration</option>
              </select>
            </div>

          </div>

          {/* Service Type */}
          <div>
            <label className="text-sm text-teal-600 font-medium">
              Service/Session Type:
            </label>
            <select className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none">
              <option>Choose Service or Session</option>
            </select>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm text-teal-600 font-medium">
              Notes (Optional):
            </label>
            <textarea
              rows="3"
              placeholder="Write Anything..."
              className="w-full mt-1 px-3 py-2 border rounded-lg text-sm outline-none resize-none"
            />
          </div>
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-4 mb-2">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-600 text-sm"
          >
            Cancel
          </button>

          <button className="px-5 py-2 rounded-lg bg-blue-600 text-white text-sm">
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}
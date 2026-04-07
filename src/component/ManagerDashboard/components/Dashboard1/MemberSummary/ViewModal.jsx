import React from "react";
import { IoArrowBack } from "react-icons/io5";

export default function ViewModal({ member, close }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl w-[600px] p-6 relative border border-gray-200">

        {/* Back Button */}
        <button
          onClick={close}
          className="absolute right-4 top-4 bg-white border p-2 rounded-full shadow-sm hover:bg-gray-100"
        >
          <IoArrowBack size={20} />
        </button>

        {/* Header - Profile */}
        <div className="flex items-center gap-4 border-b pb-4">
          <img
            src={member.photo}
            className="w-14 h-14 rounded-full object-cover"
            alt=""
          />
          <div>
            <h2 className="text-xl font-bold">{member.name}</h2>
          </div>
        </div>

        {/* Membership Type + Payment Due */}
        <div className="mt-5 grid grid-cols-2">
          <div>
            <h3 className="text-blue-800 font-semibold text-[17px]">Membership Type</h3>
            <p className="text-gray-700">Plan Validity</p>
          </div>

          <div className="text-right">
            <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full text-sm mr-20">
              Payment Due
            </span>
            <p className="mt-1 font-medium text-center ">2025-05-01 – Expired</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6">
          <h3 className="text-blue-800 font-semibold text-[17px]">Contact Information</h3>
          <div className="grid grid-cols-2 mt-1">
            <p className="text-gray-700">Phone Number</p>
            <p className="text-center">{member.phone}</p>
            <p className="text-gray-700">Email Id</p>
            <p className="text-center">{member.email}</p>
          </div>
        </div>

        {/* Attendance Status */}
        <div className="mt-6">
          <h3 className="text-blue-800 font-semibold text-[17px]">Attendance Status</h3>
          <div className="grid grid-cols-2 mt-1">
            <p className="text-gray-700">Total Sessions Attended</p>
            <p className="text-center">{member.sessions}</p>

            <p className="text-gray-700">Last Session Date</p>
            <p className="text-center">{member.lastSessionDate}</p>
          </div>
        </div>

        {/* Payment History */}
        <div className="mt-6">
          <h3 className="text-blue-800 font-semibold text-[17px]">Payment History</h3>
          <div className="grid grid-cols-2 mt-1">
            <p className="text-gray-700">Last Payment Date</p>
            <p className="text-center">2025-05-01</p>

            <p className="text-gray-700">Amount</p>
            <p className="text-center">₹2999 (Monthly Plan)</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-8">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Send Messages
          </button>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
            Send Payment Reminder
          </button>
        </div>
      </div>
    </div>
  );
}

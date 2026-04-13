import React from "react";
import { ChevronRight } from "lucide-react";

const users = [
  {
    name: "Aarav Sharma",
    amount: "1500.00",
    status: "Refund Request",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Rahul Sharma",
    amount: "2000.00",
    status: "Refund Request",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Shri Pandey",
    amount: "2000.00",
    status: "Dues Pending",
    img: "https://randomuser.me/api/portraits/men/50.jpg",
  },
  {
    name: "Raghav Singh",
    amount: "2000.00",
    status: "Dues Pending",
    img: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    name: "Aarav Sharma",
    amount: "1500.00",
    status: "Dues Pending",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

export default function PaymentCards() {
  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      
      {/* 🔥 Payment Received */}
      <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">
            Payment Received
          </h2>
          <span className="text-sm text-blue-600 cursor-pointer">
            View all →
          </span>
        </div>

        <div className="space-y-3">
          {users.map((user, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <img
                  src={user.img}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium text-gray-700">
                  {user.name}
                </p>
              </div>

              {/* RIGHT */}
              <div className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-md font-semibold">
                {user.amount}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Payment Pending */}
      <div className="bg-white p-4 rounded-xl border border-gray-300 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="font-semibold text-gray-800">
            Payment Pending
          </h2>
          <span className="text-sm text-blue-600 cursor-pointer">
            View all →
          </span>
        </div>

        <div className="space-y-3">
          {users.map((user, i) => (
            <div
              key={i}
              className="flex items-center justify-between bg-gray-50 px-3 py-2 rounded-lg"
            >
              {/* LEFT */}
              <div className="flex items-center gap-3">
                <img
                  src={user.img}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                <p className="text-sm font-medium text-gray-700">
                  {user.name}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-4">
                
                <span className="text-xs text-gray-600">
                  {user.amount}
                </span>

                <span className="text-xs text-gray-500">
                  {user.status}
                </span>

                <ChevronRight size={16} className="text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
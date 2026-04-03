import React from "react";

export default function EarningCards() {
  return (
    <div className="flex gap-5 justify-center mt-5">

      {/* CARD 1 */}
      <div className="w-[340px] rounded-xl p-4 border border-gray-200 shadow-sm bg-[#E6F4EA]">
        <p className="text-[23px] text-green-700 font-medium">
          Total Earning
        </p>

        <h2 className="text-[25px] font-semibold text-gray-800 mt-1">
          ₹ 45,000
        </h2>

        <p className="text-[15px] text-gray-500 mt-1">
          From Atmayantra
        </p>
      </div>

      {/* CARD 2 */}
      <div className="w-[340px] rounded-xl p-4 border border-gray-200 shadow-sm bg-[#F5E8D6]">
        <p className="text-[23px] text-yellow-700 font-medium">
          Available Balance
        </p>

        <h2 className="text-[25px] font-semibold text-gray-800 mt-1">
          ₹ 25,000
        </h2>

        <p className="text-[15px] text-gray-500 mt-1">
          Ready for withdrawal
        </p>
      </div>

      {/* CARD 3 */}
      <div className="w-[340px] rounded-xl p-4 border border-gray-200 shadow-sm bg-[#F8E3E3]">
        <p className="text-[23px] text-red-600 font-medium">
          Pending Payout
        </p>

        <h2 className="text-[25px] font-semibold text-gray-800 mt-1">
          ₹ 4,000
        </h2>

        <p className="text-[15px] text-gray-500 mt-1">
          Processing
        </p>
      </div>

    </div>
  );
} 
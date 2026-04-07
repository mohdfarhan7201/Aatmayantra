import { FiX, FiArrowLeft } from "react-icons/fi";

export default function ViewModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

      {/* MODAL */}
      <div className="bg-white w-[360px] rounded-xl border shadow-md p-4 relative">

        {/* BACK BUTTON */}
        <button
          onClick={onClose}
          className="absolute left-3 top-3 w-7 h-7 rounded-full border flex items-center justify-center bg-white"
        >
          <FiArrowLeft size={14} />
        </button>

        {/* USER IMAGE */}
        <div className="flex flex-col items-center mt-4">
          <img
            src={`https://randomuser.me/api/portraits/women/${data.id}.jpg`}
            className="w-16 h-16 rounded-full object-cover shadow"
          />

          <p className="text-xs text-gray-500 mt-2">
            From {data.name}
          </p>

          <p className="text-xs text-gray-500">
            +91 1234569870
          </p>

          {/* AMOUNT */}
          <h2 className="text-xl font-semibold mt-2 text-gray-800">
            Rs.{data.amount.replace("+", "")}
          </h2>

          <p className="text-xs text-gray-400 mt-1">
            Completed
          </p>

          {/* DATE */}
          <p className="text-[11px] text-gray-500 mt-2 border-b pb-2 w-full text-center">
            {data.date} , {data.time}
          </p>
        </div>

        {/* DETAILS BOX */}
        <div className="bg-gray-50 border rounded-lg p-3 mt-3 text-xs text-gray-600">

          <p className="mb-2">
            <span className="font-medium">UPI transaction ID :</span>{" "}
            {Math.floor(100000000000 + Math.random() * 900000000000)}
          </p>

          <div className="mb-2">
            <p>
              <span className="font-medium">To :</span> Varun
            </p>
            <p className="text-[10px] text-gray-400">
              Google Pay &nbsp; abc124asds@gmail.com
            </p>
          </div>

          <div className="mb-2">
            <p>
              <span className="font-medium">From :</span> {data.name}
            </p>
            <p className="text-[10px] text-gray-400">
              Google Pay &nbsp; {data.name.toLowerCase().replace(" ", "")}@gmail.com
            </p>
          </div>

          <p>
            Google transaction ID :{" "}
            {Math.floor(100000000000 + Math.random() * 900000000000)}
          </p>
        </div>

        {/* FOOT NOTE */}
        <p className="text-[10px] text-gray-400 text-center mt-3">
          Payment May take up to 3 working days to be reflected in your account.
        </p>

        {/* BUTTONS */}
        <div className="flex justify-between mt-4">
          <button className="bg-red-400 hover:bg-red-500 text-white px-5 py-2 rounded-lg text-sm">
            Refund
          </button>

          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-5 py-2 rounded-lg text-sm"
          >
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
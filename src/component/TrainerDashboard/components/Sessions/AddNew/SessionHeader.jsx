import { FaSave, FaPaperPlane } from "react-icons/fa";

export default function SessionHeader({ onSubmit }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-xl font-semibold">Add New Session</h1>

      <div className="flex gap-3">
        <button className="px-4 py-2 border rounded-md flex items-center gap-2">
          <FaSave /> Save Draft
        </button>

        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md flex items-center gap-2"
        >
          <FaPaperPlane /> Post Session
        </button>
      </div>
    </div>
  );
}

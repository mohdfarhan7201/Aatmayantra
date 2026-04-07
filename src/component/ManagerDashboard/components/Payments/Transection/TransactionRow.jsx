export default function TransactionRow({ item, onView }) {
  return (
    <div className="flex items-center bg-gray-50 px-4 py-2 rounded-lg border border-gray-300">

      {/* NAME */}
      <div className="w-[30%] flex items-center gap-2">
        <img
          src={`https://randomuser.me/api/portraits/men/${item.id}.jpg`}
          className="w-8 h-8 rounded-full"
        />
        <span className="text-sm">{item.name}</span>
      </div>

      {/* DATE */}
      <div className="w-[20%] text-xs text-gray-500">
        {item.date}
        <br />
        {item.time}
      </div>

      {/* STATUS */}
      <div className="w-[20%]">
        <span
          className={`text-xs px-2 py-1 rounded-full ${
            item.status === "Received"
              ? "bg-green-100 text-green-600"
              : "bg-yellow-100 text-yellow-600"
          }`}
        >
          {item.status}
        </span>
      </div>

      {/* AMOUNT */}
      <div className="w-[15%] text-sm font-medium">
        {item.amount}
      </div>

      {/* ACTION */}
      <div className="w-[15%] flex justify-center">
        <button
          onClick={() => onView(item)}
          className="bg-blue-600 text-white text-sm px-3 py-1 rounded-full"
        >
          View 
        </button>
      </div>
    </div>
  );
}
import TransactionRow from "./TransactionRow";

export default function TransactionTable({ data, onView }) {
  return (
    <div className="w-full">

      {/* HEADER */}
      <div className="flex text-mb font-semibold text-gray-900 px-4 py-2 border-b">
        <div className="w-[30%]">Customer Name</div>
        <div className="w-[20%]">Date</div>
        <div className="w-[20%]">Payment Status</div>
        <div className="w-[15%]">Amount</div>
        <div className="w-[15%] text-center">Action</div>
      </div>

      {/* ROWS */}
      <div className="space-y-2 mt-2">
        {data.map((item) => (
          <TransactionRow
            key={item.id}
            item={item}
            onView={onView}
          />
        ))}
      </div>
    </div>
  );
}
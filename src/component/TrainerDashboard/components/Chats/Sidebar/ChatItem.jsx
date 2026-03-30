// =============================
// ChatItem.jsx
// =============================
export const ChatItem = ({ name, msg, count, active }) => (
  <div className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${active ? "bg-gray-100" : "hover:bg-gray-50"}`}>
    <div className="flex items-center gap-3">
      <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full" />
      <div>
        <h4 className="text-sm font-medium">{name}</h4>
        <p className="text-xs text-gray-400 truncate w-[140px]">{msg}</p>
      </div>
    </div>
    {count && (
      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
        {count}
      </span>
    )}
  </div>
);
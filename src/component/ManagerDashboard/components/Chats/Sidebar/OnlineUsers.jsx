// OnlineUsers.jsx
// =============================
export const OnlineUsers = () => {
  return (
    <div className="p-4">
      <h3 className="text-sm font-semibold mb-3">Online Now</h3>
      <div className="flex items-center gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <img
            key={i}
            src={`https://randomuser.me/api/portraits/men/${i + 20}.jpg`}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
        <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-600 text-xs rounded-full">
          18+
        </div>
      </div>
    </div>
  );
};
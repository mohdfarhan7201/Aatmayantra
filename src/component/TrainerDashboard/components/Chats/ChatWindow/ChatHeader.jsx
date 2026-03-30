// =============================
// ChatHeader.jsx
// =============================
export const ChatHeader = () => (
  <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
    <div className="flex items-center gap-3">
      <img src="https://randomuser.me/api/portraits/men/30.jpg" className="w-10 h-10 rounded-full" />
      <h3 className="font-semibold">Alpha</h3>
    </div>

    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">i</div>
      <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">←</div>
    </div>
  </div>
);


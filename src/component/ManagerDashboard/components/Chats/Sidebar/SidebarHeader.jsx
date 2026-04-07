// =============================
// SidebarHeader.jsx
// =============================
export const SidebarHeader = () => (
  <div className="flex items-center gap-3 p-3.5 border-b-2 border-gray-300 bg-white">
    <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-10 h-10 rounded-full" />
    <div>
      <h2 className="font-semibold text-lg">Trainer</h2>
      <p className="text-xs text-gray-400">My Account</p>
    </div>
  </div>
);
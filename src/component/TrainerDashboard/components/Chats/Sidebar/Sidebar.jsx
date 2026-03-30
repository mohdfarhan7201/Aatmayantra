// =============================
// Sidebar.jsx
// =============================
import { SidebarHeader } from "./SidebarHeader";
import { OnlineUsers } from "./OnlineUsers";
import { ChatItem } from "./ChatItem";

export const Sidebar = () => (
  <div className="w-[320px] h-screen border-r bg-white flex flex-col">
    <SidebarHeader />
    <OnlineUsers />

    <div className="px-4 mb-2">
      <input
        placeholder="Search"
        className="w-full px-3 py-2 text-sm rounded-full border focus:outline-none"
      />
    </div>

    <div className="flex-1 overflow-y-auto px-2">
      <ChatItem name="Marina Jolly" msg="Typing..." count={2} active />
      <ChatItem name="Jackson Roy" msg="Sent a picture" />
      <ChatItem name="Hafsa shaikh" msg="Meet me before presentation" count={3} />
      <ChatItem name="Alix joseph" msg="How did you prepared" />
      <ChatItem name="College group" msg="You: What about Wednesday" />
      <ChatItem name="Rockstar Benj" msg="Sent an attachment" count={2} />
      <ChatItem name="Max Hob" msg="New presentation" />
    </div>
  </div>
);

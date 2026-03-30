// =============================
// App.jsx
// =============================
import { Sidebar } from "./Sidebar/Sidebar";
import { ChatWindow } from "./ChatWindow/ChatWindow";

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

// =============================
// ChatWindow.jsx
// =============================
import { useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { MessageBubble } from "./MessageBubble";
import { ChatInput } from "./ChatInput";

export const ChatWindow = () => {
  const [msg, setMsg] = useState("");

  return (
    <div className="flex-1 h-screen flex flex-col bg-[#f5f7fb]">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-6 py-4">
        <p className="text-center text-xs text-gray-400 mb-4">Yesterday</p>
        <MessageBubble text="Hi, how are you all?" time="08:30 am" />
        <MessageBubble text="How many of you prepared the presentation?" time="08:32 am" />
        <MessageBubble text="Hello Mojixa I am just about to start" time="09:31 pm" />

        <p className="text-center text-xs text-gray-400 my-4">Today</p>
        <MessageBubble text="Apologies guys I will not be able to contribute" time="09:20 am" />
        <MessageBubble text="No issue, take some rest" time="10:45 am" />
        <MessageBubble text="I just completed it last night." time="10:45 am" isOwn />
      </div>

      <ChatInput value={msg} setValue={setMsg} />
    </div>
  );
};
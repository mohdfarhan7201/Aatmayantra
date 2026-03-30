// =============================
// MessageBubble.jsx
// =============================
export const MessageBubble = ({ text, time, isOwn }) => (
  <div className={`flex ${isOwn ? "justify-end" : "justify-start"} mb-3`}>
    <div>
      <div
        className={`px-4 py-2 rounded-2xl text-sm max-w-xs ${
          isOwn ? "bg-green-600 text-white" : "bg-gray-100"
        }`}
      >
        {text}
      </div>
      <p className="text-[10px] text-gray-400 mt-1">{time}</p>
    </div>
  </div>
);
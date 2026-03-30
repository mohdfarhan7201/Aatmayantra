// =============================
// ChatInput.jsx
// =============================
export const ChatInput = ({ value, setValue }) => (
  <div className="p-3 border-t bg-white flex items-center gap-2">
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Your message..."
      className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none"
    />
    <button className="bg-green-600 text-white px-4 py-2 rounded-full">➤</button>
  </div>
);
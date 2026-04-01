// // // =============================
// // // ChatInput.jsx
// // // =============================
// // export const ChatInput = ({ value, setValue }) => (
// //   <div className="p-3 border-t bg-white flex items-center gap-2">
// //     <input
// //       value={value}
// //       onChange={(e) => setValue(e.target.value)}
// //       placeholder="Your message..."
// //       className="flex-1 px-4 py-2 rounded-full border text-sm focus:outline-none"
// //     />
// //     <button className="bg-green-600 text-white px-4 py-2 rounded-full">➤</button>
// //   </div>
// // );

// import { FiPaperclip } from "react-icons/fi";
// import { BsEmojiSmile } from "react-icons/bs";
// import { IoSend } from "react-icons/io5";
// import { HiOutlineMicrophone } from "react-icons/hi";

// export const ChatInput = ({ value, setValue }) => {
//   return (
//     <div className="p-3 border-t bg-white flex items-center gap-3">

//       {/* Left Icons */}
//       <div className="flex items-center gap-3 text-gray-500 text-lg">
//         <BsEmojiSmile className="cursor-pointer hover:text-gray-700" />
//         <FiPaperclip className="cursor-pointer hover:text-gray-700" />
//       </div>

//       {/* Input Box */}
//       <div className="flex-1 relative">
//         <input
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           placeholder="Your message..."
//           className="w-full px-4 py-2 pr-10 rounded-full bg-gray-100 text-sm focus:outline-none"
//         />

//         {/* Mic inside input (right side) */}
//         <HiOutlineMicrophone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" />
//       </div>

//       {/* Send Button */}
//       <button className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full">
//         <IoSend size={18} />
//       </button>
//     </div>
//   );
// };


import { FiPaperclip } from "react-icons/fi";
import { BsEmojiSmile } from "react-icons/bs";
import { IoSend } from "react-icons/io5";
import { HiOutlineMicrophone } from "react-icons/hi";

export const ChatInput = ({ value, setValue, sendMessage }) => {
  return (
    <div className="p-3 border-t bg-white flex items-center gap-3">
      <BsEmojiSmile />
      <FiPaperclip />

      <div className="flex-1 relative">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Your message..."
          className="w-full px-4 py-2 rounded-full bg-gray-100"
        />
        <HiOutlineMicrophone className="absolute right-3 top-1/2 -translate-y-1/2" />
      </div>

      <button
        onClick={sendMessage}
        className="bg-green-600 text-white p-2 rounded-full"
      >
        <IoSend />
      </button>
    </div>
  );
};
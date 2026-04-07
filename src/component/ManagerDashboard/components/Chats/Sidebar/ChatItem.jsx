// // import { Image, Paperclip, CheckCheck } from "lucide-react";

// // export const ChatItem = ({ name, msg, count, active, type }) => {
// //   // message type ke hisaab se icon
// //   const renderMessage = () => {
// //     switch (type) {
// //       case "typing":
// //         return <span className="text-green-500 italic">Typing...</span>;

// //       case "image":
// //         return (
// //           <span className="flex items-center gap-1 text-gray-400">
// //             <Image size={14} /> Sent a picture
// //           </span>
// //         );

// //       case "attachment":
// //         return (
// //           <span className="flex items-center gap-1 text-gray-400">
// //             <Paperclip size={14} /> Sent an attachment
// //           </span>
// //         );

// //       case "seen":
// //         return (
// //           <span className="flex items-center gap-1 text-gray-400">
// //             <CheckCheck size={14} className="text-green-500" /> {msg}
// //           </span>
// //         );

// //       default:
// //         return <span className="text-gray-400">{msg}</span>;
// //     }
// //   };

// //   return (
// //     <div
// //       className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
// //         active ? "bg-gray-100" : "hover:bg-gray-50"
// //       }`}
// //     >
// //       <div className="flex items-center gap-3">
// //         <img
// //           src="https://randomuser.me/api/portraits/women/45.jpg"
// //           className="w-10 h-10 rounded-full"
// //         />

// //         <div>
// //           <h4 className="text-sm font-medium">{name}</h4>

// //           <p className="text-xs truncate w-[150px]">
// //             {renderMessage()}
// //           </p>
// //         </div>
// //       </div>

// //       {count && (
// //         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
// //           {count}
// //         </span>
// //       )}
// //     </div>
// //   );
// // };


// export const ChatItem = ({ user, active, onClick }) => {
//   const lastMsg = user.messages[user.messages.length - 1]?.text;

//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
//         active ? "bg-gray-100" : "hover:bg-gray-50"
//       }`}
//     >
//       <div className="flex gap-3 items-center">
//         <img
//           src="https://randomuser.me/api/portraits/women/45.jpg"
//           className="w-10 h-10 rounded-full"
//         />

//         <div>
//           <h4 className="text-sm font-medium">{user.name}</h4>

//           <p className="text-xs text-gray-400">
//             {user.type === "typing" ? (
//               <span className="text-green-500">Typing...</span>
//             ) : (
//               lastMsg
//             )}
//           </p>
//         </div>
//       </div>

//       {user.unread && (
//         <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
//           {user.unread}
//         </span>
//       )}
//     </div>
//   );
// };


export const ChatItem = ({ user, active, onClick }) => {
  const lastMsg = user.messages[user.messages.length - 1]?.text;

  return (
    <div
      onClick={onClick}
      className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
        active ? "bg-gray-100" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex gap-3 items-center">
        <img
          src={user.avatar}
          className="w-10 h-10 rounded-full"
        />

        <div>
          <h4 className="text-sm font-medium">{user.name}</h4>

          <p className="text-xs text-gray-400">
            {user.type === "typing" ? (
              <span className="text-green-500">Typing...</span>
            ) : (
              lastMsg
            )}
          </p>
        </div>
      </div>

      {user.unread && (
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          {user.unread}
        </span>
      )}
    </div>
  );
};
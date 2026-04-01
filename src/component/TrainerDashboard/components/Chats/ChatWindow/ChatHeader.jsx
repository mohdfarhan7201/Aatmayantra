// // =============================
// // ChatHeader.jsx
// // =============================
// // import { FiInfo, FiArrowLeft } from "react-icons/fi";
// // export const ChatHeader = () => (
// //   <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-400 bg-white">
// //     <div className="flex items-center gap-3">
// //       <img src="https://randomuser.me/api/portraits/men/30.jpg" className="w-10 h-10 rounded-full" />
// //       <h3 className="font-semibold">Alpha</h3>
// //     </div>

// //     <div className="flex items-center gap-3">
// //       <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">
// //         <FiInfo />
// //       </div>

// //       <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">
// //         <FiArrowLeft />
// //       </div>
// //     </div>
// //   </div>
// // );



// // export const ChatHeader = ({ user }) => (
// //   <div className="flex items-center gap-3 p-4 border-b bg-white">
// //     <img
// //       src="https://randomuser.me/api/portraits/men/30.jpg"
// //       className="w-10 h-10 rounded-full"
// //     />
// //     <h3 className="font-semibold">{user.name}</h3>
// //   </div>
// // );




// import { FiInfo, FiArrowLeft } from "react-icons/fi";

// export const ChatHeader = ({ user, onBack }) => {
//   return (
//     <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-300 bg-white">
      
//       {/* Left */}
//       <div className="flex items-center gap-3">
//         <img
//           src={`https://randomuser.me/api/portraits/men/${user.id + 20}.jpg`}
//           className="w-10 h-10 rounded-full"
//         />
//         <h3 className="font-semibold">{user.name}</h3>
//       </div>

//       {/* Right Icons */}
//       <div className="flex items-center gap-3">
        
//         <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-gray-100">
//           <FiInfo />
//         </div>

//         <div
//           onClick={onBack}
//           className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer hover:bg-gray-100"
//         >
//           <FiArrowLeft />
//         </div>

//       </div>
//     </div>
//   );
// };


import { FiInfo, FiArrowLeft } from "react-icons/fi";

export const ChatHeader = ({ user, onBack }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 border-b-2 border-gray-300 bg-white">
      
      <div className="flex items-center gap-3">
        <img
          src={user.avatar}
          className="w-10 h-10 rounded-full"
        />
        <h3 className="font-semibold">{user.name}</h3>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer">
          <FiInfo />
        </div>

        <div
          onClick={onBack}
          className="w-8 h-8 rounded-full border flex items-center justify-center cursor-pointer"
        >
          <FiArrowLeft />
        </div>
      </div>
    </div>
  );
};
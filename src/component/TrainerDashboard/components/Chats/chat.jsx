// import React, { useState } from "react";
// import { Routes, Route, useLocation } from "react-router-dom";

// import Header from "./Header";
// import { Sidebar } from "./Sidebar/Sidebar";
// import { ChatWindow } from "./ChatWindow/ChatWindow";
// import Profile from "../Profile";

// import { useTheme } from "../../context/ThemeContext";
// import { usersData } from "./usersData"; // 👈 import dummy data

// export default function Members() {
//   const { darkMode } = useTheme();
//   const location = useLocation();

//   // 🔥 Dynamic State (IMPORTANT)
//   const [users, setUsers] = useState(usersData);
//   const [selectedUserId, setSelectedUserId] = useState(usersData[0]?.id);

//   // 👇 current selected user
//   const selectedUser = users.find((u) => u.id === selectedUserId);

//   return (
//     <div
//       className={`p-6 min-h-screen transition-colors duration-300 ${
//         darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
//       }`}
//     >
//       {/* HEADER */}
//       {location.pathname !== "/trainer/members/profile" && <Header />}

//       <div className="flex">
//         {/* SIDEBAR */}
//         {location.pathname !== "/trainer/members/profile" && (
//           <Sidebar
//             users={users}
//             selectedUserId={selectedUserId}
//             setSelectedUserId={setSelectedUserId}
//           />
//         )}

//         {/* CHAT WINDOW */}
//         {location.pathname !== "/trainer/members/profile" && selectedUser && (
//           <ChatWindow user={selectedUser} setUsers={setUsers} />
//         )}
//       </div>

//       {/* ROUTES */}
//       <Routes>
//         <Route path="profile" element={<Profile />} />
//       </Routes>
//     </div>
//   );
// }

// // import { useState } from "react";
// // import { Sidebar } from "./Sidebar/Sidebar";
// // import { ChatWindow } from "./ChatWindow/ChatWindow";
// // import { usersData } from "./usersData";

// // export default function App() {
// //   const [users, setUsers] = useState(usersData);
// //   const [selectedUserId, setSelectedUserId] = useState(usersData[0].id);

// //   const selectedUser = users.find((u) => u.id === selectedUserId);

// //   return (
// //     <div className="flex">
// //       <Sidebar
// //         users={users}
// //         selectedUserId={selectedUserId}
// //         setSelectedUserId={setSelectedUserId}
// //       />

// //       <ChatWindow user={selectedUser} setUsers={setUsers} />
// //     </div>
// //   );
// // }


import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import { Sidebar } from "./Sidebar/Sidebar";
import { ChatWindow } from "./ChatWindow/ChatWindow";
import Profile from "../Profile";

import { useTheme } from "../../context/ThemeContext";
import { usersData } from "./usersData";

export default function Members() {
  const { darkMode } = useTheme();
  const location = useLocation();

  const [users, setUsers] = useState(usersData);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const selectedUser = users.find((u) => u.id === selectedUserId);

  return (
    <div
      className={`p-6 min-h-screen ${
        darkMode ? "bg-[#191F36] text-white" : "bg-white text-black"
      }`}
    >
      {location.pathname !== "/trainer/chat/profile" && <Header />}

      <div className="flex">
        {location.pathname !== "/trainer/chat/profile" && (
          <Sidebar
            users={users}
            selectedUserId={selectedUserId}
            setSelectedUserId={setSelectedUserId}
          />
        )}

        {location.pathname !== "/trainer/chat/profile" && selectedUser && (
          <ChatWindow
            user={selectedUser}
            setUsers={setUsers}
            onBack={() => setSelectedUserId(null)}
          />
        )}
      </div>

      <Routes>
        <Route path="profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
// import { SidebarHeader } from "./SidebarHeader";
// import { OnlineUsers } from "./OnlineUsers";
// import { ChatItem } from "./ChatItem";
// import { Search } from "lucide-react";
// import { FaRegHeart } from "react-icons/fa";
// import { FiEdit } from "react-icons/fi";

// export const Sidebar = () => {
//   return (
//     <div className="w-[320px] h-screen bg-white flex flex-col ">

//       {/* Header */}
//       <SidebarHeader />

//       {/* Online Users */}
//       {/* <OnlineUsers /> */}

//       {/* Messages Title + Icons */}
//       <div className="flex items-center justify-between px-4 mt-2 mb-2">
//         <h3 className="text-lg font-semibold">Messages</h3>

//         <div className="flex items-center gap-3 text-gray-400 text-xl">
//       <FiEdit className="cursor-pointer hover:text-black" />
//       <FaRegHeart className="cursor-pointer hover:text-red-500" />
//     </div>
//       </div>

//       {/* Search */}
//       <div className="px-4 mb-3 relative">
//         <Search
//           size={14}
//           className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400"
//         />
//         <input
//           placeholder="Search"
//           className="w-full pl-8 pr-3 py-2 text-sm rounded-full bg-gray-100 focus:outline-none"
//         />
//       </div>

//       {/* Chat List */}
//       <div className="flex-1 overflow-y-auto px-2 space-y-1">
//         <ChatItem
//           name="Marina Jolly"
//           type="typing"
//           count={2}
//           active
//         />

//         <ChatItem
//           name="Jackson Roy"
//           type="image"
//         />

//         <ChatItem
//           name="Hafsa shaikh"
//           msg="Meet me before presentation"
//           count={3}
//         />

//         <ChatItem
//           name="Alix joseph"
//           msg="How did you prepared"
//         />

//         <ChatItem
//           name="College group"
//           type="seen"
//           msg="You: What about Wednesday"
//         />

//         <ChatItem
//           name="Rockstar Benj"
//           type="attachment"
//           count={2}
//         />
//         <ChatItem
//           name="Marina Jolly"
//           type="typing"
//           count={2}
//           active
//         />

//         <ChatItem
//           name="Jackson Roy"
//           type="image"
//         />

//         <ChatItem
//           name="Hafsa shaikh"
//           msg="Meet me before presentation"
//           count={3}
//         />

//         <ChatItem
//           name="Alix joseph"
//           msg="How did you prepared"
//         />

//         <ChatItem
//           name="College group"
//           type="seen"
//           msg="You: What about Wednesday"
//         />

//         <ChatItem
//           name="Rockstar Benj"
//           type="attachment"
//           count={2}
//         />

//         <ChatItem
//           name="Max Hob"
//           msg="New presentation will be..."
//         />
//       </div>
//     </div>
//   );
// };



import { ChatItem } from "./ChatItem";
import {SidebarHeader} from "./SidebarHeader";
import { Search } from "lucide-react";
import { FaRegHeart } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

export const Sidebar = ({ users, selectedUserId, setSelectedUserId }) => {
  return (
    <div className="w-[320px] h-screen bg-white flex flex-col">
<SidebarHeader/>
      {/* <div className="p-4 font-semibold">Messages</div> */}


       {/* Messages Title + Icons */}
       <div className="flex items-center justify-between px-4 mt-2 mb-2">
         <h3 className="text-lg font-semibold">Messages</h3>

         <div className="flex items-center gap-3 text-gray-400 text-xl">
       <FiEdit className="cursor-pointer hover:text-black" />
       <FaRegHeart className="cursor-pointer hover:text-red-500" />
     </div>
       </div>

       {/* Search */}
       <div className="px-4 mb-3 relative">
         <Search
           size={14}
           className="absolute left-7 top-1/2 -translate-y-1/2 text-gray-400"
         />
         <input
           placeholder="Search"
           className="w-full pl-8 pr-3 py-2 text-sm rounded-full bg-gray-100 focus:outline-none"
         />
       </div>

      <div className="flex-1 overflow-y-auto px-2">
        {users.map((user) => (
          <ChatItem
            key={user.id}
            user={user}
            active={selectedUserId === user.id}
            onClick={() => setSelectedUserId(user.id)}
          />
        ))}
      </div>
    </div>
  );
};
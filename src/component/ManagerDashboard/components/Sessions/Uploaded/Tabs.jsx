// import { NavLink, useNavigate } from "react-router-dom";
// import { FaThLarge, FaTable } from "react-icons/fa";

// export default function Header() {
//   const navigate = useNavigate();

//   return (
//     <div className="flex items-center gap-8 border-b pb-4 mb-6">
//       <NavLink to="/session" end className="font-semibold text-green-700 border-b-2 border-green-700">
//         Upcoming Sessions
//       </NavLink>

//       <NavLink
//         to="/session/uploaded"
//         end
//         className="font-semibold text-green-700 border-b-2 border-green-700"
//       >
//         Uploaded Sessions
//       </NavLink>

//       <button
//         onClick={() => navigate("/session/add")}
//         className="ml-auto bg-blue-600 text-white px-4 py-2 rounded"
//       >
//         + Add New Session
//       </button>
//     </div>
//   );
// }



import { NavLink, useNavigate } from "react-router-dom";
import { FaThLarge, FaTable } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-8 border-b pb-4 mb-6">
      
      {/* /trainer/session */}
      <NavLink
        to="/trainer/session"
        end
        className="font-semibold text-green-700 border-b-2 border-green-700"
      >
        Upcoming Sessions
      </NavLink>

      {/* /trainer/session/uploaded */}
      <NavLink
        to="/trainer/session/uploaded"
        className="font-semibold text-green-700 border-b-2 border-green-700"
      >
        Uploaded Sessions
      </NavLink>

      {/* /trainer/session/add */}
      <button
        onClick={() => navigate("/trainer/session/add")}
        className="ml-auto bg-blue-600 text-white px-4 py-2 rounded"
      >
        + Add New Session
      </button>
    </div>
  );
}
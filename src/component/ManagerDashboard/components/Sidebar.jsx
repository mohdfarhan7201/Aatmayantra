import { Link, useLocation } from "react-router-dom";
import { BsPeopleFill } from "react-icons/bs";
import {
  Home,
  Grid3X3,
  GraduationCap,
  FileText,
  CreditCard,
  Settings,
  LogOut,
  MessageSquare,
} from "lucide-react";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import logo from "../assets/logo.svg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const basePath = "/manager";

const navigationItems = [
  { id: "dashboard", label: "Dashboard", path: "", icon: Home }, // ✅ INDEX
  { id: "manage-classes", label: "Appointment", path: "appointment", icon: Grid3X3 },
  { id: "session", label: "Session", path: "session", icon: LiaChalkboardTeacherSolid },
  { id: "attendance", label: "Attendance", path: "attendance", icon: GraduationCap },
  { id: "members", label: "Members", path: "members", icon: BsPeopleFill },
  { id: "chat", label: "Chat", path: "chat", icon: MessageSquare },
  { id: "report", label: "Report", path: "report", icon: FileText },
  { id: "payment", label: "Payment", path: "payment", icon: CreditCard },
  { id: "setting", label: "Settings", path: "setting", icon: Settings },
  { id: "logout", label: "Logout", path: "logout", icon: LogOut },
];

function Sidebar({ className = "" }) {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  // ✅ ACTIVE INDEX FIXED FOR INDEX ROUTE
  const getActiveIndex = () => {
    const activeItem = navigationItems.findIndex((item) => {
      if (item.path === "") {
        return location.pathname === basePath;
      }
      return location.pathname.startsWith(`${basePath}/${item.path}`);
    });

    return activeItem === -1 ? 0 : activeItem;
  };

  const activeIndex = getActiveIndex();

  const handleParentClick = (item) => {
    if (item.children) {
      setOpenDropdown(openDropdown === item.id ? null : item.id);
    } else {
      setOpenDropdown(null);
    }
  };

  return (
    <div
      className={`w-64 fixed top-0 left-0 h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#262B40] text-white"
          : "bg-gradient-to-b from-teal-50 to-teal-100 text-black"
      } ${className}`}
    >
      {/* Logo */}
      <div className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-14 h-14" />
          <span className="text-lg font-medium tracking-wide">
            AATMAYANTRA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative px-2">
        <div
          className="absolute -right-1 w-60 h-13 shadow transition-colors"
          style={{
            top: `${activeIndex * 52 + 4}px`,
            borderTopLeftRadius: "28px",
            borderBottomLeftRadius: "28px",
            background: darkMode ? "#191F36" : "white",
          }}
        >
          <div
            className="absolute -top-7 right-0 w-7 h-7 shadow transition-colors"
            style={{
              background: "transparent",
              borderBottomRightRadius: "28px",
              boxShadow: darkMode
                ? "0 14px 0 0 #191F36"
                : "0 14px 0 0 white",
            }}
          ></div>
          <div
            className="absolute -bottom-7 right-0 w-7 h-7 shadow transition-colors"
            style={{
              background: "transparent",
              borderTopRightRadius: "28px",
              boxShadow: darkMode
                ? "0 -14px 0 0 #191F36"
                : "0 -14px 0 0 white",
            }}
          ></div>
        </div>

        <ul className="ml-5">
          {navigationItems.map((item) => {
            const Icon = item.icon;

            // ✅ ACTIVE CHECK FIXED
            const isActive =
              item.path === ""
                ? location.pathname === basePath
                : location.pathname.startsWith(`${basePath}/${item.path}`);

            return (
              <li key={item.id}>
                <Link
                  to={
                    item.path === ""
                      ? basePath
                      : `${basePath}/${item.path}`
                  }
                  onClick={() => handleParentClick(item)}
                  className={`flex items-center gap-2 px-4 py-3 transition-all duration-200 relative z-10 ${
                    isActive
                      ? darkMode
                        ? "text-blue-500 font-bold"
                        : "text-black font-bold"
                      : darkMode
                      ? "text-gray-300 font-medium hover:text-white"
                      : "text-black font-medium hover:text-teal-800"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${
                      isActive
                        ? darkMode
                          ? "text-blue-500"
                          : "text-teal-600"
                        : darkMode
                        ? "text-gray-300"
                        : "text-teal-500"
                    }`}
                  />
                  <span
                    className={`text-lg ${
                      isActive
                        ? darkMode
                          ? "border-b-3 border-blue-500 pb-1"
                          : "border-b-3 border-teal-600 pb-1"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
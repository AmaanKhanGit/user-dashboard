import {
  FaBell,
  FaCog,
  FaHome,
  FaQuestionCircle,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Button from "./Layout/Button";

const links = [
  {
    title: "Dashboard",
    icon: FaHome,
    route: "/",
  },
  {
    title: "Profile",
    icon: FaUser,
    route: "/profile",
  },
  {
    title: "Notification",
    icon: FaBell,
    route: "/notifications",
  },
  {
    title: "Settings",
    icon: FaCog,
    route: "/settings",
  },
  {
    title: "Help",
    icon: FaQuestionCircle,
    route: "/help",
  },
];

const Sidebar = ({ onClose, className }) => {
  const handleClick = () => {
    onClose?.();
  };

  return (
    <div className={className}>
      <div className=" flex flex-col gap-4 justify-between items-start ">
        {links.map((link) => {
          const Icon = link.icon;
          return (
            <NavLink
              to={link.route}
              key={link.title}
              onClick={handleClick}
              className={({ isActive }) =>
                `text-xl rounded-lg w-full py-2 px-4 font-medium text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors duration-200 ${isActive ? "bg-gray-100 text-purple-700" : "bg-white"}`
              }
            >
              <div className="flex items-center gap-2">
                <Icon className="text-xl" />
                <div>{link.title}</div>
              </div>
            </NavLink>
          );
        })}
      </div>

      <Button>Logout</Button>
    </div>
  );
};

export default Sidebar;

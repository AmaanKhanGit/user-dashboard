import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Icon */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="rounded-full p-2"
      >
        <FaUserCircle className=" cursor-pointer" />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 mt-2 w-48 origin-top rounded-xl bg-white shadow-lg transition-all duration-300 ease-out
          ${
            isOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-3 opacity-0 invisible"
          }`}
      >
        <Link to="/profile">
          <button className="w-full px-4 py-3 text-left rounded-xl hover:bg-gray-100 transition-colors cursor-pointer">
            Profile
          </button>
        </Link>

        <button className="w-full px-4 py-3 text-left text-red-600 rounded-xl hover:bg-red-50 transition-colors cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;

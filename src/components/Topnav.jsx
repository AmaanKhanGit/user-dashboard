import { FaMoon, FaBell, FaBars } from "react-icons/fa";
import ProfileMenu from "./Layout/ProdileMane";
const Topnav = ({ onClose }) => {
  return (
    <div className=" shadow sticky top-0 z-20 bg-white h-16 ">
      <div className="myContainer flex items-center  justify-between px-10 py-4">
        <div className="text-2xl font-bold text-purple-700">Username</div>
        <FaBars
          onClick={onClose}
          className="text-xl cursor-pointer sm:hidden"
        />
        <div className="flex items-center gap-3 sm:gap-6 text-xl">
          <FaMoon className=" cursor-pointer" />

          <div className="relative inline-flex">
            <div className=" text-center disabled:shadow-none">
              <FaBell className=" cursor-pointer" />
            </div>
            <span className="absolute top-0.5 right-0.5 grid min-h-3 min-w-3 translate-x-2/4 -translate-y-2/4 place-items-center rounded-full bg-red-600 py-1 px-1 text-xs text-white"></span>
          </div>

          <ProfileMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;

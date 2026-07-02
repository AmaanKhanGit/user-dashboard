import { FaMoon, FaBell, FaUserCircle, FaBars } from "react-icons/fa";
const Topnav = () => {
  return (
    <div className=" shadow sticky top-0 z-20 bg-white h-16 ">
      <div className="myContainer flex items-center  justify-between px-10 py-4">
        <div className="text-2xl font-bold text-purple-700">Username</div>
        <FaBars className="text-xl sm:hidden" />
        <div className="flex items-center gap-5">
          <FaMoon className="text-xl cursor-pointer" />
          <FaBell className="text-xl cursor-pointer" />
          <FaUserCircle className="text-xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topnav;

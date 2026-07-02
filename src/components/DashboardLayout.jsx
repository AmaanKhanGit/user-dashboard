import { useState } from "react";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";
import MobileDrawer from "./Drawers/MobileDrawer";
import DesktopDrawer from "./Drawers/DesktopDrawer";
import Overlay from "./Overlay";

const DashboardLayout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="h-full flex flex-col">
      {isOpen && <Overlay onClose={() => setOpen(false)} />}

      <Topnav onClose={() => setOpen((prev) => !prev)} />

      <div className="flex flex-1">
        <MobileDrawer
          className={`fixed bg-white md:static top-0 left-0 h-screen w-64 z-50 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
        >
          <Sidebar
            className="z-10 h-[90%] px-6 w-64 py-5 bg-white flex flex-col justify-between"
            onClose={() => setOpen(false)}
          />
        </MobileDrawer>

        <DesktopDrawer className={`max-sm:hidden`}>
          <Sidebar className="z-10 h-[90%] px-6 w-64 shadow bg-white flex flex-col justify-between" />
        </DesktopDrawer>

        <main className="flex-1 h-screen overflow-y-auto bg-gray-200 ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

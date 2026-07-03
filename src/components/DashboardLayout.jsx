import { useState } from "react";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";
import MobileDrawer from "./Drawers/MobileDrawer";
import DesktopDrawer from "./Drawers/DesktopDrawer";
import Overlay from "./Overlay";

const DashboardLayout = ({ children, className }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex h-full flex-col">
      {isOpen && <Overlay onClose={() => setOpen(false)} />}

      <Topnav onClose={() => setOpen((prev) => !prev)} />

      <div className="flex flex-1">
        <MobileDrawer
          className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white transition-transform duration-300 md:static ${isOpen ? "translate-x-0" : "-translate-x-full"} sm:hidden`}
        >
          <Sidebar
            className="z-10 flex h-full w-64 flex-col justify-between bg-white p-6"
            onClose={() => setOpen(false)}
          />
        </MobileDrawer>

        <DesktopDrawer className={`max-sm:hidden`}>
          <Sidebar className="z-10 flex h-[90%] w-64 flex-col justify-between bg-white p-6" />
        </DesktopDrawer>

        <main
          className={`h-screen flex-1 scrollbar-none overflow-y-auto bg-gray-200 p-4 ${className}`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

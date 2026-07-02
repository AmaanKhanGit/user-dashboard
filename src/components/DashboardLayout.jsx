import Sidebar from "./Sidebar";
import Topnav from "./Topnav";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-full flex flex-col">
      <Topnav />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;

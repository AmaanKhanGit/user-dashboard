import DashboardLayout from "../../components/DashboardLayout";
import DashboardHero from "./components/DashboardHero";
import ProductivityGraph from "./components/ProductivityGraph";
import RecentActivity from "./components/RecentActivity";
import StatusCards from "./components/StatusCards";
import TodaysTasks from "./components/TodaysTasks";

const Dashboard = () => {
  return (
    <DashboardLayout className="grid grid-cols-3 gap-3 max-lg:flex max-lg:flex-col">
      <DashboardHero className="col-span-2" />
      <RecentActivity className="row-span-2" />
      <StatusCards className="col-span-2" />
      <ProductivityGraph />
      <TodaysTasks />
    </DashboardLayout>
  );
};

export default Dashboard;

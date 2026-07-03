import DashboardLayout from "../../components/DashboardLayout";
import DashboardHero from "./components/DashboardHero";

const Dashboard = () => {
  return (
    <DashboardLayout className="p-5">
      <DashboardHero />
    </DashboardLayout>
  );
};

export default Dashboard;

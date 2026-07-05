import DashboardLayout from "../../components/DashboardLayout";
import ProfileCards from "./components/ProfileCards";
import AboutMe from "./components/ProfileCards";
import ProfileHero from "./components/ProfileHero";

const Profile = () => {
  const profileContent = {};
  return (
    <DashboardLayout className="flex flex-col gap-3 px-4 py-4 lg:grid lg:grid-cols-2">
      <ProfileHero className="col-span-2" />
      <ProfileCards content={profileContent} />
    </DashboardLayout>
  );
};

export default Profile;

import Button from "../../../components/Layout/Button";
const DashboardHero = () => {
  return (
    <section className="flex justify-between rounded-xl bg-white px-3 py-6 max-md:flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="flex text-3xl font-bold sm:flex-col">
          <div>Good Morning,</div>
          <div className="text-purple-700">Username</div>
        </h1>
        <p className="text-lg text-gray-400">Jun 02, 2026 Saturday</p>
        <p className="text-lg text-gray-400">
          Focus on progress not perfection <br /> Yor're doing great!
        </p>
        <div className="flex gap-3">
          <Button> + Create Task</Button>
          <Button className="hollowBtn"> View Tasks</Button>
        </div>
      </div>
      <div className="">
        <img className="w-full" src="/dashboardHero.png" alt="dashboardHero" />
      </div>
    </section>
  );
};

export default DashboardHero;

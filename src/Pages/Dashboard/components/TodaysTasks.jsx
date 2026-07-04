import Button from "../../../components/Layout/Button";
import Task from "./Task";

const TodaysTasks = () => {
  return (
    <section className="sections flex flex-col gap-3">
      <div className="flex justify-between">
        <h2 className="section-heading">Today's Tasks</h2>
        {/* <Button className="hollowBtn">View All</Button> */}
      </div>
      <div className="flex flex-col gap-3">
        <Task />
        <Task />
        <Task />
      </div>
    </section>
  );
};

export default TodaysTasks;

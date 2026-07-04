import Button from "../../../components/Layout/Button";

const ProductivityGraph = () => {
  return (
    <section className="sections">
      <div className="flex justify-between">
        <h2 className="text-xl">Productivity Overview</h2>
        <Button className="hollowBtn">This Week </Button>
        {/*thi will be a dropdown*/}
      </div>
      <div className="">
        <img className="w-full" src="/graph.png" alt="" />
      </div>
      <div className="flex justify-center rounded-xl bg-gray-100 p-4 text-sm text-gray-400">
        Great job! Your productivity is higher than last week
      </div>
    </section>
  );
};

export default ProductivityGraph;

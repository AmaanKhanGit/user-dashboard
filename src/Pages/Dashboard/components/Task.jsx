const Task = () => {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-gray-200 p-3">
      <input
        className="mt-1.5 scale-125"
        type="checkbox"
        name=""
        id=""
        disabled
      />
      <div className="flex flex-1 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-bold">Design new dashboard UI</h3>
          <p className="self-start rounded bg-red-50 px-1.5 py-1 text-sm font-medium text-red-600">
            High
          </p>
          <p className="text-xs font-medium text-gray-400">
            Due today, 11:59 PM
          </p>
        </div>
        <p className="tag self-center rounded bg-green-200 text-green-600">
          In Progress
        </p>
      </div>
    </div>
  );
};

export default Task;

const Sidebar = () => {
  const links = ["Dashboard", "Profile", "Notification", "Settings", "Help"];
  return (
    <div className="py-10 px-6 w-64 shadow max-sm:hidden">
      <div className=" flex flex-col gap-4 justify-between items-start ">
        {links.map((link) => (
          <div
            key={link}
            className="text-xl rounded w-full p-2 font-medium text-gray-700 cursor-pointer hover:bg-gray-100"
          >
            {link}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

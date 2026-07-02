import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import Settings from "./Pages/Settings/Settings";
import Help from "./Pages/Help/Help";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

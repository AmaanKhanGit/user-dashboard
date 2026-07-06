import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import Settings from "./Pages/Settings/Settings";
import Help from "./Pages/Help/Help";
import Signup from "./Pages/Auth/signup/Signup";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Help /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

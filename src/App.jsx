import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Profile from "./Pages/Profile/Profile";
import Notifications from "./Pages/Notifications/Notifications";
import Settings from "./Pages/Settings/Settings";
import Help from "./Pages/Help/Help";
import Signup from "./Pages/Auth/signup/Signup";
import Signin from "./Pages/Auth/signin/Signin";
import RegisterEmailVarify from "./Pages/Auth/RegisterEmailVarify/RegisterEmailVarify";
import RegietserSuccess from "./Pages/Auth/RegisterSuccess/RegietserSuccess";
import ForgotPassword from "./Pages/Auth/ForgotPassword/ForgotPassword";
import ForgotVarify from "./Pages/Auth/ForgotVarify/ForgotVarify";
import ResetPassword from "./Pages/Auth/ResetPassword/ResetPassword";
import ResetSuccess from "./Pages/Auth/ResetSuccess/ResetSuccess";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  { path: "/", element: <Dashboard /> },
  { path: "/profile", element: <Profile /> },
  { path: "/notifications", element: <Notifications /> },
  { path: "/settings", element: <Settings /> },
  { path: "/help", element: <Help /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/register-email-varify", element: <RegisterEmailVarify /> },
  { path: "/register-success", element: <RegietserSuccess /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/forgot-email-varify", element: <ForgotVarify /> },
  { path: "/reset-password", element: <ResetPassword /> },
  { path: "/reset-success", element: <ResetSuccess /> },
]);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  );
}

export default App;

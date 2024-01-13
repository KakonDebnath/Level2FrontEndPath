import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import App from "../App";
import Home from "../pages/Home";
import AdminLayout from "../components/Layout/AdminLayout/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //   errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>Admin Dashboard</h1>,
      },
      {
        path: "add-admin",
        element: <h1>Add Admin Page</h1>,
      },
    ],
  },
]);

export default router;

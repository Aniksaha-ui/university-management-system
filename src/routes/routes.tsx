import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Portfolio from "../pages/portfolio";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      { index: true, element: <AdminDashboard /> },
      { path: "student/create", element: <CreateStudent /> },
    ],
  },
]);

export default router;

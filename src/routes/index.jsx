import { createBrowserRouter } from "react-router-dom";
import { Home, List } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-list",
    element: <List />,
  },
]);

export default router;

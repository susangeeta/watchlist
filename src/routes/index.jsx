import { createBrowserRouter } from "react-router-dom";
import { Home, List, MovieDetails } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/my-list",
    element: <List />,
  },
  {
    path: "/details/:imdbId",
    element: <MovieDetails />,
  },
]);

export default router;

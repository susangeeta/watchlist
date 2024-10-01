import { RouterProvider } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { MovieProvider } from "./contexts";
import router from "./routes";

function App() {
  return (
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  );
}

export default App;

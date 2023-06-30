import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./routes/root";
import About from "./routes/about";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;

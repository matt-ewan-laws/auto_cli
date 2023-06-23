import { createRoot } from "react-dom/client";
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

const container = document.getElementById("app");

const root = createRoot(container)

root.render(<RouterProvider router={router} />);

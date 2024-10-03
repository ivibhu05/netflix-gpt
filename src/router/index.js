import { createBrowserRouter } from "react-router-dom";
import Login from "../components/login";
import Browse from "../components/browse";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

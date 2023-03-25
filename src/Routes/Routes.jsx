import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";
import Statistics from "../components/Statistics/Statistics";
import Topics from "../components/Topics/Topics";
import Main from "../layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Topics></Topics>,
      },
      {
        path: "/topics",
        element: <Topics></Topics>,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

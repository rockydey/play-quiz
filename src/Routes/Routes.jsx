import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import NotFound from "../components/NotFound/NotFound";
import QuizQuestion from "../components/QuizQuestion/QuizQuestion";
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
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Topics></Topics>,
      },
      {
        path: "/topics",
        loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Topics></Topics>,
      },
      {
        path: "/quiz/:quizId",
        loader: ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
          );
        },
        element: <QuizQuestion></QuizQuestion>,
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

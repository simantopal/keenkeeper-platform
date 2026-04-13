import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import Timeline from "../pages/timeline/Timeline";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Stats from "../pages/stats/Stats";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage
      },
      {
        path:"/timeline",
        Component: Timeline
      },
      {
        path: "/stats",
        Component: Stats
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  },
]);
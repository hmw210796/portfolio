import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Project";
import ExperiencePage from "./pages/Experience";
import ProjectDetail from "./pages/ProjectDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <ProjectPage />,
          },
          {
            path: ":projectId",
            element: <ProjectDetail />,
          },
        ],
      },
      {
        path: "experience",
        element: <ExperiencePage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

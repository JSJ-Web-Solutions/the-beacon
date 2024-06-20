import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import Event from "./pages/Event";
import WeeklyDungeon from "./pages/WeeklyDungeon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/guides/:id?",
        element: <Guides />,
      },
      {
        path: "/event",
        element: <Event />,
      },
      {
        path: "/weekly-dungeon",
        element: <WeeklyDungeon />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

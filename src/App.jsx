import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Guides from "./pages/Guides";
import FAQs from "./pages/FAQs";
import Event from "./pages/Event";

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
        path: "/faq/:id?",
        element: <FAQs />,
      },
      {
        path: "/event",
        element: <Event />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

import styles from "./App.module.scss";
import PageNumber from "./components/PageNumber";
import CrewPage from "./pages/CrewPage";
import DestinationPage from "./pages/DestinationPage";
import HomePage from "./pages/Homepage";
import TechnologyPage from "./pages/TechnologyPage";
import RootLayout from "./pages/Root";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/DestinationPage", element: <DestinationPage /> },
      { path: "/CrewPage", element: <CrewPage /> },
      { path: "/TechnologyPage", element: <TechnologyPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

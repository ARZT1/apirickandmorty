import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PersonajesRM from "../pages/PersonajesRM";
import Layaout from "../Layaout/Layaout";
import PersonajesDetail from "../pages/PersonajesDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layaout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/personajes",
        element: <PersonajesRM />,
      },
      {
        path: "/personajes/:id",
        element: <PersonajesDetail />,
      },
    ],
  },
]);

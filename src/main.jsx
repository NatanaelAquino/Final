import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MeusAgendamentos from "./components/MeuAgendamentos/MeusAgendamentos";
import Historico from "./components/Historico/Historico";
import Home from "./Routes/Home.jsx";
import Agendamento from "./Routes/Agendamento.jsx";
import Perfil from "./components/Perfil/Perfil.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },


      {
        path: "Agendamentos",
        element: <Agendamento />,
      },
      {
        path: "Historico",
        element: <Historico />,
      },
     
    ],
  },
  {
    path: "Perfil",
    element: <Perfil/>,
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

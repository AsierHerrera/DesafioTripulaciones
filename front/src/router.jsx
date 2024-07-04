import { createBrowserRouter, redirect } from "react-router-dom";

// Importaciones de páginas
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Courses from './pages/Courses';
import HireExperts from './pages/HireExperts';
import UserPanel from './pages/UserPanel';
import Recursos from "./pages/recursos/Recursos";
import Recurso from "./pages/recursos/Recurso";
import Eventos from "./pages/eventos/Eventos";
import Evento from "./pages/eventos/Evento";
import Subforum from "./pages/subforom/Subforum";
import SubforumDetails from "./pages/subforumDetails/SubforumDetails";
import { getOnePostInSubforumById } from "./utils/fetch";
import Landing from "./pages/Landing";
import Guias from "./pages/Guias";
import Libros from "./pages/Libros";
import DocumentacionLegalAccesibilidad from "./pages/DocumentacionLegalAccesibilidad";
import Biblioteca from "./pages/Biblioteca";
import Publicaciones from "./pages/Publicaciones";
import SilverEconomy from "./pages/SilverEconomy";
import CursosTalleres from "./pages/recursos/Recursos";
/* import PlantillasHerramientas from "./pages/PlantillasHerramientas"; */
import PERFILEMPRESA from "./pages/Proyectos/PERFILEMPRESA";
/* import CrearProyecto from "./pages/Proyectos/PERFILEMPRESA"; */
/* import ProyectosFinalizados from "./pages/ProyectosFinalizados";
import DocumentacionLegal from "./pages/DocumentacionLegal"; */
/* import Eventos from "./pages/Eventos";
import Charlas from "./pages/Charlas"; */
/* import MisDatos from "./pages/UserPanel";
import MisFormaciones from "./pages/UserPanel"; */

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />, 
    children: [
      { path: "/Landing", element: <Landing /> },
      { path: "/recursos", element: <Recursos /> },
      { path: "/recursos/:id", element: <Recurso /> },
      { path: "/foro", element: <Subforum /> },
      {
        path: "/subforum/:id",
        element: <SubforumDetails />,
        loader: ({ params }) => getOnePostInSubforumById(params.id),
      },
      { path: "/guias", element: <Guias /> },
      { path: "/libros", element: <Libros /> },
      {
        path: "/documentacion-legal-accesibilidad",
        element: <DocumentacionLegalAccesibilidad />,
      },
      { path: "/biblioteca", element: <Biblioteca /> },
      { path: "/publicaciones", element: <Publicaciones /> },
      { path: "/silver-economy", element: <SilverEconomy /> }, 
/*    { path: "/plantillas-herramientas", element: <PlantillasHerramientas /> }, */
      { path: "/proyectos", element: <PERFILEMPRESA /> },
/*    { path: "/crear-proyecto", element: <PERFILEMPRESA /> },
/*    { path: "/proyectos-finalizados", element: <ProyectosFinalizados /> }, */
/*    { path: "/documentacion-legal", element: <DocumentacionLegal /> }, */
      { path: "/eventos", element: <Eventos /> },
      { path: "/eventos/:id", element: <Evento /> },
     /* { path: "/charlas", element: <Charlas /> }, */
      { path: "/mis-datos", element: <UserPanel /> },
      { path: "/mis-formaciones", element: <UserPanel /> },
      { path: "/ajustes", element: <UserPanel /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;

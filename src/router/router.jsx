import { createBrowserRouter } from 'react-router-dom';
import Home from './../pages/Home.jsx';
import Layout from '../layout/Layout.jsx';
import About from './../pages/About.jsx';
import NotFound from './../components/Error/NotFound.jsx';
import Categories from '../pages/Categories.jsx';
import Recetario from './../pages/Recetario';
import CardReceta from './../components/CardReceta/CardReceta.jsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/categorias',
        element: <Categories />,
      },
      {
        path: '/recetas/:categoryName',
        element: <Recetario />,
      },
      {
        path: '/receta/:idMeal',
        element: <CardReceta />,
      },
      /*       {
        path: '*',
        element: <NotFound/>
      }, */
    ],
  },
]);

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import { ListagemPessoas } from '../pages/ListagemPessoas';
import { PessoasId } from '../pages/PessoasId';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: '/products',
    element: <Products />
  },
  {
    path: '/contact',
    element: <Contact />
  },
  {
    path: '/pessoas',
    element: <ListagemPessoas />
  },
  {
    path: '/nome',
    element: <PessoasId />
  }
]);

const RoutesApp: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default RoutesApp;

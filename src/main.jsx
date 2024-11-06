import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dascart from './components/Dascart/Dascart';
import Statistics from './components/Statistics/Statistics';
import History from './components/History/History';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'products/:product_id',
        element: <ProductDetail></ProductDetail>,
        loader: () => fetch('/products.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path: 'dashboard',
        element: <Dascart></Dascart>
      },
      {
        path: 'history',
        element: <History></History>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-center" autoClose={1500} />
  </StrictMode>,
)

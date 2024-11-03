import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Gadget from './assets/components/Gadget/Gadget.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Gadget></Gadget>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

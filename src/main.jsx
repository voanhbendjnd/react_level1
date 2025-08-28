import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import ProductPage from './pages/product.jsx';
import UserPage from './pages/user.jsx';
import RegisterPage from './pages/register.jsx';
import './style/global.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserPage/>,
      },
      {
        path: "/products",
        element: <ProductPage/>,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
   {
    path: "/register",
    element: <RegisterPage/>,
  },

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

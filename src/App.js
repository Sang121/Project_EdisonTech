import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
import {
  createBrowserRouter,RouterProvider
} from "react-router-dom";

import Home from './pages/Home/Home';
import './App.css';
import ProductDetails from './pages/productDetail/productDetail';
import Login from './pages/Login/login';
import Register from './pages/register/register';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: '/login',
      element:<Login/>
    },
    {
      path: '/product/:id',
      element:<ProductDetails/>
    },
    {
      path: '/register',
      element:<Register/>
    }

  ]);
  return (
    <RouterProvider
      router={router}
    >
    </RouterProvider>

    );
}
export default App;
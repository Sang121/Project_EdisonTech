import { BrowserRouter as Router,
   Switch, Routes, Route, Link } 
   from "react-router-dom";
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";
import Home from './pages/Home/Home';
import './App.css';
import ProductDetails from './pages/productDetail/productDetail';
import Login from './pages/Login/login';
import Register from './pages/register/register';
import ProfileForm from './pages/profile/profile';
import Search from './pages/Search';
import {userState} from 'react';




function setToken(userToken){
sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(){
const tokenString = sessionStorage.getItem('token');
const userToken = JSON.parse(tokenString);
return userToken?.token
}


function App() {
  // const [token, getToken] = userState();

  // if (!token) {
  //   return <Login setToken={setToken} />;
  // }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/product/:id',
      element: <ProductDetails/>
    },
    {
      path: '/search/:searchTerm',
      element: <Search/>
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/editProfile',
      element: <ProfileForm />
    }

  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;
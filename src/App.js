import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import './App.css';

import Login from './pages/Login/login';
import Register from './pages/register/register';
import ProfileForm from './pages/profile/profile';
import ProductSearch from './pages/productSearch/productSearch';
import Cart from './pages/cart/cart';
import Header from "./components/header";
import Footer from "./components/footer";
import CartPage from './pages/cartPage/cartPage';
import { useState } from "react";
import ProductDetail from "./pages/productDetail/productDetail";


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const itemIndex = cartItems.findIndex((i) => i.id === item.id);

    if (itemIndex !== -1) {
      // If the item already exists in the cart, increase its quantity by 1
      const updatedCart = [...cartItems];
      updatedCart[itemIndex].quantity += item.quantity;
      setCartItems(updatedCart);
    } else {
      // If the cart does not exist, create a new array and add the new item to it
      const updatedCart = [...cartItems, item];
      setCartItems(updatedCart);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  localStorage.setItem('cart', JSON.stringify(cartItems));

  return (
    <div>
      <Router>
      <Header/> 
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={ <ProductDetail addToCart={addToCart} />} />
          <Route path="/search/:searchTerm" element={<ProductSearch />} />
          <Route path="/register" element={<Register />} />

          <Route path="/editProfile" element={<ProfileForm />} />
          <Route path="/cart" render={() => <Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
         
        </Routes>
        <Footer/>
      </Router>



      
    </div>
  );
}
export default App;
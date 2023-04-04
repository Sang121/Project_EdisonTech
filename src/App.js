import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";

import Home from './pages/Home/Home';
import './App.css';

import Login from './pages/Login/login';
import Register from './pages/register/register';
import ProfileForm from './pages/profile/profile';
import ProductSearch from './pages/productSearch/productSearch';
import Header from "./components/header";
import Footer from "./components/footer";
import CartPage from "./pages/cartPage/cartPage"
import ProductDetail from "./pages/productDetail/productDetail";

let islogged=localStorage.getItem('islogged');
function App() {
  return (
    <div>
      <Router>
      <Header/> 
        <Routes>
         
          <Route path="/" element={<Home />} />
          
          <Route path="/login" element={ <Login />} />
          <Route path="/product/:id" element={ <ProductDetail  />} />
          <Route path="/search/:searchTerm" element={<ProductSearch />} />
          <Route path="/register" element={<Register />} />
          <Route path="/editProfile" element={ <ProfileForm/>} />
          
       
         <Route path="/cart" element={<CartPage/>} />
        </Routes>
        <Footer/>
      </Router>



      
    </div>
  );
}
export default App;
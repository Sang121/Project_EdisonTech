import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { ShoppingCartSimple } from "phosphor-react";
import logo from '../assets/logo.png';
import axios from 'axios';
import './headers.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState();
  const navigate = useNavigate();
  let islogged = localStorage.getItem('islogged')
  console.log(islogged);
  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      // Chuyển hướng đến trang Search và truyền giá trị searchTerm trong URL
      navigate(`/search/${searchTerm}`);
    }
  };
  useEffect(() => {
    try {
      axios.get('https://dummyjson.com/products?limit=10')
        .then(response => {
          setProducts(response.data.products);

        })
    }
    catch (error) {
      console.log(error);
    }
  }, []);
  const Logout = () => {
    localStorage.removeItem('islogged');
    navigate('/login')

  }
  return (
    <div className='navs d-flex column'>
      <button class="btn navbar-toggler-icon sidebar_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">☰</button>

      <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body  ">
          <a href="/editProfile" class="btn item"> Edit account infomation</a>
          <button onClick={Logout} className=' btn btn_logout item'> Log out</button>
        </div>
      </div>
      <div className="logo col-4 col-sm-2">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav col-10 row">
        <div className=' topnav d-flex justify-content-between'>
          <Link to="/" className='home-btn'>
            <button type="submit" class=" btn .btn-header "><i class="fa fa-home" > Home</i></button>
          </Link>
          <form className="d-flex search" onSubmit={handleSubmit}>
            <div class="p-1  bg-light rounded rounded-pill shadow-sm mb-4">
              <div class="input-group  search-input">
                <input type="search"
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)} placeholder="Nhập sản phẩm bạn cần tìm?"
                  aria-describedby="button-addon1" class="form-control border-0 rounded-pill bg-light" />
                <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                </div>
              </div>
            </div>
          </form>
          <div className=" login-cart">
            <Link to="/login">
              <button type="submit" class="btn .btn-header login-btn"><i class="fa fa-sign-in"> Tài khoản</i></button>
            </Link>

            <Link to="/cart">
              <button type="submit" class="btn .btn-header cart-btn"><ShoppingCartSimple size={30} /></button>
            </Link>
          </div>
        </div>

        <div className='d-flex  justify-content-between  column '>
          {products?.map((product, index) => (

            <Link className='text-black list-title' to={`/search/${product.title}`}>
              <div className='cardViewContainer' key={index}>

                <p className='titles '> {product.title}</p>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>

  );
}

export default Header;
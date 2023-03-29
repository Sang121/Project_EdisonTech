import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {ShoppingCartSimple}  from "phosphor-react";
import logo from '../assets/logo.png';
import axios from 'axios';
import './headers.css';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState();
  const navigate = useNavigate();
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
  return (
    <div className='navs d-flex column'>

      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="nav row">
        <div className=' topnav d-flex justify-content-between'>
          <Link to="/">
            <button type="submit" class=" btn .btn-header home-btn"><i class="fa fa-home" > Home</i></button>
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
          <div className="">
            <Link to="/login">
              <button type="submit" class="btn .btn-header login-btn"><i class="fa fa-sign-in"> Tài khoản</i></button>
            </Link>

            <Link to="/cart">
              <button type="submit" class="btn .btn-header cart-btn"><ShoppingCartSimple size={30}/></button>
            </Link>
          </div>
        </div>

        <div className='d-flex justify-content-between  column '>
          {products?.map((product, index) => (

            <Link className='text-black' to={`/search/${product.title}`}>
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
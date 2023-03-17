import React, { useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import './headers.css';
import { FaUserCircle } from 'react-icons/fa';
import Login from './login';
function Header() {
  return (
    <div>
     
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid color">
            <a className="navbar-brand" href="/">Shop Linh tinh</a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a href="/Home" className="nav-link active" aria-current="page" >Home</a>
                </li>
                <li className="nav-item">
                  <a href="/laptop" className="nav-link active">Laptop</a>
                </li>
                <li className="nav-item">
                  <a href="/Phone" className="nav-link active">Phone</a>
                </li>
                <li className="nav-item">
                  <a href="/tivi" className="nav-link active">Tivi</a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div className="d-flex align-items-center">
                <Link to="/login" className='btn-login'>
                  <FaUserCircle className="me-1" size={25} />
                  <span  className=" btn btn-outline-light top-link-itm-txt me-2 " >Đăng nhập</span>
                </Link>
              
                <Link to="/register">
                  <button type='button' className=" btn-outline-light btn me-2">Đăng ký</button>
                </Link>
              </div>
            </div>
          </div>
         
        </nav>
     
    </div>
  );
}

export default Header;

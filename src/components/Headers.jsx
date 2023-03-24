import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './headers.css';
import { FaUserCircle } from 'react-icons/fa';
import Login from './login';
import logo from '../assets/logo.png';

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = event => {
    event.preventDefault();
    if (searchTerm) {
      // Chuyển hướng đến trang Search và truyền giá trị searchTerm trong URL
      navigate(`/search/${searchTerm}`);
    }
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid color">
          <a href="/">
            <img src={logo} className="logo" alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="/" className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/search/laptop" value={searchTerm} className="nav-link active">
                  Laptop
                </a>
              </li>
              <li className="nav-item">
                <a href="/search/Phone" className="nav-link active">
                  Phone
                </a>
              </li>
              <li className="nav-item">
                <a href="/search/tivi" className="nav-link active">
                  Tivi
                </a>
              </li>
            </ul>

            <form className="d-flex" onSubmit={handleSubmit}>
              <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search"
              value={searchTerm}
              onChange={event => setSearchTerm(event.target.value)} placeholder="Nhập từ bạn cần tìm?"
               aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
              <div class="input-group-append">
                  <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search"></i></button>
                </div>
            </div>
          </div>
            </form>

            <div className="d-flex align-items-center">
              <Link to="/login" className="btn-login">
                <FaUserCircle className="me-1" size={25} />
                <button className=" btn-log  btn-outline-light top-link-itm-txt me-2 ">
                  Đăng nhập
                </button>
              </Link>

              <Link to="/register">
                <button type="button" className=" btn-log btn-outline-light    me-2">
                  Đăng ký
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import zIndex from "@mui/material/styles/zIndex";
import { positions } from "@mui/system";
import React from "react";
import logo from '../../assets/logo.png';
import Footer from "../../components/footer";
import SignupForm from "../../components/signupForm";


const Register = () => {
  return (
    <div>
    <a href="/">
            <img src={logo}  className="logo" alt="Logo" />
          </a>
    <SignupForm />
   
    <Footer/>
    </div>
  );
};

export default Register
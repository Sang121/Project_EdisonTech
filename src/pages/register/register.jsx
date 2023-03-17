
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Header from "../../components/Headers";
import Footer from "../../components/footer";
import SignupForm from "../../components/signupForm";


const Register = () => {
  return (
    <div>
    <Header/>
    <SignupForm/>
   
    <Footer/>
    </div>
  );
};

export default Register
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import axios from "axios";
import { postData } from "./service/request";


const LoginForm = () => {
  

  const initialValues = { email: "", password: ""};
let isLogged=false;
  const validationSchema = Yup.object({
    email: Yup.string()
    .required("Email không được bỏ trống"),
    password: Yup.string()
    .required("Mật khẩu không được bỏ trống"),
  });

  const [e, setState] = useState({
    email: "",
    password: ""
  });

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setState({
  //     ...state,
  //     [e.target.name]: value
  //   });
  // };


  const onSubmit = (e, { setSubmitting }) => {
    // setTimeout(() => {
    //   alert( `Email: ${e.email}\nPassword: ${e.password}\n`);
    //   setSubmitting(false);
    // }, 400);
    const userData = {
      email: e.email,
      password: e.password
    };
    postData("https://dummyjson.com/users/add", userData).then((response) => {
      console.log(123,e);
    });
  };



  return (
    <div className={styles.container}>
    <div className={styles.logo}  >
    <a  href="/"> <img  src={logo} className="logo" /></a>
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      // onChange={handleChange}
    >
      {({ isSubmitting }) => (

        <Form className={styles.form}>
          <h1 className={styles.h1}>Login</h1>
          
         
          <div className={styles.item}>
          
            <Field type="email"  name="email" className={styles.input} />
            <p className={styles.trong}></p>
            <ErrorMessage name="email" component="div" className={styles.error} />
            <label>Email</label>
          </div>
          <div className={styles.item} >
            <Field type="password"  name="password" className={styles.input} />
            <p className={styles.trong}><ErrorMessage name="password" component="div" className={styles.error} /></p>
            
            <label>Password</label>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </button>
      <Link className={styles.link} to="/register" >Register</Link>
      </div>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default LoginForm;
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'
import { PropTypes } from "prop-types";
import {useState} from 'react';



async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  .then(data => data.json())
}


const LoginForm = () => {
  const initialValues = { email: "", password: "", rememberMe: false };

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Email không được bỏ trống"),
    password: Yup.string()
    .required("Mật khẩu không được bỏ trống"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert( `Email: ${values.email}\nPassword: ${values.password}\nRemember me: ${
        values.rememberMe ? "Yes" : "No"
      }`);
      setSubmitting(false);
    }, 400);
  };

const [username, setUserName] = useState();
const [password, setPassword] = useState();
// const[token,setToken] = useState();
const handleSubmit = async e => {
  e.preventDefault();
  const token = await loginUser({
    username,
    password
  });
  setToken(token);
}

  return (
    <div className={styles.container}>
    <div className={styles.logo}  >
    <a  href="/"> <img  src={logo} className="logo" /></a>
    </div>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (

        <Form className={styles.form} onSubmit={handleSubmit} >
          <h1 className={styles.h1}>Login</h1>
          
         
          <div className={styles.item}>
          
            <Field type="email" onChange={e => setUserName(e.target.value)} name="email" className={styles.input} />
            <p className={styles.trong}><ErrorMessage name="email" component="div" className={styles.error} /></p>
            
            <label>Email</label>
          </div>
          <div className={styles.item} >
            <Field type="password" onChange={e => setPassword(e.target.value)} name="password" className={styles.input} />
            <p className={styles.trong}><ErrorMessage name="password" component="div" className={styles.error} /></p>
            
            <label>Password</label>
          </div>
          <div>

            <Field type="checkbox" name="rememberMe" className={styles.checkbox} />
        <label htmlFor="rememberMe" >
          Remember me
        </label>
          </div>

            <button type="submit" disabled={isSubmitting}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Login
      </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};
LoginForm.protoTypes = {
  setToken: PropTypes.func.isRequired
};
export default LoginForm();
  

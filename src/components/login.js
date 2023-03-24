import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'
import axios from "axios";

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
    const { email, password } = values;
    const data = { email, password };
    axios.post("http://http://localhost:3000/login", data)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        alert(`Email: ${email}\nPassword: ${password}\nRemember me: ${
          values.rememberMe ? "Yes" : "No"
        }`);
        setSubmitting(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
      });
      console.log(data);
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
    >
      {({ isSubmitting }) => (

        <Form className={styles.form}>
          <h1 className={styles.h1}>Login</h1>
          
         
          <div className={styles.item}>
          
            <Field type="email"  name="email" className={styles.input} />
            <p className={styles.trong}><ErrorMessage name="email" component="div" className={styles.error} /></p>
            
            <label>Email</label>
          </div>
          <div className={styles.item} >
            <Field type="password"  name="password" className={styles.input} />
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

export default LoginForm;
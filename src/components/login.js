import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'

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
import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'
import { BrowserRouter, Link, useNavigate } from "react-router-dom";


const LoginForm = () => {

  const initialValues = { username: "", password: "" };

  const navigate = useNavigate();
  let isSuccessful = false;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  console.log("a", users);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username không được bỏ trống"),
    password: Yup.string().required("Mật khẩu không được bỏ trống"),
  });

  const onSubmit = (values, { setSubmitting }) => {


    users.forEach((user) => {

      if (
        user.username === values.username && user.password === values.password) {
        isSuccessful = true;
        localStorage.setItem('islogged', JSON.stringify(isSuccessful));
        localStorage.setItem('userlogin', JSON.stringify(user))
      }
      //   phone:user.phone,
      //   address:user.address.address,
      //   name:user.firstName + ' ' + user.lastName,
      //   email:user.email
      //  }
      //  localStorage.setItem("user", JSON.stringify(userlogin));
      //  console.log(localStorage.getItem("user"));

    });

    if (isSuccessful) {
      alert("Đăng nhập thành công");


      navigate('/');

    } else {
      alert("Đăng nhập thất bại");
    }
    setSubmitting(false);
  };

  return (


    <div className={styles.container}>

      <div className={styles.logo}>
        <a href="/">
          {" "}
          <img src={logo} className="logo" />
        </a>
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
              <Field
                type="username"
                name="username"
                className={styles.input}
              />
              <p className={styles.trong}>
                <ErrorMessage
                  name="username"
                  component="div"
                  className={styles.error}
                />
              </p>
              <label>Username</label>
            </div>
            <div className={styles.item}>
              <Field
                type="password"
                name="password"
                className={styles.input}
              />
              <p className={styles.trong}>
                <ErrorMessage
                  name="password"
                  component="div"
                  className={styles.error}
                />
              </p>
              <label>Password</label>
            </div>
            <div className="margin-10">
              <button type="submit" disabled={isSubmitting}>
              <span></span>
        <span></span>
        <span></span>
        <span></span>
                Login
              </button>
              <Link className={styles.btn_reg} to="/register">
                Create an account
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>

  );
};

export default LoginForm;

import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import logo from '../assets/logo.png'
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
  const initialValues = { username: "", password: "" };
  const [dummyLoginData, setDummyLoginData] = useState([]);
  const navigate = useNavigate();
  let isSuccessful = false;
  useEffect(() => {
    const fetchDummyLoginData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setDummyLoginData(response.data.users);
     
      } catch (error) {
        console.log(error);
      }
    };
    fetchDummyLoginData();
  }, [isSuccessful]);

  const validationSchema = Yup.object({
    username: Yup.string().required("Username không được bỏ trống"),
    password: Yup.string().required("Mật khẩu không được bỏ trống"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    
    dummyLoginData.forEach(user => {
      if (
        user.username === values.username &&
        user.password === values.password
      ) {
        isSuccessful = true;
      }
    });
    if (isSuccessful) {
      alert("Đăng nhập thành công");
      navigate('/');
      localStorage.setItem('islogged', JSON.stringify(isSuccessful));
    

    } else {
      alert("Đăng nhập thất bại");
    }
    setSubmitting(false);
  };

  return (
   <div>
   {isSuccessful ? <BrowserRouter to="/" /> : 
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
        }
    </div>
  );
};

export default LoginForm;

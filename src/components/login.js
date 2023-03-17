import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./login.module.css";
import anhlogin from './anhlogin.jpg';

const LoginForm = () => {
  const initialValues = { email: "", password: "" };

  const validationSchema = Yup.object({
    email: Yup.string()
    .email("Địa chỉ email không hợp lệ")
    .required("Email không được bỏ trống"),
    password: Yup.string()
    .required("Mật khẩu không được bỏ trống"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={styles.khung}>
    
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.container}>
          <h1 className={styles.h1}>Login</h1>
          <div>
            <Field type="email" placeholder='Email' name="email" className={styles.field1} />
            <ErrorMessage name="email" component="div" className={styles.error} />
          </div>
          <div>
            <Field type="password" placeholder='Password' name="password" className={styles.field2} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          </div>
          <button type="submit" disabled={isSubmitting} className={styles.btnSubmit}>
            Login
          </button>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default LoginForm;
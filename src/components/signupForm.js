import styles from "./signup.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Tên của bạn phải có ít nhất 2 ký tự")
    .max(50, "Tên của bạn không được dài hơn 50 ký tự")
    .required("Vui lòng nhập tên người dùng"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .max(50, "Mật khẩu không được dài hơn 50 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Mật khẩu nhập lại không trùng khớp")
    .required("Bạn cần nhập lại mật khẩu"),
});
let users=[];
const onSubmit=(values, { setSubmitting }) =>{
  setSubmitting(false)
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    const userlogin ={
      username: values.username,
      password: values.password,
     
      phone:values.phone,
      address:values.address,
      name:values.name,
      email:values.email
     }
     users.push(userlogin)
     localStorage.setItem("users",JSON.stringify(users));
   
  }, 400);
  setSubmitting=true;
}
const SignupForm = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>REGISTER</h1>
    <Formik
      initialValues={
        {
        name: "",
        email: "",
        phone: "",
       adress:"",
       username: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
      
        <Form className={styles.form}>
          <div >
            <label htmlFor="name"></label>
            <Field type="text" placeholder='Name' name="name" className={styles.input} />
          </div>
          <p className={styles.khung}> <ErrorMessage name="name" component="div" className={styles.error} /> </p>
          <div>
            <label htmlFor="email"></label>
            <Field type="text" placeholder='Email' name="email" className={styles.input} />
          </div>
          <p className={styles.khung}>  <ErrorMessage name="email" component="div" className={styles.error} /></p>
          <div>
            <label htmlFor="phone"></label>
            <Field type="text" placeholder='Phone' name="phone" className={styles.input} />
          
          </div>
          
        <div>
        <label htmlFor="address"></label>
        <Field type="text" placeholder='Address' name="address" className={styles.input} />
      
      </div>
     <div>
      <label htmlFor="username"></label>
      <Field type="text" placeholder='UserName' name="username" className={styles.input} />
    
    </div>
          <div>
            <label htmlFor="password"></label>
            <Field type="password" placeholder='Password' name="password" className={styles.input} />
            
          </div>
          <p className={styles.khung}><ErrorMessage name="password" component="div" className={styles.error} /> </p>
          <div>
            <label htmlFor="confirmPassword"></label>
            <Field type="password" placeholder='Confirm Password' name="confirmPassword" className={styles.input} />
            
          </div>
          <p className={styles.khung}><ErrorMessage
              name="confirmPassword"
              component="div"
              className={styles.error}
            /> </p>
            <Link className={styles.link} to="/login" > Already have an account?</Link>
          <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
          Sing Up
          </button>
        
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default SignupForm
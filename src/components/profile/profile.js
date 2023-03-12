import styles from "./profile.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const ProfileSchema = Yup.object().shape({
  username: Yup.string()
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
  address: Yup.string()
    .required("Địa chỉ không được bỏ trống"),
});

const ProfileForm = () => {
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>PROFILE </h1>
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        password: "",
        address: "",
      }}
      validationSchema={ProfileSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
       
        <Form >
            <tr>

          <p className={styles.khung}>User name </p>
          
            <Field type="text" name="name" className={styles.input} />
            <ErrorMessage name="username" component="div" className={styles.error} />
          
          <p className={styles.khung}>Password </p>
          
            
            <Field type="password"  name="password" className={styles.input} />
            <ErrorMessage name="password" component="div" className={styles.error} />
          
            </tr>
          <p className={styles.khung}> Email</p>
        
            <Field type="email"  name="email" className={styles.input} />
            <ErrorMessage name="email" component="div" className={styles.error} />
          
          <p className={styles.khung}>Phone </p>
          
            
            <Field type="text" name="phone" className={styles.input} />
            <ErrorMessage name="phone" component="div" className={styles.error} />
          
          
          <p className={styles.khung}>Address </p>
        
            
            <Field type="password" name="address" className={styles.input} />
            <ErrorMessage
              name="address"
              component="div"
              className={styles.error}
            />
          
          <p>  </p> 
          <tr>
          <button type="submit" className={styles.btnSubmit} disabled={isSubmitting}>
          SAVE
          </button>
         

          </tr>
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default ProfileForm
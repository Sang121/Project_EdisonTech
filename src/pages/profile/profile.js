import styles from "./profile.module.css";
import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


const ProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Tên của bạn phải có ít nhất 2 ký tự")
    .max(50, "Tên của bạn không được dài hơn 50 ký tự")
    .required("Vui lòng nhập tên của bạn"),
  username: Yup.string()
    .min(2, "Tên của bạn phải có ít nhất 2 ký tự")
    .max(50, "Tên của bạn không được dài hơn 50 ký tự")
    .required("Vui lòng nhập người dùng"),
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập địa chỉ email"),
  phone: Yup.string()
    .matches(/(84|0[3|5|7|8|9])+([0-9]{8})/, "Vui lòng nhập số điện thoại hợp lệ")
    .required("Vui lòng nhập số điện thoại"),
  password: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 ký tự")
    .max(50, "Mật khẩu không được dài hơn 50 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  
});
const userLoggedIn = JSON.parse(localStorage.getItem("userlogin"));


const onSubmit = (values, { setSubmitting }) => {
  const storedUsers = JSON.parse(localStorage.getItem('users'));
  const index = storedUsers.findIndex(user => user.username === userLoggedIn.username && user.phone === userLoggedIn.phone);


  if (index !== -1) {
    storedUsers.splice(index, 1);
    storedUsers.push(values);
    localStorage.setItem('users', JSON.stringify(storedUsers));
  }


  // Cập nhật lại thông tin người dùng đang đăng nhập trong Local Storage


  alert("Change information success")
  localStorage.setItem("userlogin", JSON.stringify(values));
  setSubmitting(false);
  window.location.href = "/";

}

const ProfileForm = () => {
  return (
    <div className={styles.container} >



      <h2 className={styles.h} >General information</h2>
      <Formik
        initialValues={{
          fullName: `${userLoggedIn.fullName}`,
          email: `${userLoggedIn.email}`,
          phone: `${userLoggedIn.phone}`,
          address: `${userLoggedIn.address}`,
          username: `${userLoggedIn.username}`,

          password: "",

        }}
        validationSchema={ProfileSchema}
        onSubmit={onSubmit}
      >


        <Form className={styles.formProfile}>
          <table>
            <tr className={styles.item}>
              <th> <label htmlFor="fullName">Name</label> </th>
              <th> <Field type="text" placeholder='Full Name' name="fullName" className={styles.input} /></th>
            </tr>
            <p className={styles.khung}> <ErrorMessage name="fullName" component="div" className={styles.error} /> </p>
            <tr className={styles.item}>
              <th> <label htmlFor="email">Email</label></th>
              <th> <Field type="text" placeholder='Email' name="email" className={styles.input} /></th>
            </tr>
            <p className={styles.khung}>  <ErrorMessage name="email" component="div" className={styles.error} /></p>
            <tr className={styles.item}>
              <th> <label htmlFor="phone">Phone number</label></th>
              <th> <Field type="number" placeholder='Phone' name="phone" className={styles.input} /></th>

            </tr>
            <p className={styles.khung}> <ErrorMessage name="phone" component="div" className={styles.error} /> </p>



            <tr className={styles.item}>
              <th> <label htmlFor="address">Address</label></th>
              <th> <Field type="text" placeholder='Address' name="address" className={styles.input} /></th>

            </tr>

            <tr className={styles.item}>
              <th> <label htmlFor="username">UserName</label></th>
              <th> <Field type="text" placeholder='UserName' name="username" className={styles.input} /></th>

            </tr>
            <p className={styles.khung}> <ErrorMessage name="username" component="div" className={styles.error} /> </p>

            <tr className={styles.item}>
              <th>  <label htmlFor="password">Password</label></th>
              <th>  <Field type="password" placeholder='Password' name="password" className={styles.input} /></th>

            </tr>
            <p className={styles.khung}><ErrorMessage name="password" component="div" className={styles.error} /> </p>

            <td> <button type="submit" className={styles.btnSubmit}>
              Save
            </button></td>
          </table>
        </Form>

      </Formik>
    </div>
  );
};

export default ProfileForm
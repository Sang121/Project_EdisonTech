import React, { useState } from "react";

import styles from "./login.module.css";

export default function Login() {
  const [email, setEmail] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <p className={styles.khung}></p>
        <input
          name="email"
          type="text"
          value={email}
          placeholder='Email'
          className={styles.input}
          onChange={e => setEmail(e.target.value)}
        />
        <p className={styles.khung}></p>
        <input
          name="password"
          type="password"
          value={password}
          placeholder='Password'
          className={styles.input}
          onChange={e => setPassword(e.target.value)}
        />
        <br />
        <p><button className={styles.btnSubmit}>Logâ   In</button></p>
        
      </form>
    </div>
  );
}
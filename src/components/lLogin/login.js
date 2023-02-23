import React, { useState } from "react";

import styles from "./App.module.css";

export default function App() {
  const [username, setUserName] = useState();

  const [password, setPassword] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Password: ${password}`);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log In</h1>
      <form onSubmit={handleSubmit}>
        <p className={styles.khung}></p>
        <input
          name="email"
          type="text"
          value={username}
          placeholder='Username'
          className={styles.input}
          onChange={e => setUserName(e.target.value)}
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
        <p><button className={styles.btnSubmit}>Log In</button></p>
        
      </form>
    </div>
  );
}
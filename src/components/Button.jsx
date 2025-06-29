// import React from 'react'
import styles from "./Button.module.css";

function Button({ children, onClick, type }) {
  return (
    <button
      className={`${styles.btn} ${type == "primary" ? styles.primary : styles.back}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}
export default Button;

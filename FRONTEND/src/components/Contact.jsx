import React from "react";
import styles from "./contact.module.css";

function Contact() {
  return (
    <>
      <div className={styles.contact}>
        <form action="" className={styles.myform}>
          <h1 style={{ color: "wheat" }}>Contact Us</h1>
          <input
            type="Email"
            placeholder="Enter Email"
            className={styles.myinput}
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            className={styles.mytextarea}
          ></textarea>
          <button className={styles.btn}>
            <p className={styles.submit}>submit</p>
          </button>
        </form>
      </div>
    </>
  );
}

export default Contact;

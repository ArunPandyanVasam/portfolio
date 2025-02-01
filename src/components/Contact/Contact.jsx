import React from "react";
import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

export const Contact = () => {
  return <footer className={styles.container} id="contact">
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="arunpandyanv@gmail.com">arunpandyanv@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linked Icon" />
            <a href="https://www.linkedin.com/in/arun-vasam/">www.linkedin.com/in/arun-vasam/</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
            <a href="https://github.com/ArunPandyanVasam">github.com/ArunPandyanVasam</a>
        </li>
    </ul>
  </footer>
};

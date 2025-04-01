import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>If you have any questions or would like to connect, feel free to reach out!</p>
      </div>
      <div className={styles.linksContainer}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/emailIcon.png")}
              alt="Email Icon"
              aria-label="Email Icon"
            />
            <a href="mailto:arunpandyanv@gmail.com" target="_blank" rel="noopener noreferrer">
              arunpandyanv@gmail.com
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Icon"
              aria-label="LinkedIn Icon"
            />
            <a href="https://www.linkedin.com/in/arun-vasam/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub Icon"
              aria-label="GitHub Icon"
            />
            <a href="https://github.com/ArunPandyanVasam" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

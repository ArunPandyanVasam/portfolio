import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>If you have any questions, or just want to chat, feel free to reach out!</p>
      </div>
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
            www.linkedin.com/in/arun-vasam/
          </a>
        </li>
        <li className={styles.link}>
          <img 
            src={getImageUrl("contact/githubIcon.png")} 
            alt="GitHub Icon" 
            aria-label="GitHub Icon"
          />
          <a href="https://github.com/ArunPandyanVasam" target="_blank" rel="noopener noreferrer">
            github.com/ArunPandyanVasam
          </a>
        </li>
      </ul>
      <div className={styles.footerBottom}>
        <p>&copy; 2025 Arun Pandyan. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

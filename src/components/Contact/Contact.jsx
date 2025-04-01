import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>
          If you have any questions or would like to connect, feel free to reach
          out!
        </p>

        <div className={styles.aboutMe}>
          <h3>About Me</h3>
          <p>
            I’m a passionate software developer specializing in building dynamic
            web applications. I enjoy working on real-world problems and making
            innovative solutions.
          </p>
        </div>
      </div>

      <div className={styles.linksContainer}>
        <h3>Find Me On</h3>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
            <a href="mailto:arunpandyanv@gmail.com">arunpandyanv@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn Icon"
            />
            <a href="https://www.linkedin.com/in/arun-vasam/">LinkedIn</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png")}
              alt="GitHub Icon"
            />
            <a href="https://github.com/ArunPandyanVasam">GitHub</a>
          </li>
        </ul>
      </div>

      <div className={styles.footerBottom}>
        <p>Let's build something great together!</p>
      </div>
    </footer>
  );
};

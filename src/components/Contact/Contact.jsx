import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.contactSection}>
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out if you have any questions or would like to
          connect!
        </p>

        <div className={styles.aboutMe}>
          <h3>About Me</h3>
          <p>
            I'm a passionate software developer who enjoys building dynamic
            web applications and solving real-world problems. I thrive on
            creating innovative solutions with cutting-edge technologies.
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

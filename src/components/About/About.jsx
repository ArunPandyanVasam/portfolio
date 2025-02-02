import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Web Developer Icon"
            /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>SDE</h3> */}
              <p>
                An aspiring software developer with a diploma in Computer
                Programming. Passionate about coding, problem-solving, and
                learning new technologies. Skilled in Java, C, and Python, with
                hands-on experience in web development and database management.
                Excited to grow and contribute to real-world projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

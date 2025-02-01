import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="About Image"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Projects Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Project Developer</h3>
              <p>
                Developed multiple projects, including a Python-based voice
                recognition system (VoiceMatch-AI) and a responsive portfolio
                website using Bootstrap, HTML, CSS, and JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cybersecurity Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Enthusiast</h3>
              <p>
                Certified in Ethical Hacking and Cybersecurity, with knowledge
                of security best practices, networking fundamentals, and
                Unix-based systems.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Cloud & DevOps Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Cloud & DevOps Enthusiast</h3>
              <p>
                Familiar with cloud computing, AWS, and CI/CD pipelines using
                GitHub Actions and Jenkins to streamline deployment workflows in
                Agile environments.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/cursorIcon.png")}
              alt="Volunteer Icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Community Contributor</h3>
              <p>
                Volunteered as a Web Developer for Telangana Canada Association,
                optimizing a responsive website using React and JavaScript to
                enhance accessibility and user experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.card}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Arun Pandyan Vasam"
          className={styles.aboutImage}
        />
        <div className={styles.aboutContent}>
          <h3>Software Developer</h3>
          <p>
            Hello, I’m{" "}
            <span className={styles.highlightName}>Arun Pandyan Vasam</span>, a
            skilled Software Developer based in Brampton, Ontario. With a
            diploma in Computer Programming from Sheridan College, I specialize
            in building efficient, scalable, and user-friendly software
            solutions.
          </p>
          <p>
            My expertise spans a range of technologies, including{" "}
            <strong>
              Java, C, Python, PL/SQL, Spring Boot, .NET, React, Angular,
              MySQL, MongoDB, Shell Scripting
            </strong>
            , and cloud computing.
          </p>
          <p>
            At <strong>Infotrack Systems</strong>, I contributed to the
            development of HR and Payroll software, enhancing system performance
            through multi-threaded process integration. This improved efficiency
            and data processing for enterprise applications.
          </p>
          <p>
            One of my key projects is the Dynamic Price Surging App, a
            full-stack application built with React (frontend) and Flask
            (backend). The system dynamically adjusts food prices based on
            real-time weather conditions, utilizing API integrations for
            temperature-based surge calculations. This project showcases my
            ability to develop data-driven applications, API integrations, and
            real-time pricing strategies.
          </p>
          <p>
            Passionate about solving real-world problems, I continuously explore
            new technologies and best practices to enhance software efficiency.
            Let’s connect and collaborate on building innovative solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

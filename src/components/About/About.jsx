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
            Hi, I'm Arun Pandyan Vasam, a passionate Software Developer based in Brampton, ON. 
            With a diploma in Computer Programming from Sheridan College, I have a strong foundation in 
            object-oriented programming, data structures, and algorithms. 
          </p>
          <p>
            My expertise spans Java, C, Python, PL/SQL, Spring Boot, .NET, React, and Angular. 
            I also have hands-on experience with cloud computing, DevOps, and Agile workflows.
          </p>
          <p>
            I’ve built projects like VoiceMatch-AI, a voice recognition system, and contributed as a web developer 
            for the Telangana Canada Association to enhance accessibility and performance.
          </p>
          <p>
            I'm always eager to learn, innovate, and collaborate on impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

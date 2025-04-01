import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>Hey! I’m Arun Pandyan Vasam</h1>
        <p className={styles.name}>
          A Junior Software Developer with expertise in Java, React, Python, and cloud technologies. 
          I specialize in developing scalable applications, optimizing real-time processes, 
          and solving complex technical challenges. My focus lies in AI-driven solutions, 
          high-performance software development, and building efficient, data-driven systems.
        </p>

        <a href="mailto:arunpandyanv@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("about/aboutImage.png")}
        alt="Arun Pandyan Vasam"
        className={styles.aboutImage}
      />
    </section>
  );
};

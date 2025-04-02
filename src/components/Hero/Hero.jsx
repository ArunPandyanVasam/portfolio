import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heading}>Hey! I’m Arun Pandyan Vasam</h1>
        <p className={styles.description}>
          Junior Software Developer skilled in <strong>Java, React, Python, and Cloud Technologies</strong>.<br/>
          Passionate about <strong>AI-driven solutions</strong>, high-performance software, and data-driven systems.
        </p>
        <a href="mailto:arunpandyanv@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
    </section>
  );
};

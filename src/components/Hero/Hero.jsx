import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../Docs/resume/ArunPandyanVasam.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Hi there! Welcome to my digital space!
        </h1>
        <p className={styles.name}>
          I am <span className={styles.highlightName}>Arun</span>, an entry-level
          software developer skilled in Java, React & cloud technologies, eager
          to learn and contribute.
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

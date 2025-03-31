import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Hi there! Welcome to my digital space!
        </h1>
        <p className={styles.name}>
          I am Arun Pandyan Vasam
          a passionate Software Developer with expertise in Java, React, C++,
          and cloud technologies. Experienced in building scalable applications,
          optimizing software performance, and integrating real-time processing.
          Always eager to learn, innovate, and contribute to impactful projects.
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

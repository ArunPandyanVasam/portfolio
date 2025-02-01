import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
      <h1 className={styles.title}>Hello, I'm <br />Arun Pandyan</h1>
        <p className={styles.description}>
          An aspiring software developer with a diploma in Computer Programming.
          Passionate about coding, problem-solving, and learning new
          technologies. Skilled in Java, C, and Python, with hands-on experience
          in web development and database management. Excited to grow and
          contribute to real-world projects.
        </p>
        <a href="vasamarunpandyan@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};

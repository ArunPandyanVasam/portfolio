import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../Docs/resume/ArunPandyanVasam.pdf";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description}>
          I am Arun, an entry-level
          <br />
          software developer skilled in Java,
          <br />
          React & cloud technologies, eager
          <br />
          to learn and contribute.
        </p>
        <a href="mailto:arunpandyanv@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
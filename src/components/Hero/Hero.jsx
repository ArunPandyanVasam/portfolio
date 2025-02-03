import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import resume from "../../assets/resume/ArunPandyanVasam.pdf"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* <h1 className={styles.title}> - HELLO
        </h1> */}
        <p className={styles.description}>
          I am Arun, an entry-level 
          <br />software developer skilled in Java, 
          <br />React & cloud technologies, eager 
          <br />to learn and contribute.
        </p>
        <a href={resume} download='resume' className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      /> */}
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};

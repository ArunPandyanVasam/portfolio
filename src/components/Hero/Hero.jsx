import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Arun!</h1>
        <p className={styles.description}>I'm a entry level job seeker</p>
        <a href="vasamarunpandyan@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg}/>
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};

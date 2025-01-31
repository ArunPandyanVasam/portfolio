import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1>Hi, I'm Arun!</h1>
        <p>I'm a entry level job seeker</p>
        <a href="vasamarunpandyan@gmail.com">Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" />
      <div className={StyleSheet.topBlur} />
      <div className={StyleSheet.bottomBlur} />
    </section>
  );
};

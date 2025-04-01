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
            Hello, I’m <span className={styles.highlightName}>Arun Pandyan Vasam</span>, a skilled Software Developer based in Brampton, Ontario. With a diploma in Computer Programming from Sheridan College, I specialize in crafting efficient, scalable, and user-friendly software solutions. 
          </p>
          <p>
            I have hands-on experience in diverse technologies including{" "}
            <strong>Java, C, C++, Python, PL/SQL, Spring Boot, .NET, React, Angular, MySQL, MongoDB, Shell Scripting</strong>, and cloud computing. In addition, I’ve honed my expertise in WordPress development, custom theme and plugin creation, and REST API integrations.
          </p>
          <p>
            In my current role as a{" "}
            <strong>WordPress Development Intern at My Worthy Home</strong>, I focus on building high-performance websites by enhancing themes, optimizing SEO, and ensuring security and usability. Previously, at{" "}
            <strong>Infotrack Systems</strong>, I contributed to the development of HR and Payroll software, integrating multi-threaded processes for performance improvements.
          </p>
          <p>
            Notable projects I’ve worked on include{" "}
            <strong>VoiceMatch-AI</strong>—a Python-based voice recognition system using machine learning—and a fully responsive{" "}
            <strong>Portfolio Website</strong> built with React. My goal is to leverage these skills to develop impactful solutions that solve real-world challenges.
          </p>
          <p>
            Always focused on continuous improvement, I am passionate about solving complex problems and staying up-to-date with the latest industry trends. Let's connect and collaborate on your next big project!
          </p>
        </div>
      </div>
    </section>
  );
};

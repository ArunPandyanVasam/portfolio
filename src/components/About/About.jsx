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
            Hi, I'm{" "}
            <span className={styles.highlightName}>Arun Pandyan Vasam</span>, a
            dedicated Software Developer based in Brampton, Ontario. With a
            diploma in Computer Programming from Sheridan College, I have a
            strong foundation in system architecture, development, and
            integration.
          </p>
          <p>
            My expertise spans{" "}
            <strong>
              Java, C, C++, Python, PL/SQL, Spring Boot, .NET, React, Angular,
              MySQL, MongoDB, and Shell Scripting
            </strong>
            . I'm also experienced in cloud computing, DevOps, and CI/CD
            pipelines using GitHub Actions, Docker, and Jenkins.
          </p>
          <p>
            Professionally, I am currently working as a{" "}
            <strong>WordPress Development Intern at My Worthy Home</strong>,
            where I customized WordPress themes and plugins, integrated REST
            APIs, and optimized websites for performance, SEO, and security.
            Previously, as a <strong>Jr. Developer at Infotrack Systems</strong>
            , I contributed to HR and Payroll software, implementing
            multi-threaded processing and optimizing system performance.
          </p>
          <p>
            Some of my notable projects include <strong>VoiceMatch-AI</strong>,
            a Python-based voice recognition system utilizing machine learning,
            and a fully responsive <strong>Portfolio Website</strong> built with
            React.
          </p>
          <p>
            Passionate about problem-solving and continuous learning, I am eager
            to innovate and contribute to impactful projects. Let’s connect and
            build something great together!
          </p>
        </div>
      </div>
    </section>
  );
};

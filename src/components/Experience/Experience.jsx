// Experience.jsx
import React from "react";
import styles from "./Experience.module.css";
import experienceData from "../../data/experience.json";
import educationData from "../../data/education.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      {/* <h2 className={styles.title}>Experience & Education</h2> */}
      <div className={styles.content}>
        {/* Left Column - Experience */}
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experienceData.map((exp, index) => (
            <div key={index} className={styles.entry}>
              <div className={styles.entryHeader}>
                <img src={exp.imageSrc} alt={exp.role} className={styles.image} />
                <div className={styles.entryInfo}>
                  <h4 className={styles.role}>{exp.role}</h4>
                  <p className={styles.organisation}>{exp.organisation}</p>
                  <p className={styles.date}>
                    {exp.startDate} - {exp.endDate}
                  </p>
                </div>
              </div>
              <ul className={styles.list}>
                {exp.experiences.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right Column - Education */}
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.entry}>
              <div className={styles.entryHeader}>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.date}>{edu.graduationDate}</p>
              </div>
              <p className={styles.description}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

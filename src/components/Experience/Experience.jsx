import React from "react";
import styles from "./Experience.module.css";
import experienceData from "../../data/experience.json";
import educationData from "../../data/education.json";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Experience</h2>
          {experienceData.map((exp, index) => (
            <div key={index} className={styles.entry}>
              <div className={styles.entryHeader}>
                <img
                  src={exp.imageSrc}
                  alt={exp.role}
                  className={styles.image}
                />
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

        <div className={styles.column}>
          <h2 className={styles.sectionTitle}>Education</h2>
          {educationData.map((edu, index) => (
            <div key={index} className={styles.entry}>
              <div className={styles.entryInfo}>
                <h4 className={styles.degree}>{edu.degree}</h4>
                <p className={styles.institution}>{edu.institution}</p>
                <p className={styles.date}>
                  {edu.graduationStartDate} - {edu.graduationEndDate}
                </p>
              </div>
              <p className={styles.description}>{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.cardImage}
      />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <ul className={styles.cardSkills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.cardSkill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.cardLinks}>
        <a href={demo} className={styles.cardLink} target="_blank">
          Demo
        </a>
        <a href={source} className={styles.cardLink} target="_blank">
          Source
        </a>
      </div>
    </div>
  );
};

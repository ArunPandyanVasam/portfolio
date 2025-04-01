import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.card}>
      {/* 📸 Project Image */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`Preview of ${title}`}
        className={styles.cardImage}
      />

      {/* 🏷 Project Title */}
      <h3 className={styles.cardTitle}>{title}</h3>

      {/* 📖 Description */}
      <p className={styles.cardDescription}>{description}</p>

      {/* 🔹 Skills Used */}
      <ul className={styles.cardSkills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.cardSkill}>
            {skill}
          </li>
        ))}
      </ul>

      {/* 🔗 Links */}
      <div className={styles.cardLinks}>
        <a
          href={demo}
          className={styles.cardLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View live demo of ${title}`}
        >
          Live Demo
        </a>
        {source && (
          <a
            href={source}
            className={styles.cardLinkSecondary}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}`}
          >
            Source Code
          </a>
        )}
      </div>
    </div>
  );
};

import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2><br/><br/>
        <a href="https://www.linkedin.com/in/naga-h-chadalavada" className={styles.contactBtn}>
          Let's Connect
        </a>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hanuca3536@gmail.com">hanuca3536@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/naga-h-chadalavada">linkedin.com/in/naga-h-chadalavada</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Hanu3536">https://github.com/Hanu3536</a>
        </li>
      </ul>
    </footer>
  );
};
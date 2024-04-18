import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Expertise</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                As a front-end developer, I focus mainly on the functinality and user interface and experience to provide smooth navigation throughout the website.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/*<img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />*/}
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
              In backend development, I utilized SQL databases for data storage and AWS Cognito for authentication services, alongside implementing JSON-based RESTful APIs for seamless data retrieval and manipulation.  
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            {/*<img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />*/}
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I preferred Figma because it has an excellent flexibility to create any visualized user interface helps developers to acheive the best practices.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
import React from "react";
import styles from "./Intro.module.css";
import { getFileUrl, getImageUrl } from "../../utils";


export const Intro = () => {
  
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Naga H Chadalavada</h1>
        <p className={styles.description}>
          Experienced frontend developer specialized in creating dynamic responsive websites that prioritize user experience.
        </p>
        <a href={getFileUrl('hero/Resume-Naga Ch.pdf')} target="blank" className={styles.contactBtn}>
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
import React, { useState } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2><br /><br />
        <a href="#" onClick={toggleModal} className={styles.contactBtn}>
          Let's Connect
        </a>
        {showModal && (
          <form className={styles.showForm}>
            <div className={styles.form}>
              <div className={styles.content}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" />
              </div>
            </div>
            <div classname={styles.footer}>
              <button className={styles.submit} type="submit">Submit</button>
              <button className= {styles.close} onClick={toggleModal} type="button">Close</button>
            </div>
          </form>

        )}
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
          <a href="https://github.com/Hanu3536?tab=repositories">https://github.com/Hanu3536</a>
        </li>
      </ul>
    </footer>
  );
};
import React, { useState } from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  /*const [showModal, setShowModal] = useState(false);
  const toggleModal = (event) => {
    event.preventDefault();
    setShowModal(!showModal);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submit logic here
    console.log("Form submitted");
  };*/
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2><br /><br />
        <a href="https://www.linkedin.com/in/naga-h-chadalavada" target= "blank" className={styles.contactBtn}>
          Let's Connect
        </a>
        {/*{showModal && (
          <form className={styles.showForm}>
            <div className={styles.form}>
              <div className={styles.content}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" />
              </div>
            </div>
            <div classname={styles.footer}>
              <button className={styles.submit} type="submit">Submit</button>
              <button className= {styles.close} onClick={toggleModal} type="button">Close</button>
            </div>
          </form>
        )}*/}
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:hanuca3536@gmail.com" target= "blank">hanuca3536@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/naga-h-chadalavada" target= "blank">linkedin.com/in/naga-h-chadalavada</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Hanu3536?tab=repositories" target= "blank">https://github.com/Hanu3536</a>
        </li>
      </ul>
    </footer>
  );
};
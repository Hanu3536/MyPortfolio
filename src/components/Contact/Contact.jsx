import React, {useState, useEffect, useRef} from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  const [showForm, setShowForm] = useState(false);
  const[message, setMessage] = useState("");
  const[showMessage, setShowMessage] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        // Clicked outside of the form, close the form
        setShowForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleConnectClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmit = (e) => {
    // Handle form submission
    e.preventDefault();
    console.log('Form submitted!');
    setMessage("Received your message. I will get back to you soon!");
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
    // You can send form data to backend or perform other actions here
    handleCloseForm();
  };

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2><br /><br />
        <button className={styles.contactBtn} onClick={handleConnectClick}>
          Let's Connect
        </button>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" loading="lazy"/>
          <a href="mailto:hanuca3536@gmail.com" target= "blank">hanuca3536@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" loading="lazy"/>
          <a href="https://www.linkedin.com/in/naga-h-chadalavada" target= "blank">linkedin.com/in/naga-h-chadalavada</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" loading="lazy"/>
          <a href="https://github.com/Hanu3536?tab=repositories" target= "blank">https://github.com/Hanu3536</a>
        </li>
      </ul>
      {showForm && (
        <div className={styles.modal} ref = {formRef}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseForm}>&times;</span>
            <h2>Let's Connect</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              <div className={styles.formGroup}>
                <button type="submit">Submit</button>
              </div>
            </form>
            {showMessage && (
              <div className={styles.message}>{message}</div>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};
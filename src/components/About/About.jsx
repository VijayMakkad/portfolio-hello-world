import React from "react";
import about from "../../assets/about/aboutImage.png";
import cursor from "../../assets/about/cursorIcon.png";
import uil from "../../assets/about/uiIcon.png";
import server from "../../assets/about/serverIcon.png";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={about} alt="" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursor} alt="" />
            <div className={styles.aboutItemtext}>
                <h3>Fullstack Developer</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </li >
          <li className={styles.aboutItem}>
            <img src={server} alt="" />
            <div className={styles.aboutItemtext}>
                <h3>Machine Learning</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uil} alt="" />
            <div className={styles.aboutItemtext}>
                <h3>Something else</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;

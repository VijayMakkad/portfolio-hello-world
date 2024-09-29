import React from 'react'
import profile from '../../assets/hero/heroImage.jpeg'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, Myself Vijay!</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sim ipsum, commodi deserunt ullam.</p>
        <a href="mailto:vijaymakkad0104@gmail.com" className={styles.contactMe}>Contact Me</a>
      </div>
      <img src={profile} alt="image" className={styles.heroImage}/>
      <div className={styles.topBlur}/>
      <div className={styles.bottomBlur}/>
    </section>
  )
}

export default Hero

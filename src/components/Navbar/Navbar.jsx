import React from "react";
import styles from "./Navbar.module.css";
import { useState } from "react";
import hamburger from "../../assets/nav/menuIcon.png";
import cross from "../../assets/nav/closeIcon.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Vijay Makkad
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={showMenu ? cross : hamburger}
          alt="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        />
        <ul className={`${styles.menuItems} ${showMenu && styles.showMenu }`}onClick={()=>setShowMenu(false)} >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#about">Experience</a>
          </li>
          <li>
            <a href="#about">Projects</a>
          </li>
          <li>
            <a href="#about">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

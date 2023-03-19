import styles from "./MainNavigation.module.scss";
import companyLogo from "../assets/shared/logo.svg";
import hamburgerBtn from "../assets/shared/icon-hamburger.svg";
import closeBtn from "../assets/shared/icon-close.svg";

import { useState } from "react";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("clicked");
  };

  const navClassList = `${styles["nav-class-list"]} ${
    isNavOpen ? styles.active : ""
  }`;

  return (
    <header className={styles.wrapper}>
      <a>
        <img src={companyLogo} alt="Company Logo" />
      </a>
      <button className={styles.hamburger} onClick={toggleNav}>
        <img src={hamburgerBtn} alt="A hamburger nav menu button" />
      </button>
      <nav className={navClassList}>
        <ul className={styles["ul-list"]}>
          <li className={styles["close-btn-li"]}>
            <button className={styles.close} onClick={toggleNav}>
              <img src={closeBtn} alt="A button that closes the nav bar" />
            </button>
          </li>
          <li>
            <a className={styles["nav-link"]}>
              <span className={styles["nav-link-number"]}>00</span> Home
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]}>
              <span className={styles["nav-link-number"]}>01</span> Destination
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]}>
              <span className={styles["nav-link-number"]}>02</span> Crew
            </a>
          </li>
          <li>
            <a className={styles["nav-link"]}>
              <span className={styles["nav-link-number"]}>03</span> Technology
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

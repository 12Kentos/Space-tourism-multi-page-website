import styles from "./MainNavigation.module.scss";
import companyLogo from "../assets/shared/logo.svg";
import hamburgerBtn from "../assets/shared/icon-hamburger.svg";
import closeBtn from "../assets/shared/icon-close.svg";

import { useState } from "react";

import { Link } from "react-router-dom";

const MainNavigation = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    console.log("clicked");
  };

  const navClassList = `${styles["nav-class-list"]} ${
    isNavOpen ? styles.active : ""
  }`;

  const wrapperClassList = `${styles.wrapper} ${
    isNavOpen ? styles.active : ""
  }`;

  const [currentTab, setCurrentTab] = useState(0);

  const currentTabHandler = (number) => {
    setCurrentTab(number);
  };

  return (
    <header className={wrapperClassList}>
      <Link to="/" onClick={() => currentTabHandler(0)}>
        <img src={companyLogo} alt="Company Logo" />
      </Link>
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
            <Link
              to="/"
              className={
                currentTab === 0
                  ? `${styles["nav-link"]} ${styles.current}`
                  : styles["nav-link"]
              }
              onClick={() => currentTabHandler(0)}
            >
              <span className={styles["nav-link-number"]}>00</span> Home
            </Link>
          </li>
          <li>
            <Link
              to="/DestinationPage"
              className={
                currentTab === 1
                  ? `${styles["nav-link"]} ${styles.current}`
                  : styles["nav-link"]
              }
              onClick={() => currentTabHandler(1)}
            >
              <span className={styles["nav-link-number"]}>01</span> Destination
            </Link>
          </li>
          <li>
            <Link
              to="/CrewPage"
              className={
                currentTab === 2
                  ? `${styles["nav-link"]} ${styles.current}`
                  : styles["nav-link"]
              }
              onClick={() => currentTabHandler(2)}
            >
              <span className={styles["nav-link-number"]}>02</span> Crew
            </Link>
          </li>
          <li>
            <Link
              to="/TechnologyPage"
              className={
                currentTab === 3
                  ? `${styles["nav-link"]} ${styles.current}`
                  : styles["nav-link"]
              }
              onClick={() => currentTabHandler(3)}
            >
              <span className={styles["nav-link-number"]}>03</span> Technology
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;

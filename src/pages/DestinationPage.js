import styles from "./DestinationPage.module.scss";
import moonPic from "../assets/destination/image-moon.webp";
import marsPic from "../assets/destination/image-mars.webp";
import europaPic from "../assets/destination/image-europa.webp";
import titanPic from "../assets/destination/image-titan.webp";

import { useReducer } from "react";

const DestinationPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <img className={styles.img} src={moonPic} alt="Picture of the moon" />
        <div className={styles["info-wrapper"]}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li>
                <a className={styles.destination}>Moon</a>
              </li>
              <li>
                <a className={styles.destination}>Mars</a>
              </li>
              <li>
                <a className={styles.destination}>Europa</a>
              </li>
              <li>
                <a className={styles.destination}>Titan</a>
              </li>
            </ul>
          </nav>
          <h1 className={styles.h1}>Moon</h1>
          <p className={styles["main-text"]}>
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className={styles["specs-wrapper"]}>
            <p className={styles["main-info"]}>
              Avg. Distance
              <span className={styles.numbers}>384,400KM</span>
            </p>
            <p className={styles["main-info"]}>
              Est. Travel Time
              <span className={styles.numbers}>3 Days</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationPage;

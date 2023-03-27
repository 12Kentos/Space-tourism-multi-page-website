import styles from "./DestinationPage.module.scss";
import moonPic from "../assets/destination/image-moon.webp";
import marsPic from "../assets/destination/image-mars.webp";
import europaPic from "../assets/destination/image-europa.webp";
import titanPic from "../assets/destination/image-titan.webp";

import { useState } from "react";

const DestinationPage = () => {
  const originalDestination = "Moon";
  const originalParagraph =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  const originalDistance = "384,400KM";
  const originalTime = "3 Days";
  const originalImg = moonPic;
  const [toggleCurrent, setToggleCurrent] = useState(1);

  const moonHandler = () => {
    setDestination(originalDestination);
    setParagraph(originalParagraph);
    setDistance(originalDestination);
    setTime(originalTime);
    setImage(originalImg);
    setToggleCurrent(1);
  };

  const marsHandler = () => {
    setDestination("Mars");
    setParagraph(
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!"
    );
    setDistance("225 Mil. Km");
    setTime("9 Months");
    setImage(marsPic);
    setToggleCurrent(2);
  };

  const europaHandler = () => {
    setDestination("Europa");
    setParagraph(
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    );
    setDistance("628 Mil. Km");
    setTime("3 Years");
    setImage(europaPic);
    setToggleCurrent(3);
  };

  const titanHandler = () => {
    setDestination("Titan");
    setParagraph(
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    );
    setDistance("1.6 Bil. Km");
    setTime("7 Years");
    setImage(titanPic);
    setToggleCurrent(4);
  };

  let [destination, setDestination] = useState(originalDestination);
  let [paragraph, setParagraph] = useState(originalParagraph);
  let [distance, setDistance] = useState(originalDistance);
  let [time, setTime] = useState(originalTime);
  let [image, setImage] = useState(originalImg);

  return (
    <>
      <div className={styles.wrapper}>
        <img
          className={styles.img}
          src={image}
          alt="Picture of the destination"
        />
        <div className={styles["info-wrapper"]}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li>
                <button
                  className={
                    toggleCurrent === 1
                      ? `${styles.destination} ${styles.current}`
                      : styles.destination
                  }
                  onClick={moonHandler}
                >
                  Moon
                </button>
              </li>
              <li>
                <button
                  className={
                    toggleCurrent === 2
                      ? `${styles.destination} ${styles.current}`
                      : styles.destination
                  }
                  onClick={marsHandler}
                >
                  Mars
                </button>
              </li>
              <li>
                <button
                  className={
                    toggleCurrent === 3
                      ? `${styles.destination} ${styles.current}`
                      : styles.destination
                  }
                  onClick={europaHandler}
                >
                  Europa
                </button>
              </li>
              <li>
                <button
                  className={
                    toggleCurrent === 4
                      ? `${styles.destination} ${styles.current}`
                      : styles.destination
                  }
                  onClick={titanHandler}
                >
                  Titan
                </button>
              </li>
            </ul>
          </nav>
          <h1 className={styles.h1}>{destination}</h1>
          <p className={styles["main-text"]}>{paragraph}</p>
          <div className={styles["specs-wrapper"]}>
            <p className={styles["main-info"]}>
              Avg. Distance
              <span className={styles.numbers}>{distance}</span>
            </p>
            <p className={styles["main-info"]}>
              Est. Travel Time
              <span className={styles.numbers}>{time}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DestinationPage;

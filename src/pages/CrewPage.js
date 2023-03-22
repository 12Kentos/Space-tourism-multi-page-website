import styles from "./CrewPage.module.scss";
import douglas from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.webp";
import { useState } from "react";

const CrewPage = () => {
  const originalImg = douglas;
  const originalParagraph =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  const originalTitle = "Commander";
  const originalPerson = "Douglas Hurley";

  let [image, setImage] = useState(originalImg);
  let [paragraph, setParagraph] = useState(originalParagraph);
  let [title, setTitle] = useState(originalTitle);
  let [person, setPerson] = useState(originalPerson);

  const douglasHandler = () => {
    setImage(douglas);
    setParagraph(
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
    );
    setTitle("Commander");
    setPerson("Douglas Hurley");
  };

  const markHandler = () => {
    setImage(mark);
    setParagraph(
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
    );
    setTitle("Mission Specialst");
    setPerson("Mark Shuttleworth");
  };

  const victorHandler = () => {
    setImage(victor);
    setParagraph(
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. "
    );
    setTitle("Pilot");
    setPerson("Victor Glover");
  };

  const anoushehHandler = () => {
    setImage(anousheh);
    setParagraph(
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. "
    );
    setTitle("Flight Engineer");
    setPerson("Anousheh Ansari");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["img-wrapper"]}>
          <img
            className={styles.img}
            src={image}
            alt="Picture of the crew Member"
          />
        </div>
        <ul className={styles.ul}>
          <li>
            <button className={styles.button} onClick={douglasHandler}></button>
          </li>
          <li>
            <button className={styles.button} onClick={markHandler}></button>
          </li>
          <li>
            <button className={styles.button} onClick={victorHandler}></button>
          </li>
          <li>
            <button
              className={styles.button}
              onClick={anoushehHandler}
            ></button>
          </li>
        </ul>
        <div className={styles["text-wrapper"]}>
          <p className={styles.title}>{title}</p>
          <h1 className={styles.person}>{person}</h1>
          <p className={styles.paragraph}>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default CrewPage;

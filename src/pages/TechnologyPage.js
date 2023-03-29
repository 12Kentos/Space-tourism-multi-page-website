import { useState } from "react";
import styles from "./TechnologyPage.module.scss";
import PageNumber from "../components/PageNumber";

const TechnologyPage = () => {
  const originalParagraph =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  const originalCraft = "Launch Vehicle";

  let [paragraph, setParagraph] = useState(originalParagraph);
  let [craft, setCraft] = useState(originalCraft);
  let [imgClasses, setImgClasses] = useState(
    `${styles["img"]} ${styles["img-1"]}`
  );
  const [toggleCurrent, setToggleCurrent] = useState(1);

  const launchVehicleHandler = () => {
    setParagraph(originalParagraph);
    setCraft(originalCraft);
    setToggleCurrent(1);
    setImgClasses(`${styles["img"]} ${styles["img-1"]}`);
  };

  const spaceportHandler = () => {
    setParagraph(
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    );
    setCraft("Spaceport");
    setToggleCurrent(2);
    setImgClasses(`${styles["img"]} ${styles["img-2"]}`);
  };

  const spaceCapsuleHandler = () => {
    setParagraph(
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    );
    setCraft("Space Capsule");
    setToggleCurrent(3);
    setImgClasses(`${styles["img"]} ${styles["img-3"]}`);
  };

  return (
    <>
      <PageNumber number={"03"} text={"Space Launch 101"} />
      <div className={styles.wrapper}>
        <div className={imgClasses}></div>
        <ul className={styles.ul}>
          <li>
            <button
              className={
                toggleCurrent === 1
                  ? `${styles.button} ${styles.current}`
                  : styles.button
              }
              onClick={launchVehicleHandler}
            >
              1
            </button>
          </li>
          <li>
            <button
              className={
                toggleCurrent === 2
                  ? `${styles.button} ${styles.current}`
                  : styles.button
              }
              onClick={spaceportHandler}
            >
              2
            </button>
          </li>
          <li>
            <button
              className={
                toggleCurrent === 3
                  ? `${styles.button} ${styles.current}`
                  : styles.button
              }
              onClick={spaceCapsuleHandler}
            >
              3
            </button>
          </li>
        </ul>
        <div className={styles["text-wrapper"]}>
          <p className={styles.terminology}>The Terminology...</p>
          <h1 className={styles.craft}>{craft}</h1>
          <p className={styles.info}>{paragraph}</p>
        </div>
      </div>
    </>
  );
};

export default TechnologyPage;

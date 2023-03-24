import styles from "./TechnologyPage.module.scss";

const TechnologyPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles["img-wrapper"]}>
          <img className={styles.img} />
        </div>
        <ul className={styles.ul}>
          <li>
            <button className={styles.button}>1</button>
          </li>
          <li>
            <button className={styles.button}>2</button>
          </li>
          <li>
            <button className={styles.button}>3</button>
          </li>
        </ul>
        <div className={styles["text-wrapper"]}>
          <p>The Terminology...</p>
          <h1>Launch Vehicle</h1>
          <p>
            A launch vehicle or carrier rocket is a rocket-propelled vehicle
            used to carry a payload from Earth's surface to space, usually to
            Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful
            in operation. Standing 150 metres tall, it's quite an awe-inspiring
            sight on the launch pad!
          </p>
        </div>
      </div>
    </>
  );
};

export default TechnologyPage;

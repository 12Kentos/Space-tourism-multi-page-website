import { Link } from "react-router-dom";
import styles from "./Homepage.module.scss";

const HomePage = () => {

  return (
    <div className={styles.wrapper}>
      <div className={styles["inner-wrapper"]}>
        <div className={styles["text-wrapper"]}>
          <h1 className={styles.title}>
            So, you want to travel to <div className={styles.space}>Space</div>
          </h1>
          <p className={styles["main-info"]}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles["explore-wrapper"]}>
          <p className={styles.explore}>
            Explore
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

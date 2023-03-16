import styles from "./PageNumber.module.scss";

const PageNumber = () => {
  return (
    <h1 className={`${styles.number} ${styles["number-header"]}`}>
      <span className={styles.number}>01</span>Pick your destination
    </h1>
  );
};

export default PageNumber;

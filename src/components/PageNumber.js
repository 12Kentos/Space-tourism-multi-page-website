import styles from "./PageNumber.module.scss";

const PageNumber = (props) => {
  return (
    <h1 className={`${styles.number} ${styles["number-header"]}`}>
      <span className={styles.number}>{props.number}</span>
      {props.text}
    </h1>
  );
};

export default PageNumber;

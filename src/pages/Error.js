import MainNavigation from "../components/MainNavigation";
import styles from "./Error.module.scss";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div className={styles.wrapper}>
        <p className={styles.h1}>Page doesn't exist!</p>
        <p className={styles.p}>Plese navigate to another page!</p>
      </div>
    </>
  );
}

export default ErrorPage;

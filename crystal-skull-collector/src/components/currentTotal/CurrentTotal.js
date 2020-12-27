import styles from "./currentTotal.module.css";

const CurrentTotal = ({ total }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Current: {total}</p>
    </div>
  );
};

export default CurrentTotal;

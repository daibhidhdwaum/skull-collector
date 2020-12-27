import styles from "./targetNumber.module.css";

const TargetNumber = ({ target }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Target: {target}</p>
    </div>
  );
};

export default TargetNumber;

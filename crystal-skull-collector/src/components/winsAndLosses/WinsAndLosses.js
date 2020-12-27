import styles from "./winsAndLosses.module.css";

const WinsAndLosses = ({ wins, losses }) => {
  return (
    <div className={styles.container}>
      <p className={styles.paragraph}>Wins: {wins}</p>
      <p className={styles.paragraph}>Losses: {losses}</p>
    </div>
  );
};

export default WinsAndLosses;

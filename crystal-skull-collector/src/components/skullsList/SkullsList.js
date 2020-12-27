import styles from "./skullsList.module.css";

const SkullsList = ({ skulls, setCurrentTotal }) => {
  const skullList = skulls.map((skull) => {
    return (
      <li key={skull.id} className={styles.skull}>
        <button
          className={styles.skullButton}
          onClick={(e) => setCurrentTotal(e, skull.assignedNumber)}
        >
          <img src={skull.src} alt="skull" className={styles.skullImage} />
        </button>
      </li>
    );
  });
  return <ul className={styles.skulls}>{skullList}</ul>;
};

export default SkullsList;

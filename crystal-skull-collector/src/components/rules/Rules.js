import styles from "./Rules.module.css";

const Rules = () => {
  return (
    <section className={styles.rules}>
      <p className={styles.paragraph}>
        You will be given a random target number at the beginning of the game.
      </p>
      <p className={styles.paragraph}>
        Each skull holds a point value that will be revealed to you upon
        clicking and then added to your point score. These points will change
        when you start a new game.
      </p>
      <p className={styles.paragraph}>
        To win the game match the random number. If your score goes above the
        random number you lose the game.
      </p>
    </section>
  );
};

export default Rules;

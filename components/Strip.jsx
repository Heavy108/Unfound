import styles from "../css/AnimatedTextStrip.module.css";

export default function AnimatedTextStrips() {
  const text = " UNFOUND STUDIO  • ";
  const repeatedText = text.repeat(20); // Adjust based on screen width

  return (
    <div className={styles.container}>
      {/* First strip - moving left */}
      <div className={`${styles.strip} ${styles.strip1}`}>
        <div className={`${styles["moving-text"]} ${styles["moving-left"]} font-satoshi`}>
          <span className={styles.text}>{repeatedText}</span>
          <span className={styles.text}>{repeatedText}</span>
        </div>
      </div>

      {/* Second strip - moving right */}
      <div className={`${styles.strip} ${styles.strip2}`}>
        <div className={`${styles["moving-text"]} ${styles["moving-right"]} font-satoshi`}>
          <span className={styles.text}>{repeatedText}</span>
          <span className={styles.text}>{repeatedText}</span>
        </div>
      </div>
    </div>
  );
}

import styles from "../css/AnimatedTextStrip.module.css";

export default function AnimatedTextStrips() {
  const words = "UNFOUND STUDIO";
  const separator = "•"; 
  const repeatCount = 20; 

  const repeatedText = Array.from({ length: repeatCount }, (_, i) => (
    <span key={i} className={styles.item}>
      <span className={styles.word}>{words}</span>
      <span className={styles.separator}>{separator}</span>
    </span>
  ));

  return (
    <div className={styles.container}>
      <div className={`${styles.strip} ${styles.strip1}`}>
        <div
          className={`${styles["moving-text"]} ${styles["moving-left"]} font-satoshi`}
        >
          {repeatedText}
          {repeatedText}
        </div>
      </div>

      {/* Second strip - moving right */}
      <div className={`${styles.strip} ${styles.strip2}`}>
        <div
          className={`${styles["moving-text"]} ${styles["moving-right"]} font-satoshi`}
        >
          {repeatedText}
          {repeatedText}
        </div>
      </div>
    </div>
  );
}

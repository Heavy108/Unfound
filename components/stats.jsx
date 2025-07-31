import styles from "../css/stats.module.css";
import Gradient2 from "../assets/Gradient2.png";
import Gradient2_1 from "../assets/Gradient2.1.png"
import Image from "next/image";
// import { Marquee } from "./magicui/marquee";
import MarqueeDemo from "./logocarausel";

export default function Stats() {
  const stats = [
    { value: "25+", label: "Projects Shipped" },
    { value: "90%", label: "Client Retention" },
    { value: "6+", label: "Countries Served" },
    { value: "45%", label: "Conversion Uplift" },
  ];

  return (
    <>
      <section className={`${styles.container} relative `}>
        {/* Background Image */}
        <Image
          src={Gradient2}
          alt="gradient background"
          fill
          className={styles.grad}
          priority
        />
        <Image
          src={Gradient2_1}
          alt="gradient background"
          width={1200} // replace with your actual image width
          height={300}
          className={styles.grad2} 
          
        />

        {/* Foreground content */}
        <div className={styles.Statscard}>
          <h2 className={styles.heading}>Proven by Results</h2>
          <div className={styles.grid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <p className={styles.value}>{stat.value}</p>
                <div className={styles.label}>
                  <span className={styles.dot}>●</span>
                  <p>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <MarqueeDemo />
      </section>
    </>
  );
}

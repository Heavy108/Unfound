import styles from "../css/stats.module.css";
import Gradient2 from "../assets/Gradient2.png";
import Gradient2_1 from "../assets/Gradient2_1.png";
import Image from "next/image";
import MarqueeDemo from "./logocarausel";
import { NumberTicker } from "./magicui/number-ticker";
import { useInView } from "@/hooks/useInView"

export default function Stats() {
  const stats = [
    { value: 25, suffix: "+", label: "Projects Shipped" },
    { value: 90, suffix: "%", label: "Client Retention" },
    { value: 6, suffix: "+", label: "Countries Served" },
    { value: 45, suffix: "%", label: "Conversion Uplift" },
  ];

  const [sectionRef, inView] = useInView({ threshold: 0.3 }); // 30% visible

  return (
    <section ref={sectionRef} className={`${styles.container} relative`}>
      {/* Background Image */}
      <Image
        src={Gradient2}
        alt="gradient background"
        width={1200}
        height={300}
        className={styles.grad}
        priority
      />
      <Image
        src={Gradient2_1}
        alt="gradient background"
        width={800}
        height={300}
        className={styles.grad2}
      />

      {/* Foreground content */}
      <div className={styles.extradiv}>
        <div className={styles.Statscard}>
          <h2 className={`${styles.heading} font-cabinet`}>
            Proven by Results
          </h2>
          <div className={styles.grid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.experiment}>
                <div className={styles.statItem}>
                  <p className={`${styles.value} font-cabinet`}>
                    {inView ? (
                      <NumberTicker
                        value={stat.value}
                        className={`${styles.value} font-cabinet text-white`}
                      />
                    ) : (
                      0
                    )}
                    <span className={styles.suffix}>{stat.suffix}</span>
                  </p>
                  <p className={`${styles.label} font-satoshi`}>
                    <span className={styles.dot}>●</span> {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <MarqueeDemo />
    </section>
  );
}

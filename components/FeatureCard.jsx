import Image from "next/image";
import style from "../css/FeatureCard.module.css";

function FeatureCard({ image, tech1, tech2, desc }) {
  return (
    <div className={style.container}>
      <div className={style.potrait}>
        <Image src={image} alt={desc || "Feature image"} />
      </div>

      <div className={style.introduction}>
        <button>{tech1}</button>
        <button>{tech2}</button>
      </div>

      <h1 className={style.desc}>{desc}</h1>
    </div>
  );
}

export default FeatureCard;

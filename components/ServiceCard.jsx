import style from "../css/ServiceCard.module.css";
import Image from "next/image";
import MotionDesign from "@/assets/MotionDesign.svg"

export default function ServiceCard({ title, logo, description, image}) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.introduction}>
          <div className={style.heading}>
            <h1>{title}</h1>
            <span className={style.logo}>{logo}</span>
          </div>
          <p>{description}</p>
        </div>
        <div className={style.potrait}>
          <img src={image.src} alt={title} className={style.svgFix} />
        </div>
      </div>
    </div>
  );
}

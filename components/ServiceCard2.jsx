import style from "../css/ServiceCard2.module.css";
import Image from "next/image";

export default function ServiceCard2({ title, logo, description, image }) {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <div className={style.introduction}>
          <div className={style.heading}>
            <h1 className="font-cabinet">{title}</h1>
            <span className={style.logo}>{logo}</span>
          </div>
          <p className="font-satoshi">{description}</p>
        </div>
        <div className={style.potrait}>
          <Image src={image} height={400} width={400} alt={title} />
        </div>
      </div>
    </div>
  );
}

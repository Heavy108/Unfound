import style from "../css/ReasonCard.module.css";
import Image from "next/image";

export default function ReasonCard2({ title, description, image }) {
  return (
    <div className={style.container2}>
      <div className={style.card}>
        <div className={style.introduction}>
          <div className={style.heading}>
            <h1 className="font-cabinet">{title}</h1>
            {/* <span className={style.logo}>{logo}</span> */}
          </div>
          <p className="font-satoshi">{description}</p>
        </div>
        <div className={style.potrait2}>
          <Image
            src={image.assets[0].p} // <-- extract base64
            width={image.assets[0].w}
            height={image.assets[0].h}
            alt={title}
            priority
            unoptimized
            // className={style.card2img}
          />
        </div>
      </div>
    </div>
  );
}

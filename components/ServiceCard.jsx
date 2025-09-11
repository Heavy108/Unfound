import style from "../css/ServiceCard.module.css";
import Image from "next/image";
import { MagicCard } from "./magicui/magic-card";

export default function ServiceCard({ title, logo, description, image}) {
  return (
    <MagicCard className="p-0.25 rounded-[2rem]">
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
            <Image
              src={image.assets[0].p} // base64 string
              alt={title}
              className={style.svgFix}
              width={image.assets[0].w}
              height={image.assets[0].h}
              // unoptimized
            />
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

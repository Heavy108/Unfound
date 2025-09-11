import style from "../css/ServiceCard2.module.css";
import Image from "next/image";
import { MagicCard } from "./magicui/magic-card";

export default function ServiceCard2({ title, logo, description, image }) {
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
              src={image.assets[0].p}
              alt={title}
              className={style.svgFix}
              width={800} // <-- required
              height={400} // <-- required
              unoptimized
            />
          </div>
        </div>
      </div>
    </MagicCard>
  );
}

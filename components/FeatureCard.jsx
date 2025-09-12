import Image from "next/image";
import style from "../css/FeatureCard.module.css";
import Link from "next/link";
import { FollowerPointerCard } from "./ui/following-pointer";
function FeatureCard({ image, tech1, tech2, desc,link }) {
  return (
    <div className={style.container}>
      <FollowerPointerCard >
        <div className={style.potrait}>
          <div className={style.wrapper}>
            <Link href={link}>
              <Image src={image} alt={desc || "Feature image"} />
            </Link>
          </div>
        </div>
      </FollowerPointerCard>

      <div className={style.introduction}>
        <button className="font-satoshi">{tech1}</button>
        <button className="font-satoshi">{tech2}</button>
      </div>

      <h1 className={`${style.desc} font-cabinet`}>{desc}</h1>
    </div>
  );
}

export default FeatureCard;

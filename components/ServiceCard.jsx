import style from "../css/ServiceCard.module.css"
import MotionDesign from "../assets/MotionDesign.png"
import ux from "../assets/ux.png"
import Image from "next/image"
import { LuHand } from "react-icons/lu";
export default function ServiceCard(){
return (
  <>
    <center className="text-4xl text-white">HEllo</center>

    <div className={style.container}>
      <div className={style.card}>
        <div className={style.introduction}>
          <div className={style.heading}>
            <h1>UX Design</h1>
            <span className={style.logo}>
              {" "}
              <LuHand />
            </span>
          </div>
          <p>
            Crafting intuitive, user-centered app experiences that drive
            engagement and clarity.
          </p>
        </div>
        <div className={style.potrait}>
          <Image
            src={MotionDesign}
            height={400}
            width={500}
            alt="motion design"
          />
        </div>
      </div>
    </div>
  </>
);
}


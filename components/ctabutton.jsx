import GlareHover from "./GlareHover";
import { ArrowUpRight } from "lucide-react";
import style from "../css/Home.module.css";

export default function CTAButton({ name = "Click Me", param = true }) {
  return (
    <GlareHover
      width="fit-content" // shrink-wrap to button
      height="fit-content"
      background="transparent" // no background
      borderRadius="999px" // keep pill glare
      glareColor="#ffffff"
      glareOpacity={0.9}
      glareAngle={-45}
      glareSize={200}
      transitionDuration={600}
      className="inline-block"
    >
      <button className={`font-satoshimedium ${style.lets}`}>
        {name}
        {param && (
          <span className={style.icons2}>
            <ArrowUpRight size={24} />
          </span>
        )}
      </button>
    </GlareHover>
  );
}

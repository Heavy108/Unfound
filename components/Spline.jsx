'use client'
import Spline from "@splinetool/react-spline";
import style from "../css/Home.module.css"
export default function HeroSpline() {
  // Wrapper styles to isolate scroll/touch events


  return (
    <div
      className={style.animation}
      onWheel={(e) => e.stopPropagation()} // Stop wheel events bubbling
      onTouchMove={(e) => e.stopPropagation()} // Stop touch events bubbling
    >
      <Spline scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode" />
    </div>
  );
}

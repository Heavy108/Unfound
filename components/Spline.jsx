"use client";

import Lottie from "lottie-react";
import { FollowerPointerCard } from "./ui/following-pointer";

// import fallback from "@/assets/HeroImage.png";
import style from "@/css/Home.module.css";
import animation from "@/assets/other/animation.json";
export default function Hero() {
  return (
    <main className={style.animation}>
      <center>
        <FollowerPointerCard title="You">
          <Lottie animationData={animation} loop={true} className="rounded-4xl"/>
        </FollowerPointerCard>
      </center>
    </main>
  );
}

"use client";

import Image from "next/image";
import fallback from "@/assets/HeroImage.png";
import style from "@/css/Home.module.css";

export default function Hero() {
  return (
    <main className={style.animation}>
      <center>
        <Image
          src={fallback}
          alt="Hero visual"
          width={800}
          height={400}
          className="mt-[2rem]"
          priority
        />
      </center>
    </main>
  );
}

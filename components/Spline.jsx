"use client";

import { useState } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import fallback from "@/assets/Experience.png"
import style from "@/css/Home.module.css"
export default function HeroSpline() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <main className={style.animation}>
      {/* Loading Spinner */}
      {loading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-sm">Loading 3D experience...</p>
        </div>
      )}

      {/* Fallback image */}
      {hasError ? (
        <Image
          src={fallback}
          alt="Fallback visual"
          fill
          className="object-cover"
          priority
        />
      ) : (
        <Spline
          scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode"
          style={{ pointerEvents: "none" }}
          onLoad={() => setLoading(false)} // hide spinner
          onError={(err) => {
            console.error("Spline failed:", err);
            setHasError(true);
            setLoading(false);
          }}
        />
      )}
    </main>
  );
}

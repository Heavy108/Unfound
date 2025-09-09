"use client";

import { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import fallback from "@/assets/HeroImage.png";
import style from "@/css/Home.module.css";
import { fail } from "assert";

export default function HeroSpline() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas");
    if (!canvas) return;

    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn("WebGL context lost, switching to fallback...");
      setHasError(true);
      // setLoading(false);
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost, false);
    };
  }, [loading]);
useEffect(() =>{
  setHasError(true)
  // setLoading(false)
})
  return (
    <main ref={containerRef} className={style.animation}>
      {/* Loading Spinner */}
      {loading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent z-10">
          <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin"></div>
          <p className="mt-4 text-white text-sm">Loading 3D experience...</p>
        </div>
      )}

      {/* Fallback image (only covers animation area) */}
      {hasError ? (
        <center>
          <Image
            src={fallback}
            alt="Fallback visual"
            width={800}
            height={400}
            className="-z-10 mt-[2rem]"
            priority
          />
        </center>
      ) : (
        <Spline
          scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode"
          style={{ pointerEvents: "none" }} // no user interaction
          onLoad={() => setLoading(false)}
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

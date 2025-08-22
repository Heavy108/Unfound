"use client";

import { useState, useEffect, useRef } from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import fallback from "@/assets/Experience.png";
import style from "@/css/Home.module.css";

export default function HeroSpline() {
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    // Monkey-patch for passive events
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function (
      type,
      listener,
      options
    ) {
      if (type === "wheel" || type === "touchmove" || type === "touchstart") {
        if (typeof options === "object") {
          options.passive = true;
        } else {
          options = { passive: true };
        }
      }
      return originalAddEventListener.call(this, type, listener, options);
    };

    return () => {
      EventTarget.prototype.addEventListener = originalAddEventListener; // restore on unmount
    };
  }, []);

  useEffect(() => {
    const canvas = containerRef.current?.querySelector("canvas");
    if (!canvas) return;

    const handleContextLost = (e) => {
      e.preventDefault();
      console.warn("WebGL context lost, switching to fallback...");
      setHasError(true);
      setLoading(false);
    };

    canvas.addEventListener("webglcontextlost", handleContextLost, false);
    return () => {
      canvas.removeEventListener("webglcontextlost", handleContextLost, false);
    };
  }, [loading]);

  return (
    <main ref={containerRef} className={style.animation}>
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

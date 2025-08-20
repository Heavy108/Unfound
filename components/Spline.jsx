"use client";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import style from "../css/Home.module.css";

export default function HeroSpline() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Save original addEventListener
    const originalAddEventListener = EventTarget.prototype.addEventListener;

    // Override addEventListener
    EventTarget.prototype.addEventListener = function (
      type,
      listener,
      options
    ) {
      if (
        (type === "wheel" || type === "touchstart" || type === "touchmove") &&
        options !== false
      ) {
        if (typeof options === "object") {
          options = { ...options, passive: true };
        } else {
          options = { passive: true };
        }
      }
      return originalAddEventListener.call(this, type, listener, options);
    };

    return () => {
      // cleanup on unmount
      EventTarget.prototype.addEventListener = originalAddEventListener;
    };
  }, []);

  return (
    <div className={style.animation}>
      {!isLoaded && !hasError && (
        <div className={style.loader}>
          <p>Loading 3D scene...</p>
        </div>
      )}

      {hasError ? (
        <div className={style.error}>
          <p>⚠️ Failed to load 3D scene. Please try again later.</p>
        </div>
      ) : (
        <Spline
          scene="https://prod.spline.design/BdBvQQ2ZpuUKIjVw/scene.splinecode"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}
    </div>
  );
}

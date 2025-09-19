"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "@/assets/other/loader.json";
export default function LoadingScreen({ onFinish }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Automatically hide after animation (example: 3s)
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onFinish) onFinish();
    }, 3000); // adjust time to match your animation length

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[250px] h-[250px]">
        <Lottie animationData={animationData} loop={false} />
      </div>
    </div>
  );
}

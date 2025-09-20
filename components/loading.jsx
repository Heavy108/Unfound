"use client";

import Lottie from "lottie-react";
import animationData from "@/assets/other/loader.json";

export default function Loading({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 bg-black flex items-center justify-center z-[9999] transition-opacity duration-700 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="w-[250px] h-[250px]">
        <Lottie animationData={animationData} loop={true} />
      </div>
    </div>
  );
}

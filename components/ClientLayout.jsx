"use client";
import { useState } from "react";
import LoadingScreen from "@/components/loading";

export default function ClientLayout({ children }) {
  const [loadingDone, setLoadingDone] = useState(false);

  return (
    <>
      {!loadingDone && <LoadingScreen onFinish={() => setLoadingDone(true)} />}

      <div
        className={`transition-opacity duration-700 ${
          loadingDone ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>
    </>
  );
}

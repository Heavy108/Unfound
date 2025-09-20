"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  // Loader only on first mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loading isVisible={loading} />
      {children}
    </>
  );
}

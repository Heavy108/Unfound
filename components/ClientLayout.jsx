"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Loader on first mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Loader on route change
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <Loading isVisible={loading} />
      {children}
    </>
  );
}

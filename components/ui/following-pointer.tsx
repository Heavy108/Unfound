"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa6";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  // Update rect on scroll and resize
  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
        // force re-calc (but we don’t actually need to store rect in state)
        ref.current.getBoundingClientRect();
      }
    };

    window.addEventListener("scroll", updateRect);
    window.addEventListener("resize", updateRect);

    return () => {
      window.removeEventListener("scroll", updateRect);
      window.removeEventListener("resize", updateRect);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const currentRect = ref.current?.getBoundingClientRect();
    if (currentRect) {
      const relativeX = e.clientX - currentRect.left;
      const relativeY = e.clientY - currentRect.top;
      x.set(relativeX);
      y.set(relativeY);
    }
  };

  return (
    <div
      onMouseLeave={() => setIsInside(false)}
      onMouseEnter={() => setIsInside(true)}
      onMouseMove={handleMouseMove}
      style={{ cursor: "none" }}
      ref={ref}
      className={cn("relative", className)}
    >
      <AnimatePresence>
        {isInside && <FollowPointer x={x} y={y} title={title} />}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
}) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{ scale: 1, opacity: 1 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
    >
      <motion.div
        style={{
          background:
            "linear-gradient(250deg, #29F99E -12.84%, #4EFFF0 118.51%)",
          padding: "0.5rem 1.5rem",
        }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className="min-w-max flex gap-1 rounded-full bg-neutral-200 px-2 py-2 text-[1rem] font-satoshimedium whitespace-nowrap text-black"
      >
        {title ?? (
          <>
            View Project{" "}
            <span className="flex items-center -rotate-45">
              <FaArrowRight size={24} />
            </span>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  MotionValue,
} from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";


export const FollowerPointerCard = ({
  children,
  className,
  title,
  showIcon = true, // ✅ new prop with default true
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
  showIcon?: boolean;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [isInside, setIsInside] = useState<boolean>(false);

  useEffect(() => {
    const updateRect = () => {
      if (ref.current) {
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
        {isInside && (
          <FollowPointer x={x} y={y} title={title} showIcon={showIcon} />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  title,
  showIcon = true, // ✅ optional prop
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
  showIcon?: boolean;
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
      {showIcon && ( // ✅ conditional render
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[8px] -translate-y-[4px] -rotate-[70deg] transform stroke-[#1FAA60] text-[#1FAA60]"
          height="1.6rem"
          width="1.3rem"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
      )}
      {title ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          className="bg-[#1FAA60] w-[2.8rem]  px-[0.62rem] py-[0.25rem] ml-3 rounded-[0.32rem]" // 🔹 keep blank, you can design this separately
        >
          <span className="flex justify-center items-center text-white">{title}</span>
        </motion.div>
      ) : (
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
          View Project{" "}
          <span className="flex items-center">
            <ArrowUpRight size={24} />
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

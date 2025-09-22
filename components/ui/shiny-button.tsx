"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "motion/react";
import React from "react";

const hoverAnimationProps: MotionProps = {
  initial: { "--x": "100%", scale: 1, x: 0 },
  whileHover: {
    "--x": "-100%",
    scale: 1.05,
    x: 4, // slight translate on hover
  },
  whileTap: { scale: 0.95, x: 2 },
  transition: {
    type: "spring",
    stiffness: 50,
    damping: 12,
    mass: 1,
    duration: 1.5,
  },
};

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "relative cursor-pointer flex items-center justify-between text-center font-satoshi font-medium z-20",
        "rounded-[6.25rem] border border-[#4EFFF0] px-6 py-3 text-[0.8rem]",
        "bg-[linear-gradient(250deg,#29F99E_-12.84%,#4EFFF0_118.51%)] text-black",
        className
      )}
      {...hoverAnimationProps}
      {...props}
    >
      <span
        className="relative block size-full  tracking-wide"
        style={{
          maskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
          WebkitMaskImage:
            "linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg,var(--primary)/10% calc(var(--x)+20%),var(--primary)/50% calc(var(--x)+25%),var(--primary)/10% calc(var(--x)+100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";

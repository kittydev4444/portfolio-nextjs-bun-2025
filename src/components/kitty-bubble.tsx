"use client";

import { KittyIcons } from "@/types";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import React, { useEffect, useState } from "react";
import { cn } from "../utils/cn";

// Define all available icons
export const allKittyIcons = [
  "cat-face",
  "cat",
  "grinning-cat-face",
  "smiling-cat-face-with-open-mouth",
  "grinning-cat-face-with-smiling-eyes",
  "cat-with-tears-of-joy",
  "smiling-cat-face-with-heart-eyes",
  "cat-with-wry-smile",
  "kissing-cat-face-with-closed-eyes",
  "weary-cat-face",
  "crying-cat-face",
  "pouting-cat-face",
  "black-cat",
] as const;

type KittyBubbleProps = {
  className?: string;
  icon?: KittyIcons;
  size?: "sm" | "md" | "lg";
  color?: string;
  delay?: number;
  animate?: boolean;
};

export default function KittyBubble({
  className,
  icon,
  size = "md",
  color = "bg-gradient-to-br from-kitty-pink-hot to-kitty-blue",
  delay = 0,
  animate = true,
}: KittyBubbleProps) {
  const [currentIcon, setCurrentIcon] = useState<KittyIcons>(
    icon || allKittyIcons[0],
  );

  useEffect(() => {
    if (icon) return;

    const interval = setInterval(() => {
      setCurrentIcon((prevIcon) => {
        let newIcon;

        do {
          newIcon =
            allKittyIcons[Math.floor(Math.random() * allKittyIcons.length)];
        } while (newIcon === prevIcon); // Ensure it changes

        return newIcon;
      });
    }, 5000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [icon]);

  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex items-center justify-center rounded-full p-3",
        sizeClasses[size],
        color,
        animate ? "animate-bubble-float shadow-lg" : "",
        className,
      )}
    >
      <motion.div
        key={currentIcon}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="h-full w-full"
      >
        <Icon icon={`noto:${currentIcon}`} className="h-full w-full" />
      </motion.div>
    </motion.div>
  );
}

export const KittyBubbleWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  return <div className={cn("absolute z-10", className)}>{children}</div>;
};

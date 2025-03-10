"use client";

import { Icon } from "@iconify/react";
import { useEffect, useMemo, useState } from "react";

type StarProps = {
  top: string;
  left: string;
  size: string;
  delay: number;
};

function Star({ top, left, size, delay }: StarProps) {
  return (
    <div
      className="star absolute z-10"
      style={{
        top,
        left,
        fontSize: size,
        animationDelay: `${delay}s`,
      }}
    >
      <Icon icon="lucide:star" />
    </div>
  );
}

type RandomStarsProps = {
  count?: number;
};

export default function RandomStars({ count = 10 }: RandomStarsProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set state to true once the component is rendered on the client
  }, []);

  const stars = useMemo(() => {
    const result = [];

    for (let i = 0; i < count; i++) {
      result.push({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 1.5 + 0.5}rem`,
        delay: Math.random() * 5,
      });
    }

    return result;
  }, [count]);

  if (!isClient) return null; // Return null while the component is being hydrated

  return (
    <>
      {stars.map((star) => (
        <Star
          key={star.id}
          top={star.top}
          left={star.left}
          size={star.size}
          delay={star.delay}
        />
      ))}
    </>
  );
}

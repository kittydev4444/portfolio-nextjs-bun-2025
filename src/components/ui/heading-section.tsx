import { cn } from "@/utils/cn";
import * as motion from "motion/react-client";

type HeadingSectionProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export function HeadingSection({
  title,
  subtitle,
  className,
}: HeadingSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={cn("mb-12 text-center", className)}
    >
      <h2 className="relative mb-2 inline-block text-3xl font-bold md:text-4xl">
        {title}
        <span className="absolute -bottom-1 left-0 right-0 h-1 animate-jiggle bg-gradient-to-r from-kitty-pink-hot to-kitty-blue" />
      </h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-2xl text-kitty-dark/70 dark:text-kitty-light/70">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}

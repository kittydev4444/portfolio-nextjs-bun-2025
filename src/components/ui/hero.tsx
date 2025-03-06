import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import Image from "next/image";
import KittyBubble from "../kitty-bubble";
import RandomStars from "../random-star";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-20"
    >
      {/* Background gradient */}
      <div className="to-kitty-blue/20 dark:from-kitty-dark dark:to-kitty-darker light:bg-cyber-grid dark:bg-cyber-grid-dark absolute inset-0 z-0 bg-gradient-to-br from-white bg-[size:50px_50px]" />

      <RandomStars count={15} />

      {/* Floating kitty bubbles */}
      <div className="absolute right-10 top-20 z-10">
        <KittyBubble
          size="md"
          className="from-kitty-pink to-kitty-green-pale bg-gradient-to-br"
          delay={2}
        />
      </div>
      <div className="absolute bottom-20 left-10 z-10">
        <KittyBubble
          size="sm"
          className="from-kitty-green-pale to-kitty-orange bg-gradient-to-br"
          delay={1}
        />
      </div>
      <div className="absolute left-20 top-40 z-10">
        <KittyBubble
          size="lg"
          className="from-kitty-orange-pale to-kitty-pink bg-gradient-to-br"
        />
      </div>
      <div className="absolute bottom-40 right-20 z-10">
        <KittyBubble
          size="sm"
          className="from-kitty-blue-light to-kitty-pink-hot bg-gradient-to-br"
          delay={1.5}
        />
      </div>

      <div className="container z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="font-bubblegum mb-4 text-4xl font-bold md:text-6xl">
              <span className="block">Meowllo! I&lsquo;m</span>
              <span className="from-kitty-pink-hot to-kitty-blue neon-text bg-gradient-to-r bg-clip-text text-transparent">
                Kitty Developer
              </span>
            </h1>
            <p className="text-kitty-dark/80 dark:text-kitty-light/80 mb-8 text-xl">
              A{" "}
              <span className="relative inline-block">
                <span className="from-kitty-pink-hot to-kitty-blue animate-jiggle absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r" />
                cyberpunk
              </span>{" "}
              frontend developer who creates purr-fect web experiences with a
              touch of feline magic.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="font-bubblegum from-kitty-pink-hot to-kitty-blue bg-gradient-to-r text-white shadow-lg transition-all hover:shadow-xl"
                endContent={<Icon icon="lucide:arrow-right" />}
                as="a"
                href="#projects"
              >
                See My Purrjects
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="font-bubblegum border-kitty-blue dark:border-kitty-blue-light text-kitty-blue dark:text-kitty-blue-light"
                as="a"
                href="#contact"
              >
                Meow At Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-1 justify-center"
          >
            <div className="relative">
              <div className="from-kitty-pink-hot to-kitty-blue animate-float gradient-border h-64 w-64 rounded-full bg-gradient-to-br p-1 md:h-80 md:w-80">
                <div className="dark:bg-kitty-dark relative h-full w-full overflow-hidden rounded-full bg-white">
                  <Image
                    src="/assets/images/hero-img.jpg"
                    alt="Picture of the author"
                    className="absolute -top-10 h-[380px] w-[380px] object-cover"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
              <div className="dark:bg-kitty-dark absolute -bottom-4 -right-4 rounded-full bg-white p-2 shadow-lg">
                <div className="from-kitty-green-pale to-kitty-green rounded-full bg-gradient-to-br p-2">
                  <Icon
                    icon="noto:cat-with-tears-of-joy"
                    className="h-10 w-10"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

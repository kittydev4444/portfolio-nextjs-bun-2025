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
      className="relative flex min-h-screen items-center overflow-hidden pt-40 font-nunito sm:pt-0"
    >
      {/* Background gradient */}

      <RandomStars count={15} />

      {/* Floating kitty bubbles */}
      <div className="absolute right-10 top-20 z-10">
        <KittyBubble
          size="md"
          className="bg-gradient-to-br from-kitty-pink to-kitty-green-pale"
          delay={2}
        />
      </div>
      <div className="absolute bottom-20 left-10 z-10">
        <KittyBubble
          size="sm"
          className="bg-gradient-to-br from-kitty-green-pale to-kitty-orange"
          delay={1}
        />
      </div>
      <div className="absolute top-24 z-10 md:left-20 md:top-40">
        <KittyBubble
          size="lg"
          className="bg-gradient-to-br from-kitty-orange-pale to-kitty-pink"
        />
      </div>
      <div className="absolute bottom-40 right-20 z-10">
        <KittyBubble
          size="sm"
          className="bg-gradient-to-br from-kitty-blue-light to-kitty-pink-hot"
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
            <h1 className="mb-4 font-bubblegum text-4xl font-bold md:text-6xl">
              <span className="block">Meowllo! I&lsquo;m</span>
              <span className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue bg-clip-text text-transparent neon-text">
                Kitty Developer
              </span>
            </h1>
            <p className="mb-8 text-xl text-kitty-dark/80 dark:text-kitty-light/80">
              A{" "}
              <span className="relative inline-block">
                <span className="absolute -bottom-1 left-0 right-0 h-2 animate-jiggle bg-gradient-to-r from-kitty-pink-hot to-kitty-blue" />
                cyberpunk
              </span>{" "}
              frontend developer who creates purr-fect web experiences with a
              touch of feline magic.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue font-bubblegum text-white shadow-lg transition-all hover:shadow-xl"
                endContent={<Icon icon="lucide:arrow-right" />}
                as="a"
                href="#projects"
              >
                See My Purrjects
              </Button>
              <Button
                size="lg"
                variant="bordered"
                className="border-kitty-blue font-bubblegum text-kitty-blue dark:border-kitty-blue-light dark:text-kitty-blue-light"
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
              <div className="gradient-border h-64 w-64 animate-float rounded-full bg-gradient-to-br from-kitty-pink-hot to-kitty-blue p-1 md:h-80 md:w-80">
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-kitty-dark">
                  <Image
                    src="/assets/images/hero-img.jpg"
                    alt="Picture of the author"
                    className="absolute -top-10 h-[380px] w-[380px] object-cover"
                    width={380}
                    height={380}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-white p-2 shadow-lg dark:bg-kitty-dark">
                <div className="rounded-full bg-gradient-to-br from-kitty-green-pale to-kitty-green p-2">
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

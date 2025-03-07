import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@heroui/navbar";
import NextLink from "next/link";

import { GithubIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { Button } from "@heroui/button";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
export const Navbar = () => {
  return (
    <HeroUINavbar
      isBlurred
      isBordered
      shouldHideOnScroll
      className="fixed bg-white/70 backdrop-blur-md dark:bg-kitty-dark/70"
    >
      <NavbarBrand>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <Icon icon="noto:cat-face" className="h-8 w-8" />
          <p className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue bg-clip-text font-bubblegum font-bold text-inherit">
            Kitty<span className="text-kitty-orange">Dev</span>
          </p>
        </motion.div>
      </NavbarBrand>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        {siteConfig.navItems.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <NextLink
                color="foreground"
                href={item.href}
                className="group relative font-bubblegum"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-1 w-0 bg-gradient-to-r from-kitty-pink-hot to-kitty-blue transition-all duration-300 group-hover:w-full" />
              </NextLink>
            </motion.div>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4 sm:hidden" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent
        justify="end"
        className="hidden basis-1/5 sm:flex sm:basis-full"
      >
        <NavbarItem className="hidden gap-2 sm:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeSwitch />
          </motion.div>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              as={Link}
              color="primary"
              href="#contact"
              variant="flat"
              className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue font-bubblegum text-white shadow-lg"
            >
              Meow At Me!
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};

import { resumeLinks, siteConfig, socialLinks } from "@/config/site";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 dark:bg-kitty-dark">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col items-center justify-between md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 flex items-center gap-2 md:mb-0"
          >
            <Icon icon="noto:cat-with-tears-of-joy" className="h-8 w-8" />
            <p className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue bg-clip-text font-bubblegum text-xl font-bold text-transparent">
              Kitty<span className="text-kitty-orange">Dev</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {siteConfig.navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-kitty-dark/70 transition-colors hover:text-kitty-pink-hot dark:text-kitty-light/70 dark:hover:text-kitty-pink-hot"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-4 flex gap-4 md:mt-0"
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-kitty-dark/70 transition-colors hover:text-kitty-pink-hot dark:text-kitty-light/70 dark:hover:text-kitty-pink-hot"
              >
                <Icon icon={link.icon} className="h-5 w-5" />
              </a>
            ))}

            <a
              href={resumeLinks.url}
              target="_blank"
              title="Resume"
              rel="noopener noreferrer"
              className="text-kitty-dark/70 transition-colors hover:text-kitty-pink-hot dark:text-kitty-light/70 dark:hover:text-kitty-pink-hot"
            >
              <Icon icon={resumeLinks.icon} className="h-5 w-5" />
            </a>
          </motion.div>
        </div>

        <div className="border-t border-gray-200 pt-6 text-center dark:border-gray-700">
          <p className="text-kitty-dark/60 dark:text-kitty-light/60">
            © {new Date().getFullYear()} KittyDev. All rights reserved.
          </p>
          <p className="mt-1 text-sm text-kitty-dark/60 dark:text-kitty-light/60">
            Made with <span className="text-kitty-pink-hot">♥</span> and lots
            of catnip
          </p>
        </div>
      </div>
    </footer>
  );
}

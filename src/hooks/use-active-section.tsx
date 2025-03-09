import { siteConfig } from "@/config/site";
import React from "react";

export function useActiveSection() {
  const [activeSection, setActiveSection] = React.useState("home");

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navItems.map((item) => ({
        id: item.href.replace("#", ""),
        offset:
          document.getElementById(item.href.replace("#", ""))?.offsetTop || 0,
      }));

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
}

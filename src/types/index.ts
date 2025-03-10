import { allKittyIcons } from "@/components/kitty-bubble";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Experience = {
  icon: string;
  title: string;
  description: string;
  period: string;
  details?: string;
};

export type Skill = {
  name: string;
  icon: string;
  color: string;
};

export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export type SocialLink = {
  name: string;
  url: string;
  icon: string;
};

export type KittyIcons = (typeof allKittyIcons)[number];

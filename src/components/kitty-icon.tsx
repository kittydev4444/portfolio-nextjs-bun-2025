import { KittyIcons } from "@/types";
import { Icon } from "@iconify/react";

type KittyIconProps = {
  icon: KittyIcons;
};

export default function KittyIcon({ icon }: KittyIconProps) {
  return <Icon icon={`noto:${icon}`} className="text-4xl" />;
}

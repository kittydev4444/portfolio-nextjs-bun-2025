import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";

import { Skill } from "@/types";
import { cn } from "../utils/cn";

type SkillCardProps = {
  skill: Skill;
  index: number;
};

export function SkillCard({ skill, index }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-none shadow-md transition-all hover:shadow-lg">
        <CardBody className="flex flex-col items-center justify-center gap-3 p-6">
          <div className={cn(`text-4xl`, skill.color)}>
            <Icon icon={skill.icon} color={skill.color} />
          </div>
          <p className="font-medium">{skill.name}</p>
        </CardBody>
      </Card>
    </motion.div>
  );
}

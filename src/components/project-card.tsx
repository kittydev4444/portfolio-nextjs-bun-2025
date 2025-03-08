import { Project } from "@/types";
import { Button } from "@heroui/button";
import { Card, CardBody, CardFooter } from "@heroui/card";
import { Chip } from "@heroui/chip";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
    >
      <Card
        radius="lg"
        className="gradient-border h-full overflow-hidden border-none bg-white/80 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-kitty-dark/80"
      >
        <div className="group relative">
          <Image
            src={project.image}
            alt={project.title}
            className="h-48 w-full bg-gradient-to-t from-black/80 to-transparent object-cover transition-transform duration-400 ease-in-out group-hover:scale-110"
            width={1000}
            height={1000}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-transform duration-400 ease-in-out group-hover:scale-110" />
          <h3 className="absolute bottom-2 left-4 font-bubblegum text-xl font-bold text-white">
            {project.title}
          </h3>
        </div>
        <CardBody className="relative overflow-hidden p-4">
          <div className="pointer-events-none absolute -bottom-8 -right-8 opacity-10">
            <Icon icon="noto:cat-face" className="h-32 w-32" />
          </div>
          <p className="font-nunito text-kitty-dark/80 dark:text-kitty-light/80">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <Chip
                key={i}
                size="sm"
                className="border-none bg-gradient-to-r from-kitty-blue-light/30 to-kitty-pink/30 text-kitty-dark dark:text-kitty-light"
              >
                {tag}
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="gap-2 border-t border-gray-100 dark:border-gray-800">
          {project.demoUrl && (
            <Button
              size="sm"
              color="primary"
              variant="flat"
              as="a"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-kitty-pink-hot to-kitty-blue font-bubblegum text-white"
              endContent={
                <Icon icon="lucide:external-link" className="h-4 w-4" />
              }
            >
              Live Demo
            </Button>
          )}
          {project.repoUrl && (
            <Button
              size="sm"
              variant="bordered"
              as="a"
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bubblegum"
              endContent={<Icon icon="mdi:github" className="h-4 w-4" />}
            >
              Code
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}

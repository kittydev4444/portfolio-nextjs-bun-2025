import { aboutMe, education, experiences } from "@/config/site";
import { type Experience } from "@/types";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import { HeadingSection } from "../heading-section";
import KittyBubble, { KittyBubbleWrapper } from "../kitty-bubble";
import KittyIcon from "../kitty-icon";
import RandomStars from "../random-star";

const ExperienceComponent = ({
  description,
  icon,
  period,
  title,
}: Experience) => {
  return (
    <li className="flex gap-4">
      <div className="h-min rounded-full bg-primary/10 p-2">
        <Icon icon={icon} className="text-primary" />
      </div>
      <div>
        <h4 className="text-light font-medium">{title}</h4>
        <p className="text-light-muted">
          {description} | {period}
        </p>
      </div>
    </li>
  );
};

export default function About() {
  return (
    <section id="about" className="relative min-h-screen py-20">
      <RandomStars count={10} />

      <KittyBubbleWrapper className="left-2 top-20 sm:left-56">
        <KittyBubble
          size="md"
          className="bg-gradient-to-br from-kitty-pink to-kitty-green-pale"
          delay={2}
        />
      </KittyBubbleWrapper>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-2 flex justify-center">
            <KittyIcon icon="grinning-cat-face-with-smiling-eyes" />
          </div>
          <HeadingSection title={aboutMe.header} subtitle={aboutMe.subHeader} />
        </motion.div>

        <div className="flex flex-col items-center gap-8 md:flex-row">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-light z-20 border-none bg-kitty-dark">
              <CardBody>
                <h3 className="text-accent-yellow mb-4 text-xl font-semibold">
                  {aboutMe.title}
                </h3>
                {aboutMe.descriptions.map((des, index) => (
                  <p key={index} className="text-light-muted mb-4">
                    {des.text}
                  </p>
                ))}
              </CardBody>
            </Card>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {aboutMe.stats.map((stat, index) => (
                <Card key={index} className="border-none bg-kitty-dark">
                  <CardBody className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 rounded-full bg-primary/10 p-3">
                      <Icon
                        icon={stat.icon}
                        className="text-2xl text-primary"
                      />
                    </div>
                    <h3 className="text-accent-yellow mb-1 text-3xl font-bold">
                      {stat.value}
                    </h3>
                    <p className="text-light-muted">{stat.label}</p>
                  </CardBody>
                </Card>
              ))}
            </div>

            <Card className="mt-4 border-none bg-kitty-dark">
              <CardBody>
                <h3 className="text-accent-yellow mb-4 text-xl font-semibold">
                  Kitty Education & Experience
                </h3>
                <ul className="space-y-4">
                  {experiences.map((exp, index) => (
                    <ExperienceComponent
                      key={index}
                      title={exp.title}
                      period={exp.period}
                      icon={exp.icon}
                      description={exp.description}
                    />
                  ))}
                  {education.map((e, index) => (
                    <ExperienceComponent
                      key={index}
                      title={e.title}
                      period={e.period}
                      icon={e.icon}
                      description={e.description}
                    />
                  ))}
                </ul>
              </CardBody>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

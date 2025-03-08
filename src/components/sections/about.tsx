import { aboutMe, education, experiences } from "@/config/site";
import { type Experience } from "@/types";
import { Card, CardBody } from "@heroui/card";
import { Icon } from "@iconify/react";
import * as motion from "motion/react-client";
import { HeadingSection } from "../heading-section";

type Stat = {
  icon: string;
  label: string;
  value: string;
};

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
  const stats: Stat[] = [
    { icon: "noto:fish", label: "Company Projects", value: "8+" },
    { icon: "noto:mouse", label: "Personal Projects", value: "20+" },
    { icon: "noto:yarn", label: "Yarn Balls", value: "75+" },
  ];

  return (
    <section id="about" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-2 flex justify-center">
            <Icon icon={aboutMe.icon} className="text-4xl" />
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
            <Card className="text-light border-none bg-kitty-dark">
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
              {stats.map((stat, index) => (
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

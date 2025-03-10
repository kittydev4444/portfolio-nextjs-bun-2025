import { skills } from "@/config/site";
import { HeadingSection } from "../heading-section";
import KittyBubble, { KittyBubbleWrapper } from "../kitty-bubble";
import KittyIcon from "../kitty-icon";
import { SkillCard } from "../skill-card";

export default function Skill() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-br py-20 dark:bg-gradient-to-bl"
    >
      {/* Floating kitty bubbles */}
      <KittyBubbleWrapper className="right-10 top-10">
        <KittyBubble
          size="sm"
          color="bg-gradient-to-br from-kitty-pink to-kitty-green"
        />
      </KittyBubbleWrapper>
      <KittyBubbleWrapper className="bottom-10 left-10">
        <KittyBubble
          size="md"
          color="bg-gradient-to-br from-kitty-green-pale to-kitty-orange"
          delay={1}
        />
      </KittyBubbleWrapper>

      <div className="container mx-auto px-4">
        <div className="mb-2 flex justify-center">
          <KittyIcon icon="pouting-cat-face" />
        </div>
        <HeadingSection title="My Skills" subtitle="Technologies I work with" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

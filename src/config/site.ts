import { Experience, Project, Skill } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],

  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};

export const aboutMe = {
  icon: "noto:cat-face",
  header: "About This Kitty",
  subHeader: "Get to know the hero behind the whiskers",
  title: "Who am I?",
  descriptions: [
    {
      text: "I'm Captain Whiskers, a fearless feline Frontend Developer with 5+ cat years of experience creating modern and responsive web applications. I specialize in React, TypeScript, and chasing the red dot of inspiration",
    },
    {
      text: "My journey in web development started when I was just a kitten, and since then, I've worked with various clients from startups to established companies, helping them build user-friendly interfaces and improve their digital presence with my super kitty powers.",
    },
    {
      text: "When I‘m not coding, you can find me napping in sunny spots, chasing laser pointers, or experimenting with new technologies. I‘m always eager to learn and grow in this ever-evolving field, one paw at a time.",
    },
  ],
};

export const experiences: Experience[] = [
  {
    icon: "noto:graduation-cap",
    title: "Senior Frontend Developer",
    description: "Kitty Tech Inc.",
    period: "2022 - Present",
    details:
      "Leading the frontend development team, implementing new features, and mentoring junior developers.",
  },
  {
    icon: "noto:graduation-cap",
    title: "Frontend Developer",
    description: "Paw Digital",
    period: "2020 - 2022",
    details:
      "Developed responsive web applications using React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: "noto:graduation-cap",
    title: "UI/UX Designer",
    description: "Whisker Designs",
    period: "2018 - 2020",
    details:
      "Created user interfaces and experiences for web and mobile applications.",
  },
];

export const education: Experience[] = [
  {
    icon: "noto:graduation-cap",
    title: "Khon Kean University",
    description: "Bachelor's Degree, Computer Science",
    period: "July 2020",
  },
];

export const skills: Skill[] = [
  {
    name: "React",
    icon: "logos:react",
    color: "text-blue-500",
  },
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    color: "text-kitty-blue",
  },
  {
    name: "Tailwind CSS",
    icon: "logos:tailwindcss-icon",
    color: "text-cyan-500",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    color: "text-gray-800 dark:text-white",
  },
  {
    name: "Node.js",
    icon: "logos:nodejs-icon",
    color: "text-kitty-green",
  },
  {
    name: "GraphQL",
    icon: "logos:graphql",
    color: "text-kitty-pink-hot",
  },
  {
    name: "Prisma",
    icon: "logos:prisma",
    color: "text-indigo-500",
  },
  {
    name: "Docker",
    icon: "logos:docker-icon",
    color: "text-kitty-blue",
  },
  {
    name: "Git",
    icon: "logos:git-icon",
    color: "text-kitty-orange",
  },
  {
    name: "Figma",
    icon: "logos:figma",
    color: "text-purple-500",
  },
];

export const projects: Project[] = [
  {
    title: "Kitty Code Editor",
    description:
      "A purr-fect code editor with syntax highlighting and auto-completion for all your coding needs.",
    image: "https://picsum.photos/seed/kitty1/600/400",
    tags: ["React", "TypeScript", "Monaco Editor"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Paw-some Dashboard",
    description:
      "A dashboard with real-time analytics and cute kitty-themed visualizations.",
    image: "https://picsum.photos/seed/kitty2/600/400",
    tags: ["Next.js", "Tailwind CSS", "Chart.js"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Meow Messenger",
    description:
      "A real-time chat application with end-to-end encryption and kitty stickers.",
    image: "https://picsum.photos/seed/kitty3/600/400",
    tags: ["React", "Firebase", "WebRTC"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Whisker Weather",
    description:
      "A weather app that shows the forecast with cute kitty illustrations for each weather condition.",
    image: "https://picsum.photos/seed/kitty4/600/400",
    tags: ["React Native", "OpenWeather API", "Lottie"],
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

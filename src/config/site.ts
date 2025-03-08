import { Experience, Project, Skill, SocialLink } from "@/types";

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
    id: 1,
    title: "Movie Hub",
    tags: ["React JS", "Axios", "Styled-Components", "Material-UI"],
    description:
      "This project is a website that catalogs the movies from Movies API and filters movies by genre. Clicking on the movie card will show a short description of the movie and its cast.",
    image: "/assets/images/movies.jpg",
    demoUrl: "https://movie-tv-material-ui.vercel.app/",
    repoUrl: "https://github.com/FourSqweez/movie-tv-material-ui",
  },
  {
    id: 2,
    title: "Tesla Clone",
    tags: ["React JS", "Redux", "Styled-Components"],
    description:
      "I recreated the code on this Tesla website from scratch, in order to practice creating a responsive user interface project with a smooth scroll.",
    image: "/assets/images/tesla.jpg",
    demoUrl: "https://react-tesla-clone-redux-styled-components.vercel.app/",
    repoUrl:
      "https://github.com/FourSqweez/react-tesla-clone-redux-styled-components",
  },
  {
    id: 3,
    title: "Amazon Clone",
    tags: ["Next JS", "Redux", "Tailwind"],
    description:
      "This project is a recreation from scratch of the Amazon website user interface. I focused on writing code for website options that allow users to add products to their cart and make payments.",
    image: "/assets/images/amazon.jpg",
    demoUrl: "https://nextjs-amazon-clone-tailwind-redux-firebase.vercel.app/",
    repoUrl:
      "https://github.com/FourSqweez/nextjs-amazon-clone-tailwind-redux-nextAuth",
  },
  {
    id: 4,
    title: "Air bnb Clone",
    tags: ["Next JS", "Tailwind"],
    description:
      "This project is a recreation from scratch of the Airbnb website that focuses on the search and filter options for all types of accommodation, and features a responsive user interface that adapts to display requirements of various devices.",
    image: "/assets/images/airbnb.jpg",
    demoUrl: "https://airbnb-nextjs-tailwind-mapbox.vercel.app/",
    repoUrl: "https://github.com/FourSqweez/airbnb-nextjs-tailwind-mapbox",
  },
  {
    id: 5,
    title: "Word Hunt",
    tags: ["React JS", "Axios", "Styled-Components", "Material-UI"],
    description:
      "I created this word hunt app using the dictionary API. Users can search for words in real time and get word definitions, synonyms and an audio pronunciation guide. The app also features a toggle for dark/light display.",
    image: "/assets/images/word-hunt.jpg",
    demoUrl: "https://react-dictionary-mui.vercel.app/",
    repoUrl: "https://github.com/FourSqweez/react-dictionary-mui",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/FourSqweez",
    icon: "mdi:github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jeerasakkr/",
    icon: "mdi:linkedin",
  },
];

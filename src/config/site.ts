import { Experience, Project, Skill, SocialLink } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kitty dev Portfolio",
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
  icon: "noto:grinning-cat-with-smiling-eyes",
  header: "About This Kitty",
  subHeader: "Get to know the hero behind the whiskers",
  title: "Who am I?",
  email: "jeerasak.dev@gmail.com",
  descriptions: [
    {
      text: "I’m a Frontend Developer with 2 years of experience creating modern and responsive web applications. I specialize in React, Nextjs and Typescript.",
    },
    {
      text: "My journey in web development started early, and over the years, I’ve built user-friendly interfaces at startups. Currently, I’m focused on expanding my skills as a Web3 frontend developer, working with smart contracts and networks like Ethereum and Solana. I also enjoy working on websites that are colorful, animated, and feature 3D elements.",
    },
    {
      text: "When I’m not coding, I’m exploring new technologies and tools, always looking for ways to improve and stay up-to-date in this fast-evolving field.",
    },
  ],
  stats: [
    { icon: "noto:fish", label: "Company Projects", value: "8+" },
    { icon: "noto:mouse", label: "Personal Projects", value: "20+" },
    { icon: "noto:yarn", label: "Years of Experience", value: "2+" },
  ],
};

export const experiences: Experience[] = [
  {
    icon: "noto-v1:artist-palette",
    title: "Frontend Developer",
    description: "Chomchobgroup Co., Ltd.",
    period: "2022 - 2024",
    details:
      "Developed responsive web applications using React, Nextjs, TypeScript, and Tailwind CSS.",
  },
];

export const education: Experience[] = [
  {
    icon: "noto:graduation-cap",
    title: "Khon Kaen University",
    description: "Bachelor's Degree, Computer Science",
    period: "2020",
  },
];

export const skills: Skill[] = [
  {
    name: "React",
    icon: "logos:react",
    color: "text-blue-500",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    color: "text-gray-800 dark:text-white",
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
    name: "Three js",
    icon: "logos:threejs",
    color: "fill-white",
  },
  {
    name: "Prisma",
    icon: "logos:prisma",
    color: "fill-white",
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
  {
    name: "GSAP",
    icon: "logos:greensock-icon",
    color: "text-purple-500",
  },

  {
    name: "Motion",
    icon: "logos:framer",
    color: "fill-white",
  },
];

export const projects: Project[] = [
  {
    id: 6,
    title: "Fizzy",
    tags: ["Next JS", "Prismic", "Tailwind", "ThreeJS", "GSAP"],
    description:
      "A 3D interactive experience built with Next.js, Three.js, and Prismic, featuring GSAP ScrollTrigger for smooth scrolling animations. This project showcases a dynamic soda can animation that responds to user scrolling, creating an engaging and visually immersive experience.",
    image: "/assets/images/fizzy.png",
    demoUrl: "https://next14-threejs-gsap-prismic-ts.vercel.app",
    repoUrl: "https://github.com/FourSqweez/next14-threejs-gsap-prismic-ts",
  },
  {
    id: 7,
    title: "Pet Soft",
    tags: ["Next JS", "NextAuth", "Zod", "Stripe", "Prisma"],
    description:
      "A pet daycare management platform built with Next.js, utilizing React 19 features like server actions and optimistic UI. It helps daycare staff track pet details, including owner information, pet names, and allergies. The platform also integrates Stripe for seamless checkout when clients pick up their pets.",
    image: "/assets/images/PetSoft.jpeg",
    demoUrl: "https://petsoft-two-sigma.vercel.app/",
    repoUrl:
      "https://github.com/FourSqweez/modern-react-nextjs-courses/tree/main/petsoft",
  },
  {
    id: 8,
    title: "Rmt Dev",
    tags: ["React JS", "React Query", "Context API", "Custom hooks"],
    description:
      "A job search platform built with React, featuring React Query for efficient data fetching and client-side caching. It uses Context API for global state management and URL state for sharing specific job listings. The platform includes pagination and a bookmarking feature, allowing users to save jobs for later.",
    image: "/assets/images/rmtDev.jpeg",
    demoUrl: "https://rmtdev-six.vercel.app/",
    repoUrl:
      "https://github.com/FourSqweez/modern-react-nextjs-courses/tree/main/rmtdev",
  },
  {
    id: 9,
    title: "Corp Comment",
    tags: ["React JS", "Zustand"],
    description:
      "A feedback platform built with React and Zustand for global state. Users can share experiences with companies using hashtags (e.g., “I miss the old #Spotify lyrics feature. Bring it back!”) and upvote posts to highlight key feedback.",
    image: "/assets/images/CorpComment.jpeg",
    demoUrl: "https://corpcomment-three.vercel.app/",
    repoUrl:
      "https://github.com/FourSqweez/modern-react-nextjs-courses/tree/main/corpcomment",
  },
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

export const resumeLinks: SocialLink = {
  name: "Resume",
  url: "https://drive.google.com/file/d/19KueiJP-Fe7Sq726AK4dffXe8XbnFgDM/view?usp=sharing",
  icon: "pepicons:cv",
};

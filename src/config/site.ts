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
  email: "jeerasak.dev@gmail.com",
  descriptions: [
    {
      text: "I’m a Frontend Developer with 1.9 years of experience creating modern and responsive web applications. I specialize in React, Nextjs and Typescript.",
    },
    {
      text: "My journey in web development started early, and over the years, I’ve built user-friendly interfaces in the startups company. Currently, I’m focused on expanding my skills as a Web3 frontend developer, connecting with smart contracts and working with networks like Ethereum and Solana.",
    },
    {
      text: "When I’m not coding, I’m exploring new technologies and tools, always looking for ways to improve and stay up-to-date in this fast-evolving field.",
    },
  ],
};

export const experiences: Experience[] = [
  {
    icon: "noto-v1:artist-palette",
    title: "Frontend Developer",
    description: "ChomCHOB",
    period: "2022 - 2024",
    details:
      "Developed responsive web applications using React, Nextjs, TypeScript, and Tailwind CSS.",
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
    name: "Node.js",
    icon: "logos:nodejs-icon",
    color: "text-kitty-green",
  },
  {
    name: "Prisma",
    icon: "logos:prisma",
    color: "text-indigo-500",
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
    name: "Framer motion",
    icon: "logos:framer",
    color: "text-purple-500",
  },
];

export const projects: Project[] = [
  {
    id: 6,
    title: "Fizzy",
    tags: ["Next JS", "Prismic", "Tailwind", "ThreeJS", "GSAP"],
    description:
      "A 3D Project with the GSAP scrollTrigger that show the smooth animation while scrolling",
    image: "/assets/images/fizzy.png",
    demoUrl: "https://next14-threejs-gsap-prismic-ts.vercel.app",
    repoUrl: "https://github.com/FourSqweez/next14-threejs-gsap-prismic-ts",
  },
  {
    id: 7,
    title: "Pet Soft",
    tags: ["Next JS", "NextAuth", "Zod", "Stripe", "Prisma"],
    description:
      "Pet take care...using react 19 with server action and optimistic ui",
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
      "A web page for finding jobs, using react query for fetching and client catching, Context API for global state, URL State for sharing specific page with data",
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
      "The website to give feedback for the big company using Zustand for global state",
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

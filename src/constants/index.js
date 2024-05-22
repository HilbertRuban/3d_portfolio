import {
  aws1,
  bitbucket,
  contact,
  css,
  express,
  git,
  github,
  html,
  java,
  javascript,
  laravel,
  linkedin,
  linux,
  mongodb,
  mui,
  mysql,
  nextjs,
  nodejs,
  php,
  python,
  react,
  redis,
  redux,
  sass,
  sql,
  summiz,
  tailwindcss,
  typescript,
  apple,
  movies,
  chat,
  video
} from "../assets/icons";
import { meta, shopify, starbucks, tesla } from "../assets/images";

export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: php,
    name: "PHP",
    type: "Backend",
  },
  {
    imageUrl: laravel,
    name: "Laravel",
    type: "Backend",
  },
  {
    imageUrl: sql,
    name: "SQL",
    type: "Backend",
  },
  {
    imageUrl: mysql,
    name: "MySql",
    type: "Backend",
  },
  {
    imageUrl: redis,
    name: "Redis",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: bitbucket,
    name: "Bitbucket",
    type: "Version Control",
  },
  {
    imageUrl: aws1,
    name: "AWS",
    type: "Backend",
  },
  {
    imageUrl: linux,
    name: "Linux",
    type: "OS",
  },
  {
    imageUrl: java,
    name: "Java",
    type: "Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Language",
  },
];

export const experiences = [
  {
    title: "Software Programmer",
    company_name: "Targetbay",
    date: "March 2022 - Present",
    points: [
      "Led the optimization efforts within the production team, rectifying server log errors and fine-tuning slow queries, akin to a Site Reliability Engineer (SRE). These initiatives resulted in significant enhancements to application reliability and operational efficiency and MySQL query performance.",
      "Implemented a cost-saving initiative by creating an in-house URL shortening service to replace Rebrandly service, resulting in an approximate savings of $1000.",
      "Developed robust integrations with both Google Ads and Facebook Ads APIs for seamless customer synchronization and comprehensive campaign management, driving significant revenue growth and expanding customer acquisition efforts.",
      "Implemented rewards system service to enhance customer revenue. This strategic implementation resulted in revenue generation and customer retention.",
      "PHP, Laravel, Mysql, NodeJS, ExpressJS, MongoDB, ReactJS, AWS SES, Redis, Rapid7 Insight, Sentry."
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: movies,
    theme: "btn-back-red",
    name: "MoviesVania",
    description: `Developed a dynamic web application for seamless movie searches and comprehensive information
      retrieval, leveraging Alan AI’s voice-controlled capabilities for effortless browsing and theme customization.`,
    link: "https://moviesvania.netlify.app/",
  },
  {
    iconUrl: chat,
    theme: "btn-back-green",
    name: "Batchat",
    description:
      "Designed an interactive web application for seamless real-time communication, utilizing technologies such as ReactJS, Zustand, Vite, Tailwind CSS, DaisyUI, Node.js, Express.js, MongoDB, Mongoose, and WebSocket.io",
    link: "https://batchat.onrender.com/",
  },
  {
    iconUrl: apple,
    theme: "btn-back-blue",
    name: "iGlimpse",
    description:
      "Explore a captivating showcase of cutting-edge Apple products, from sleek mobile devices to stylish watches. Powered by HTML5, CSS, and JavaScript, this website offers an immersive experience in UI.",
    link: "https://apple-esite-2376.netlify.app/",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://article-summary-ai.netlify.app/",
  },
  {
    iconUrl: video,
    theme: "btn-back-red",
    name: "Finder",
    description:
      '"Finder" is a website that replicates the functionality and user experience of YouTube, offering a platform for video and community engagement. Explore and contribute to a wide array of videos, just like you would on YouTube.',
    link: "https://finder-316570.netlify.app",
  },
];

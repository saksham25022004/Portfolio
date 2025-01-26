import { BACKEND_SKILLS, FRONTEND_SKILLS } from './tech-skills';

export const PROJECT_CATEGORY = {
  ALL: 'all',
  FULL_STACK: 'full-stack',
  OPEN_SOURCE: 'open-source',
};

export const TABS = [
  {
    label: 'All',
    value: PROJECT_CATEGORY.ALL,
    icon: 'fluent:tab-desktop-20-regular',
  },
  {
    label: 'Full Stack',
    value: PROJECT_CATEGORY.All,
    icon: 'bx:code-block',
  },
  {
    label: 'Open Source',
    value: PROJECT_CATEGORY.All,
    icon: 'fluent-mdl2:open-source',
  },
];

const getSkillByLabel = (skills, techLabel) => skills.find(({ label }) => label === techLabel);

export const PROJECTS = [
  {
    imgSrc: 'https://i.ibb.co/n8TCPXb/Contract.png',
    title: 'Assured Contract Farming System',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Mongoose'),
      getSkillByLabel(FRONTEND_SKILLS, 'Stripe'),
      getSkillByLabel(BACKEND_SKILLS, 'Express.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'MongoDB'),
      getSkillByLabel(BACKEND_SKILLS, 'Twillo')

    ],
    description:
      'Assured Contract Farming System, a project designed to streamline the connection between farmers and buyers through a digital platform. The system is built using Node.js, Express.js, React, and MongoDB, providing a robust and scalable solution for real-time data handling and efficient market access.',
    repoLink: 'https://github.com/saksham25022004',
    sourceLink: 'https://krishimitr-rouge.vercel.app/',
  },
  {
    imgSrc: 'https://i.ibb.co/7zB3WZV/ecommerce.png',
    title: 'E-Commerce',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Express.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongoose'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Ejs'),
      getSkillByLabel(FRONTEND_SKILLS, 'Stripe'),
    ],
    description:
      'Developed and deployed a full-featured e-commerce website using Node.js, Express, EJS, and MongoDB, integrated with Stripe for secure payments. The site includes functionality for adding items, viewing product details, managing a cart, placing orders, and user authentication. Deployed on Render, it ensures a seamless and robust shopping experience.',
    repoLink: 'https://github.com/saksham25022004/E-Commerce',
    sourceLink: 'https://nodejs-shop-khwn.onrender.com/',
  },
  {
    imgSrc: 'https://i.ibb.co/7CRd4Nr/movies.png',
    title: 'Movies Match',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'JavaScript'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Firebase')
    ],
    description:
      'MoviesMatch is a React and Firebase-based application that uses GPT-3.5 to provide personalized movie and TV show recommendations, simulating a Netflix-like experience. It fetches detailed information about titles from the TMDB API to enhance user interactions with up-to-date data.',
    repoLink: 'https://github.com/saksham25022004/MoviesMatch',
    sourceLink: 'https://netflix-gpt-kohl-ten.vercel.app/',
  },
  {
    imgSrc: 'https://i.ibb.co/555xcdJ/blog.png',
    title: 'Bloging Site',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'React.js'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Express.js')
    ],
    description:
      'This project is a full-stack social media blog site built with Node.js, Express.js, React.js, and MongoDB. It features a RESTful API, WebSocket for real-time communication. The front-end uses React.js with Redux for state management, providing a responsive and dynamic user experience.',
    repoLink: 'https://github.com/saksham25022004/BlogNet',
    // sourceLink: '',
    category: [PROJECT_CATEGORY.FULL_STACK, PROJECT_CATEGORY.OPEN_SOURCE],
  },
  {
    imgSrc: 'https://i.ibb.co/d0h0MMV/Screenshot-2025-01-26-012558.png',
    title: 'E-mail Builder',
    techIcons: [
      getSkillByLabel(FRONTEND_SKILLS, 'HTML'),
      getSkillByLabel(FRONTEND_SKILLS, 'CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Javascript'),
      getSkillByLabel(FRONTEND_SKILLS, 'Tailwind CSS'),
      getSkillByLabel(FRONTEND_SKILLS, 'Redux'),
      getSkillByLabel(BACKEND_SKILLS, 'Node.js'),
      getSkillByLabel(BACKEND_SKILLS, 'Mongodb'),
      getSkillByLabel(BACKEND_SKILLS, 'Express.js'),
    ],
    description:
      "Developed a web-based application designed to simplify the process of creating professional and visually appealing email templates. It features a user-friendly drag-and-drop interface, customizable components, and real-time preview capabilities. The project enables users to craft responsive email designs without needing advanced coding skills, ensuring compatibility across various devices and email clients.",
    repoLink: 'https://github.com/saksham25022004/Email_Builder',
    sourceLink: 'https://email-builder-btl2.vercel.app/',
  },
];

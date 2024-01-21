import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  graphql,
  django,
  rest,
  sql,
  alx,
  codetry,
  leaderboard,
  math,
  airbnb,
  pems,
  mongodb,
  codetrybe,
  simple_shell,
  pem,
  wireless,
  hng,
  ip,
  logo,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'All About Me',
  },
  {
    id: 'projects',
    title: 'My Projects',
  },
  {
    id: 'contact',
    title: 'Reach Out',
  },
];

const services = [
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Automation Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Software Maintenance',
    icon: ux,
  },
  {
    title: 'Software Development',
    icon: frontend,
  },
  {
    title: 'Software Deployment',
    icon: prototyping,
  },
  {
    title: 'Software Documentation',
    icon: frontend,
  },
  {
    title: 'Software Debugging',
    icon: ux,
  },
  {
    title: 'Software Testing',
    icon: ux,
  },
  {
    title: 'Software Integration',
    icon: backend,
  },
  {
    title: 'Software Design',
    icon: backend,
  },
];

const technologies = [
    {
    name: 'DjangoRestFramework',
    icon: rest,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'mysql',
    icon: sql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'mongoDb',
    icon: mongodb,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
];

const experiences = [
  {
    title: 'IT Specialist',
    company_name: 'Pem Integrated Energy Services Limited',
    icon: pem,
    iconBg: '#333333',
    date: 'Jan 2024 - Present',
  },
  {
    title: 'Back-End Developer',
    company_name: 'Houston Wireless',
    icon: wireless,
    iconBg: '#333333',
    date: 'June 2021 - Present',
  },
  {
    title: 'Project Manager',
    company_name: 'CodeTrybe Community',
    icon: codetry,
    iconBg: '#333333',
    date: 'Mar 2023 - Present',
  },
  {
    title: 'Junior Software Engineer intern',
    company_name: 'HNGi8',
    icon: hng,
    iconBg: '#333333',
    date: 'Aug 2023 - Oct 2023',
  },
  {
    title: 'Furniture Designer',
    company_name: 'Whyte Walker Installations',
    icon: logo,
    iconBg: '#333333',
    date: 'Dec 2019 - Present',
  },
  {
    title: 'Backend Software Engineer',
    company_name: 'ALX Africa',
    icon: alx,
    iconBg: '#333333',
    date: 'Oct 2022 - Nov 2023',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'CodeTrybe Institute',
    description: 'A school website built with django framework.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: codetrybe,
    repo: 'https://github.com/kalwhyte/web_project',
    demo: 'http://codetrybe.onrender.com/',
  },
  {
    id: 'project-2',
    name: 'Jaguars Food',
    description:
      'A backend API that is used to manage a person resources.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/kalwhyte/Jaguars-food-backend',
    demo: 'https://jaguars-food-backend.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'Stick It',
    description: 'This is a trello clone built with reactframework and djangorestframework.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/kalwhyte/Stick-It',
    demo: 'https://stick-it-ashy.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Airbnb Clone',
    description: `Airbnb clone built using python.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: airbnb,
    repo: 'https://github.com/kalwhyte/AirBnB_clone_v4',
  },
  {
    id: 'project-5',
    name: 'Simple Shell',
    description:
      'This is a test on Simple Shell built during my days in ALX SE.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: simple_shell,
    repo: 'https://github.com/kalwhyte/simple_shell',
  },
  {
    id: 'project-6',
    name: 'PIES Limited',
    description: 'Built using djangorestframework, html5, CSS and Javascript.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: pems,
    repo: 'https://github.com/kalwhyte/pem_integrated',
    demo: 'https://pemintegratedenergy.onrender.com/',
  },
  {
    id: 'project-7',
    name: 'IP Communication',
    description: `Communication through IP address built using python.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: ip,
    repo: 'https://github.com/kalwhyte/Communication_between_pc',
  },
  {
    id: 'project-8',
    name: 'DailyTracker',
    description:
      'This is a community project from codeTrybe.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: simple_shell,
    repo: 'https://github.com/kalwhyte/simple_shell',
  },
];
export { services, technologies, experiences, projects };

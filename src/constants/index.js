import {
  backend,
  creator,
  mobile,
  web,
  github,
  git,
  javascript,
  mysql,
  python,
  reactjs,
  tailwind,
  gochanakya,
  suvidha,
  bnp,
} from '../assets';

import {
  DatabaseZap,
  MessagesSquare,
  ArrowLeftRight,
  ChartLine,
} from 'lucide-react';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const profileLinks = [
  {
    name: 'Github',
    icon: github,
    website: 'https://www.github.com/emmanueltech-git',
  },
];

const services = [
  {
    title: 'Software Engineer',
    icon: creator,
  },
  {
    title: 'Software Developer',
    icon: backend,
  },
  {
    title: 'AI Chatbot Development',
    icon: mobile,
  },
  {
    title: 'API Development & Database Design',
    icon: web,
  },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'EMMANUEL PHILIPS TECH',
    icon: bnp,
    iconBg: '#E6DEDD',
    date: 'Jun 2025',
    points: [
      'Designed and developed responsive, user-friendly web applications using modern frontend and backend technologies.',
      'Built full-stack applications with clean, scalable architecture and reusable components.',
      'Developed AI-powered applications and chatbot solutions by integrating Large Language Models (LLMs) and AI APIs.',
      'Implemented secure authentication systems, RESTful APIs, and database integration for dynamic web applications.',
      'Optimized application performance, responsiveness, and user experience across desktop and mobile devices.',
      'Collaborated with designers and stakeholders to transform concepts into production-ready digital products.',
      'Managed application deployment, version control, and continuous improvements using Git and modern development workflows.',
      'Tech Stack: JavaScript, TypeScript, React, Next.js, Node.js, Express.js, Python, MongoDB, PostgreSQL, Tailwind CSS, Git, Docker, OpenAI API.',
    ],
  },
  {
    title: 'AI Programmer',
    icon: gochanakya,
    iconBg: '#E6DEDD',
    date: 'Jun 2025 - present',
    points: [
      'Building AI-powered applications and intelligent automation solutions.',
      'Developing AI chatbots and integrating Large Language Models (LLMs).',
      'Experimenting with emerging AI technologies and workflows.',
      'Integrating AI APIs into web and software applications.',
      'Creating smart software using modern AI technologies.',
    ],
  },
  {
    title: 'Freelance Web Developer',
    company_name: 'Fiverr & Upwork',
    icon: suvidha,
    iconBg: '#383E56',
    date: 'Feb 2023 - present',
    points: [
      'Developed responsive and high-performance websites for businesses and individuals.',
      'Integrated APIs, databases, and authentication systems into web applications.',
      'Collaborated with clients to transform ideas into production-ready digital solutions.',
      'Tech Stack: HTML, Python, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Tailwind CSS, MongoDB, Git.',
    ],
  },
];

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'SQL',
    icon: mysql,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Git',
    icon: git,
  },
];

const projects = [
  {
    name: 'AI Chatbot Platform',
    description:
      'An intelligent conversational AI platform powered by modern language models with authentication, chat history, and real-time responses.',
    tags: [
      { name: 'AI', color: 'blue-text-gradient' },
      { name: 'LLM', color: 'green-text-gradient' },
      { name: 'OpenAI', color: 'pink-text-gradient' },
      { name: 'Next.js', color: 'red-text-gradient' },
      { name: 'Node.js', color: 'red-text-gradient' },
      { name: 'Tailwind CSS', color: 'red-text-gradient' },
    ],
    icon: MessagesSquare,
  },
  {
    name: 'HeartSync',
    description:
      'A modern dating platform focused on meaningful connections with an elegant UI and responsive experience.',
    tags: [
      { name: 'Next.js', color: 'blue-text-gradient' },
      { name: 'Tailwind CSS', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'pink-text-gradient' },
      { name: 'React', color: 'red-text-gradient' },
    ],
    icon: ArrowLeftRight,
  },
  {
    name: 'VTU Platform',
    description:
      'A digital payment platform for airtime, data subscriptions, cable TV, and utility bill payments.',
    tags: [
      { name: 'Tailwind CSS', color: 'blue-text-gradient' },
      { name: 'MongoDB', color: 'red-text-gradient' },
      { name: 'Node.js', color: 'green-text-gradient' },
      { name: 'React', color: 'pink-text-gradient' },
    ],
    icon: DatabaseZap,
  },
  {
    name: 'Business Analytics Dashboard',
    description:
      'A modern analytics dashboard that transforms business data into actionable insights through interactive charts, performance metrics, and real-time reporting.',
    tags: [
      { name: 'Tailwind CSS', color: 'blue-text-gradient' },
      { name: 'Chart.js', color: 'green-text-gradient' },
      { name: 'TypeScript', color: 'pink-text-gradient' },
      { name: 'Next.js', color: 'red-text-gradient' },
    ],
    icon: ChartLine,
  },
];

export { services, technologies, experiences, projects, profileLinks };

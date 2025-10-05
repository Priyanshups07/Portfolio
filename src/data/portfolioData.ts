import { Project, Skill, Achievement, Goal, ContactInfo } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Wellness Organisation Website',
    year: '2022',
    description: 'Dynamic website for health products and services with SEO, chat functionality, and database integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Analytics'],
    category: 'web'
  },
  {
    id: '2',
    title: 'Education Career Guidance Platform',
    year: '2023',
    description: 'Platform for students to explore career opportunities based on stream, skills, and location.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Analytics'],
    category: 'web'
  },
  {
    id: '3',
    title: 'WhatsApp Automation Agent',
    year: '2024',
    description: 'Automation tool for businesses to manage customer queries and updates efficiently.',
    technologies: ['Python', 'Twilio', 'WhatsApp API'],
    category: 'automation'
  },
  {
    id: '4',
    title: 'Student Success Rate Prediction',
    year: '2025',
    description: 'AI/ML model predicting student success probability based on multiple academic and geographic factors.',
    technologies: ['Python', 'Flask', 'Machine Learning'],
    category: 'ai-ml'
  },
  {
    id: '5',
    title: 'UPVC Business Application',
    year: '2025',
    description: 'Mobile and web application for calculating quotations and managing client projects with synchronization across devices.',
    technologies: ['React Native', 'Node.js', 'MongoDB'],
    category: 'mobile'
  },
  {
    id: '6',
    title: 'ScriptSetu - Bharat Script Transliteration',
    year: '2025',
    description: 'Mobile app for real-time transliteration of Indian scripts via camera detection and offline functionality.',
    technologies: ['React Native', 'TypeScript', 'Expo Camera API'],
    githubLink: 'https://github.com/Priyanshups07/Scriptsetu',
    category: 'mobile'
  }
];

export const skills: Skill[] = [
  { name: 'Python', category: 'languages', level: 90 },
  { name: 'JavaScript', category: 'languages', level: 85 },
  { name: 'HTML/CSS', category: 'languages', level: 90 },
  { name: 'React', category: 'frameworks', level: 85 },
  { name: 'Flask', category: 'frameworks', level: 80 },
  { name: 'React Native', category: 'frameworks', level: 75 },
  { name: 'MySQL', category: 'database', level: 80 },
  { name: 'MongoDB', category: 'database', level: 75 },
  { name: 'Git/GitHub', category: 'tools', level: 85 },
  { name: 'Google Analytics', category: 'tools', level: 70 },
  { name: 'AI/ML', category: 'specialized', level: 85 },
  { name: 'Data Science', category: 'specialized', level: 80 }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Built Software for Multiple Companies',
    description: 'Successfully developed and deployed software solutions for 3-4 companies across different domains.'
  },
  {
    id: '2',
    title: 'Dynamic Website Development',
    description: 'Created and maintained SEO-friendly, dynamic websites for various clients with high performance.'
  },
  {
    id: '3',
    title: 'AI/ML Project Delivery',
    description: 'Delivered major AI/ML projects with real-world applications and measurable impact.'
  },
  {
    id: '4',
    title: 'Tech Start-up Contributor',
    description: 'Active contributor to emerging tech start-ups and innovative projects.'
  }
];

export const futureGoals: Goal[] = [
  {
    id: '1',
    title: 'Master AI/ML & Deep Learning',
    description: 'Deep dive into advanced AI/ML frameworks and neural network architectures.'
  },
  {
    id: '2',
    title: 'Build AI-Driven Applications',
    description: 'Develop advanced AI-powered applications with real-world impact and scalability.'
  },
  {
    id: '3',
    title: 'Open-Source Contributions',
    description: 'Contribute to open-source projects and tech start-ups in the AI/ML ecosystem.'
  },
  {
    id: '4',
    title: 'Educational AI Platform',
    description: 'Build my own AI-powered platform for education and career guidance.'
  }
];

export const contactInfo: ContactInfo = {
  email: 'iampriyanshusahu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanshu-sahu-78300a339/',
  github: 'https://github.com/Priyanshups07',
  instagram: 'https://www.instagram.com/priyanshu'
};

export const aboutMe = {
  intro: "Passionate about AI, Machine Learning, and innovative technologies. I build intelligent software solutions, create dynamic applications, and explore new possibilities in tech.",
  story: [
    "I have been fascinated by computers since Class 4-5, which inspired me to choose the Mathematics stream after 10th grade.",
    "In 2020, I completed my 12th grade and, in 2022, joined B.Tech Computer Science Engineering at Raipur Institute of Technology (RITEE).",
    "I will graduate in 2026 with a strong focus on AI/ML and innovative coding projects.",
    "I actively work on tech start-ups and have built software solutions for multiple companies, including inventory management systems and quotation applications for Android and iOS.",
    "In the early stages of my career, I developed dynamic and SEO-optimized websites for clients.",
    "My current projects focus on Python programming, AI/ML research, and advanced applications such as WhatsApp automation and student career prediction models.",
    "My ongoing major project is a College Management System integrating modern technology stacks for scalable and efficient performance."
  ]
};

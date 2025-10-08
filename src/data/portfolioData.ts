import { Project, Skill, Achievement, Goal, ContactInfo } from '../types/portfolio';

export const projects: Project[] = [
  {
    id: '1',
    title: 'ScriptSetu – Indian Script Transliteration App',
    year: '2025',
    description: 'Cross-platform mobile application enabling instant transliteration between 12+ Indian scripts to break language barriers for travelers and pilgrims. Developed using React Native and TypeScript for real-time transliteration. Designed complete frontend UI/UX, including camera interface and interactive script selection. Built core transliteration logic using Unicode mapping algorithms.',
    technologies: ['React Native', 'TypeScript', 'Expo Camera API', 'Unicode Mapping'],
    githubLink: 'https://github.com/Priyanshups07/Scriptsetu',
    category: 'mobile'
  },
  {
    id: '2',
    title: 'CodeArena – Coding Competition Platform',
    year: '2024',
    description: 'Web platform enabling collaborative coding and skill development for students. Developed with React (Next.js) and Node.js; backend powered by Supabase. Features include authentication, dashboard, profile management, and real-time collaboration. Designed complete dashboard UI with interactive onboarding and contest management.',
    technologies: ['React', 'Next.js', 'Node.js', 'Supabase', 'TypeScript'],
    githubLink: 'https://github.com/Priyanshups07/CodeArena',
    category: 'web'
  },
  {
    id: '3',
    title: 'Wellness Organisation Website',
    year: '2022',
    description: 'Dynamic website for health products and services with SEO, chat functionality, and database integration.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Analytics'],
    category: 'web'
  },
  {
    id: '4',
    title: 'Education Career Guidance Platform',
    year: '2023',
    description: 'Platform for students to explore career opportunities based on stream, skills, and location.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'Google Analytics'],
    category: 'web'
  },
  {
    id: '5',
    title: 'WhatsApp Automation Agent',
    year: '2024',
    description: 'Automation tool for businesses to manage customer queries and updates efficiently.',
    technologies: ['Python', 'Twilio', 'WhatsApp API'],
    githubLink: 'https://github.com/Priyanshups07/WhatsApp-messenger',
    category: 'automation'
  },
  {
    id: '6',
    title: 'Academic Risk Predictor',
    year: '2025',
    description: 'AI/ML model predicting student success probability based on multiple academic and geographic factors.',
    technologies: ['Python', 'Flask', 'Machine Learning'],
    githubLink: 'https://github.com/Priyanshups07/Academic-Risk-Predictor',
    category: 'ai-ml'
  }
];

export const skills: Skill[] = [
  { name: 'Python', category: 'languages', level: 90 },
  { name: 'JavaScript', category: 'languages', level: 85 },
  { name: 'TypeScript', category: 'languages', level: 80 },
  { name: 'HTML/CSS', category: 'languages', level: 90 },
  { name: 'React', category: 'frameworks', level: 85 },
  { name: 'Next.js', category: 'frameworks', level: 80 },
  { name: 'Django', category: 'frameworks', level: 85 },
  { name: 'React Native', category: 'frameworks', level: 75 },
  { name: 'Flask', category: 'frameworks', level: 80 },
  { name: 'Node.js', category: 'frameworks', level: 75 },
  { name: 'MySQL', category: 'database', level: 80 },
  { name: 'MongoDB', category: 'database', level: 75 },
  { name: 'Supabase', category: 'database', level: 70 },
  { name: 'Git/GitHub', category: 'tools', level: 85 },
  { name: 'n8n', category: 'tools', level: 75 },
  { name: 'Google Analytics', category: 'tools', level: 70 },
  { name: 'AI/ML', category: 'specialized', level: 85 },
  { name: 'Data Science', category: 'specialized', level: 80 },
  { name: 'AI Code Editors', category: 'specialized', level: 75 }
];

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Python with Django Certification',
    description: 'Rays IT | Sep 2024'
  },
  {
    id: '2',
    title: 'Git and GitHub Certification',
    description: 'Codenesters | Mar 2024'
  },
  {
    id: '3',
    title: 'Teckathon 2024 Participation',
    description: 'G.H. Raisoni College of Engineering, Nagpur | Mar 2024'
  },
  {
    id: '4',
    title: 'ICECCT Conference Participation',
    description: 'Sixth IEEE International Conference on Electrical, Computer and Communication Technologies | Jun 2024'
  },
  {
    id: '5',
    title: 'Built Software for Multiple Companies',
    description: 'Successfully developed and deployed software solutions for 3-4 companies across different domains.'
  },
  {
    id: '6',
    title: 'Dynamic Website Development',
    description: 'Created and maintained SEO-friendly, dynamic websites for various clients with high performance.'
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
    title: 'Educational Technology Platform',
    description: 'Build innovative platforms for education and career guidance leveraging emerging technologies.'
  }
];

export const contactInfo: ContactInfo = {
  email: 'iampriyanshusahu@gmail.com',
  linkedin: 'https://www.linkedin.com/in/priyanshu-sahu-78300a339/',
  github: 'https://github.com/Priyanshups07',
  instagram: 'https://www.instagram.com/priyanshu'
};

export const softSkills = [
  'Problem-Solving',
  'Teamwork & Collaboration',
  'Adaptability',
  'Time Management',
  'Communication Skills',
  'Creativity'
];

export const aboutMe = {
  intro: "Aspiring Python Developer | Computer Science Engineering Student. Innovative and growth-driven developer with expertise in Python, Django, React, n8n (Automation/Integration), and AI-driven tools. Skilled in developing scalable full-stack and cross-platform applications.",
  story: [
    "I have been fascinated by computers since Class 4-5, which inspired me to choose the Mathematics stream after 10th grade.",
    "In 2021, I completed my 12th grade (Science Stream) at Nikhileshwaram Vidya Mandir (CGBSE Board) and, in 2022, joined B.Tech Computer Science Engineering at Raipur Institute of Technology (CSVTU University).",
    "I will graduate in 2026 with a strong focus on AI/ML and innovative coding projects.",
    "I actively work on tech start-ups and have built software solutions for multiple companies, including real-time projects such as ScriptSetu and CodeArena.",
    "My expertise includes Python (Django), React, Next.js, TypeScript, and AI-driven tools. I'm skilled in developing scalable full-stack and cross-platform applications.",
    "I have experience with tools like Git, GitHub, n8n, and Supabase AI, and I'm proficient in AI Code Editors & Assistants.",
    "My projects focus on breaking language barriers with ScriptSetu, enabling collaborative coding with CodeArena, and developing AI/ML solutions with real-world applications."
  ]
};

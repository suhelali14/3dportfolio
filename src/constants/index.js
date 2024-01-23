import { meta, shopify, starbucks, tesla,amigo,dpu } from "../assets/images";

import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    django
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: django,
        name: "django",
        type: "Animation",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Founder",
        company_name: "Amigo",
        icon: amigo,
        iconBg: "#accbe1",
        date: "Jan 2022 - Current",
        points: [
            "Startup Founder",
            "Studied market to determine optimal pricing of goods and capitalize on emerging opportunities.",
            "Conducted target market research to scope out industry competition and identify advantageous trends.",
            "Developed key operational initiatives to drive and maintain substantial business growth.",
            
        ],
    },
    {
        title: "Volunteer",
        company_name: "College Club",
        icon: dpu,
        iconBg: "#fbc3bc",
        date: "Apr 2023",
        points: [
                
                "Supported engaging, fun, and smooth-running events by helping with organization and planning.",
                "Used strong interpersonal communication skills to convey information to others.",
                "Assisted with special events and programs.",
                "Maintained clean, neat, and operational facilities to serve program needs.",

        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Interview AI Simulator Application',
        description: 'Designed and implemented an interactive interview simulator powered by artificial intelligence (AI)Created a realistic environment for practicing interview scenarios, including customizable questions and responses. Leveraged natural language processing and machine learning to provide real-time feedback and enhance interview skills.',
        link: 'https://github.com/suhelali14/Ai-interview-simulator',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Face Detection Attendance Sysytem',
        description: 'Developed an innovative automated attendance system utilizing face detection technology. Utilized computer vision and machine learning techniques to accurately identify and record student attendance. Improved efficiency and reduced manual effort for attendance tracking in educational institutions. Demonstrated strong problem-solving skills.',
        link: 'https://github.com/suhelali14/Attendance_System',
    }
    ,{
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amigo Solutions',
        description: 'Developed a web application that is providing over all information of amigo Solutions.',
        link: 'https://github.com/suhelali14/amigosolutions',
    },
    {
        iconUrl: amigo,
        theme: 'btn-back-black',
        name: 'Service Providing Website',
        description: 'Created a full-stack stack Service Providing Website,with some social app features.',
        link: 'https://github.com/suhelali14/Amigo-django',
    },
    
    
];
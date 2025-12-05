export type Project ={
    id: string;
    title: string;
    smallDesc: string;
    techStack: string[];
    githubUrl?: string;
    overview: string;
    features: string[];
    liveUrl?: string;
    images?: string[];
    challenges?: string;
    learnings?: string;
    decisions?: string;
    future?: string;
}

export const schoolProjects: Project[] = [
    {
        id: "world-of-zuul",
        title: "World Of Zuul - 1ˢᵗ Semester Project",
        smallDesc: "My first bigger project, which is a small game that targets a sustainable development goal",
        techStack: ["Java", "Git"],
        githubUrl: "https://github.com/T5-1/Semesterprojekt",
        overview: "This project is a text-based adventure game that allows players to explore different rooms and interact with objects. The game is designed to be simple yet engaging, with a focus on sustainability and environmental awareness.",
        features: ["Text-based Adventure", "Sustainable Development Goal", "Interactive"],
    },
    {
        id: "tv2-credits-database",
        title: "TV2 Credits Database - 2ⁿᵈ Semester Project",
        smallDesc: "A system, which aids in giving credits to contributors for TV2 programs",
        techStack: ["Java", "Git", "PostgreSQL"],
        githubUrl: "",
        overview: "This project is a database system that helps TV2 manage and give credits to contributors for their programs. The system is designed to be user-friendly and efficient, allowing for easy management of credits.",
        features: ["Database System", "User Management", "Credit Management"],
    },
    {
        id: "beermachine",
        title: "Beermachine Cyber-Physical System - 3ʳᵈ Semester Project",
        smallDesc: "A cyber physical system that connects to a beer machine and a GUI with controls for the machine",
        techStack: ["Java", "Git"],
        githubUrl: "",
        overview: "This project is a cyber-physical system that connects to a beer machine and a GUI with controls for the machine. The system allows users to control the beer machine remotely and monitor its status.",
        features: ["Cyber-Physical System", "GUI", "Remote Control"],
    },
    {
        id: "drone-assembly-line",
        title: "Drone Assembly Line - 4ᵗʰ Semester Project",
        smallDesc: "System which helps with communication between links in a drone assembly line",
        techStack: ["Java", "Git", "AWS", "Docker"],
        githubUrl: "",
        overview: "This project is a system that helps with communication between links in a drone assembly line. The system is designed to be scalable and flexible, allowing for easy integration with other systems.",
        features: ["Communication System", "Scalable", "Flexible"],
    },
    {
        id: "unity-card-game",
        title: "Unity Card Game - Final Semester Project",
        smallDesc: "A videogame card game made in Unity, including assets made from the ground up",
        techStack: ["Unity", "C#", "Git", "Aseprite"],
        githubUrl: "",
        overview: "This project is a videogame card game made in Unity, including assets made from the ground up. The game is designed to be fun and engaging, with a focus on gameplay and user experience.",
        features: ["Video Game", "Unity", "C#"],
    }
];

export const personalProjects: Project[] = [
    {
        id: "website-portfolio",
        title: "Website Portfolio - Personal Project",
        smallDesc: "Personal portfolio website to showcase my projects and skills (This website)",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Git"],
        githubUrl: "",
        overview: "This project is a personal portfolio website to showcase my projects and skills. The website is designed to be user-friendly and visually appealing, with a focus on showcasing my work.",
        features: ["Personal Portfolio", "Project Showcase", "About Me"],
    },
    {
        id: "unity-slot-machine",
        title: "Unity - Slot Machine",
        smallDesc: "A fun project for a new years party",
        techStack: ["Unity", "C#", "Git"],
        githubUrl: "",
        overview: "PLACEHOLDER",
        features: ["Slot machine", "Fun"]
    },
    {
        id: "unity-fighting-game",
        title: "Unity 2D - Fighting Game",
        smallDesc: "A 2D Figthing game incorporating real-life images",
        techStack: ["Unity", "C#", "Git"],
        githubUrl: "",
        overview: "Placeholder",
        features: ["Fighting game"]
    }
];

export const workProjects: Project[] = [
    {
        id: "hr-on-convert-service",
        title: "Convert Service",
        smallDesc: "My project at HR-ON, used in production for converting, validating, merging and resizing various files",
        techStack: ["Typescript", "Docker", "CI/CD", "AWS Fargate", "Express"],
        overview: "PLACEHOLDER",
        features: ["Microservice", "Conversion", "Image resizing", "Merging", "Validating"],
    },
    {
        id: "intellifinder-redesign",
        title: "Intellifinder Frontend Redesign",
        smallDesc: "Part of a big redesign for Intellifinders frontend",
        techStack: ["Typescript", "PLACEHOLDER"],
        overview: "PLACEHOLDER",
        features: ["PLACEHOLDER"]
    }
];

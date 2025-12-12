export type Project = {
  id: string;
  title: string;
  smallDesc: string;
  techStack: string[];
  githubUrl?: string;
  overview: string;
  features?: string[];
  liveUrl?: string;
  images?: string[];
  challenges?: string;
  learnings?: string;
  decisions?: string;
  future?: string;
};

export const schoolProjects: Project[] = [
  {
    id: "world-of-zuul",
    title: "World Of Zuul - 1ˢᵗ Semester",
    smallDesc:
      "First bigger coding project. Small game targeting a sustainable development goal.",
    techStack: ["Java"],
    githubUrl: "https://github.com/T5-1/Semesterprojekt",
    overview:
      "This project is a text-based adventure game that allows players to explore different rooms and interact with objects. The game is designed to be simple yet engaging, with a focus on sustainability and environmental awareness.",
    features: [
      "Text-based Adventure",
      "Sustainable Development Goal",
      "Interactive",
    ],
    images: [
      "/images/worldOfZuul/image1.png",
      "/images/worldOfZuul/image2.png",
      "/images/worldOfZuul/image3.png",
    ],
  },
  {
    id: "tv2-credits-database",
    title: "TV2 Credits Database - 2ⁿᵈ Semester",
    smallDesc:
      "A system, which aids in giving credits to contributors for TV2 programs",
    techStack: ["Java", "PostgreSQL", "JavaFX"],
    githubUrl: "https://github.com/Malthe75/Semesterprojekt2",
    overview:
      "This project is a database system that helps TV2 manage and give credits to contributors for their programs. The system is designed to be user-friendly and efficient, allowing for easy management of credits.",
    features: ["Database System", "User Management", "Credit Management"],
    images: [
      "/images/tv2/image1.png",
      "/images/tv2/image2.png",
      "/images/tv2/image3.png",
      "/images/tv2/image4.png",
      "/images/tv2/image5.png",
    ],
  },
  {
    id: "beermachine",
    title: "Beermachine System - 3ʳᵈ Semester",
    smallDesc:
      "A cyber physical system that connects to a beer machine and a GUI with controls for the machine",
    techStack: ["Java", "HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/SemPro3G4/3SemesterProject",
    overview:
      "This project is a cyber-physical system that connects to a beer machine and a GUI with controls for the machine. The system allows users to control the beer machine remotely and monitor its status.",
    features: ["Cyber-Physical System", "GUI", "Remote Control"],
    images: [
      "/images/beermachine/image1.png",
      "/images/beermachine/image2.png",
    ],
  },
  {
    id: "drone-assembly-line",
    title: "Drone Assembly Line - 4ᵗʰ Semester",
    smallDesc:
      "System which helps with communication between links in a drone assembly line",
    techStack: ["Java", "JavaFX"],
    githubUrl: "https://github.com/ngPsych/ST4G02",
    overview:
      "This project is a system that helps with communication between links in a drone assembly line. The system is designed to be scalable and flexible, allowing for easy integration with other systems.",
    features: ["Communication System", "Scalable", "Flexible"],
    images: ["/images/droneAssembly/image1.png"],
  },
  {
    id: "unity-card-game",
    title: "Unity Card Game - Final Semester",
    smallDesc:
      "A videogame card game made in Unity, including assets made from the ground up",
    techStack: ["Unity", "C#", "Aseprite"],
    githubUrl: "https://github.com/OliverDahlWagner/AfgangsProject",
    overview:
      "This project is a videogame card game made in Unity, including assets made from the ground up. The game is designed to be fun and engaging, with a focus on gameplay and user experience.",
    features: ["Video Game", "Unity", "C#"],
    images: [
      "/images/cardGame/image1.png",
      "/images/cardGame/image2.png",
      "/images/cardGame/image3.png",
    ],
  },
];

export const personalProjects: Project[] = [
  {
    id: "website-portfolio",
    title: "Website Portfolio",
    smallDesc:
      "Personal portfolio website to showcase my projects and skills (This website)",
    techStack: ["React", "TypeScript", "Tailwind"],
    githubUrl: "",
    overview:
      "This project is a personal portfolio website to showcase my projects and skills. The website is designed to be user-friendly and visually appealing, with a focus on showcasing my work.",
    features: ["Personal Portfolio", "Project Showcase", "About Me"],
  },
  {
    id: "unity-slot-machine",
    title: "Unity - Slot Machine",
    smallDesc: "A slot machine with bad inside jokes for a new years party. ",
    techStack: ["Unity", "C#"],
    githubUrl: "https://github.com/Malthe75/newyears-slotmachine",
    overview:
      "This project was made as a surprise event for a new years party. It was one of my first real hobby projects and it helped ignite a spark for development once more for me. The slot machine involves a close friend group of mine and has many bad inside jokes. The game is made in Unity and uses various images, sound bits and animations.",
    images: [
      "/images/slotMachine/image1.png",
      "/images/slotMachine/image2.png",
      "/images/slotMachine/image3.png",
      "/images/slotMachine/image4.png",
    ],
  },
  {
    id: "unity-fighting-game",
    title: "Unity 2D - Fighting Game (WIP)",
    smallDesc: "A 2D Figthing game incorporating real-life images",
    techStack: ["Unity", "C#", "Python"],
    githubUrl: "https://github.com/Malthe75/5260-fightaz",
    overview:
      "This project is a 2D fighting game that uses real life png images for characters. The game is a passion project with no incentive to make a profit. The real reasoning behind this project is to get better, build my resume and for giggles. The game is getting more complex by the day, and the ambitions might be a bit big. This means that characters end up using up towards 100 images, to create semi animations for them.",
    images: ["/images/fightingGame/image1.png"],
  },
];

export const workProjects: Project[] = [
  {
    id: "hr-on-convert-service",
    title: "HR-ON Convert Service",
    smallDesc:
      "My project at HR-ON, used in production for converting, validating, merging and resizing various files",
    techStack: ["Typescript", "Docker", "CI/CD", "AWS Fargate", "Express"],
    overview: "PLACEHOLDER",
    features: [
      "Microservice",
      "Conversion",
      "Image resizing",
      "Merging",
      "Validating",
    ],
  },
  {
    id: "intellifinder-redesign",
    title: "Intellifinder Frontend Redesign",
    smallDesc:
      "Part of a big redesign for Intellifinders frontend, involving the use of PrimeNG library",
    techStack: ["TypeScript", "MongoDB", "PHP"],
    overview: "PLACEHOLDER",
    features: ["PLACEHOLDER"],
  },
];

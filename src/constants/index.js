import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a dedicated Computer Engineering student passionate about software development and creating innovative projects. My journey involves continuous learning and exploring new technologies, and I enjoy collaborating on diverse software solutions.`;

export const ABOUT_TEXT = `As a 4th year Computer Engineering student, I am focused on enhancing my skills in both mobile and front-end development. My experience spans Flutter, React, Next.js, Dart, C#, SQL, Python, and UI/UX design with Figma. I thrive in team-oriented environments, contributing to a wide range of software projects. Beyond coding, my volunteer roles keep me engaged with the tech community and evolving industry trends, allowing me to stay at the forefront of innovation.`;

export const EXPERIENCES = [
  {
    year: "07.2023 - Present",
    role: "Flutter Developer Intern",
    company: "Kadriye Macit Software Ltd.",
    description: `During my internship, I developed a Flutter application from scratch, establishing the software architecture. I gained proficiency in Flutter State Management using Bloc and Cubit. I translated Figma designs into functional code and integrated the frontend with the backend. Additionally, I conducted unit and Bloc testing for the application.`,
    technologies: ["Flutter", "Bloc-Cubit", "Phyton-Django", "Figma", "Firebase"],
  },
  {
    year: "07.2023 - 09.2023",
    role: "Software Developer Intern",
    company: "Bifa Biscuits & Food Inc",
    description: `During my internship, I developed a clone of the company's order tracking system using C# and SQL. I implemented secure user login, added features for managing product stock and customer data, and created functionality for tracking and analyzing orders, stock, and profit/loss. This project helped me gain experience in software development and database management.`,
    technologies: ["C# Forms", "mySQL"],
  },
  {
    year: "12.2023 - 07.2024",
    role: "Trainee",
    company: "Google Game and App Academy",
    description: `I completed Flutter training at the academy, where I developed applications and gained skills in UI/UX design using Figma. Additionally, I received training in Project Management and Technology Entrepreneurship.`,
    technologies: ["Flutter", "Figma", "Firebase", "Unity"],
  },
];

export const PROJECTS = [
  {
    title: "MUber - Uber Clone App",
    image: project1,
    description:
      "Developed a functional clone of the Uber application, implementing core features such as user registration, ridebooking, real-time tracking, and payment integration. Utilized Flutter for cross-platform development and integrated backend services for seamless operation.",
  },
  {
    title: "Order Tracking System Project",
    image: project2,
    description:
      "Created a clone of the company's order tracking system using C# Forms and SQL. Implemented user login, product stock management, and order tracking features, including monthly summaries and profit/loss analysis. Gained hands-on experience in software development and database management.",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
  },
  {
    title: "Arduino-Based Racing Car",
    image: project4,
    description:
      "Designed and built a racing car using Arduino, distance sensors, light sensors (LDR) and bluetooth sensor as part of a competition in my university. Programmed the car to navigate and race on tracks using sensor feedback. Gained experience in embedded systems, sensor integration, and real-time control.",
  },
  {
    "title": "Fashion App (In Development)",
    image: project5,
    description:
      "A Flutter-based fashion app where users can explore, favorite, and share outfit combinations. Includes profile and search features, with certain sections requiring login.",
  }
];

export const CONTACT = {
  phoneNo: "+90 505 470 1415",
  email: "nisaergun.21@gmail.com",
};

import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import movieImg from "@/public/movie.png"
import BookapplicationImg from "@/public/Bookapplication.png"
import peadiaticImg from "@/public/peadiatic.png"
import { machine } from "os";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BCA: Bachelor Of Computer Application",
    location: "Amravati, Maharashtra",
    description:
      "BCA (Bachelor of Computer Applications) is an undergraduate degree program that provides students with a strong foundation in computer science and applications. It covers areas such as programming languages, database management, networking, software engineering, and web development, preparing graduates for careers in various IT sectors.",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2022",
  },
  {
    title: "MCA : Dr D Y Patil Institute of MCA & Management ",
    location: "Pune, Maharashtra",
    description:
      "My keen interest in technology led me to pursue Post graduation. That's why I am pursuing MCA from DYPIMR. During my studies I learned some of the technologies like Java, Python, HTML, CSS, JavaScript, React Js, Node Js. ",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2024",
  },
  {
    title: "full stack developer  traineeship  at  numetry technology.",
    location: "Pune, Maharashtra",
    description:
      "Embark on a dynamic Full Stack Developer traineeship at Numetry Technology Company, honing skills in both front-end and back-end development. Gain hands-on experience with state-of-the-art technologies, preparing for a career at the forefront of software innovation.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },

  {
    title: "Python Development Internship at The Website Maker.",
    location: "Andhra Pradesh",
    description:
      "Unlock your coding potential and contribute to crafting cutting-edge web solutions with Python expertise.",
    icon: React.createElement(FaReact),
    date: "2023 - Completed",
  },

  {
    title: "Web Developer Intern at  Apothem IT Solution LLP.",
    location: "Pune, Maharashtra",
    description:
      "Web Developer Intern at Apothem IT Solution LLP: Dive into real-world web development projects, gaining invaluable experience and expertise under seasoned mentors.",
    icon: React.createElement(FaReact),
    date: "2024 - Completed",
  },

] as const;



export const projectsData = [
  {
    title: "Movie Review Sentiment Analyser",
    description:
      "Movie Review Sentiment Analyser: Utilizes advanced NLP techniques to analyze and classify sentiment in user reviews, aiding in understanding audience perception.",
    tags: ["HTML", "CSS", "JavaScript","Algorithm:NLP(NaturalLanguage Processing)", "NLTK library" , "Flask framework","Python"],
    imageUrl:movieImg ,
  },
  {
    title: " Online Bookstore Application",
    description:
      "Python-based Bookstore Application: Seamlessly manage and organize your book collection with user-friendly features and intuitive interface.",
    tags: ["HTML", "CSS", "JavaScript", "Python", "Django Framework"],
    imageUrl: BookapplicationImg,
  },
  {
    title: "Pediatric Hub",
    description:
      "Pediatric Hub: A comprehensive platform offering resources, information, and support tailored for pediatric healthcare professionals and caregivers, fostering collaboration and knowledge exchange.",
    tags: ["HTML", "CSS", "MSQL", "JavaScript", "PHP"],
    imageUrl: peadiaticImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHUB",
  "Tailwind",
  "MongoDB",
  "Python",
  "SQL",
  "PHP",
 "Machine Learning/DeepLearning",
 "Django",
 "Python"
] as const;
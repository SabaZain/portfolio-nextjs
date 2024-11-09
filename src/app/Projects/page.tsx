import React from 'react'
import Link from "next/link";
import styles from "./projects.module.css";
import Image from 'next/image';
import Navbar from '../components/Navbar/Navbar';

interface Project{
    title: string;
    imageSrc: string;
    desc: string;
    link: string;
}

const projects: Project[] = [
    {
        
        title: "Registration Form",
        imageSrc:   "/Image/registrationformhtml.jpg",
        desc:  "HTML based app gathers all necessary information about students in one place.",
        link: "https://student-registration-form-lemon.vercel.app/"
        
        
    },
    {
        
        title: "Simple Calculator",
        imageSrc:   "/Image/simplecalculatorhtml.jpg",
        desc:  "HTML & CSS based app allows users to perform basic arithmetic operations.",
        link: "https://simple-calculator-html-seven.vercel.app/"
    },
    {
        
        title: "Currency Converter",
        imageSrc:   "/Image/currencyconverterhtml.jpg",
        desc:  "HTML & CSS based app allows users to convert currency easily.",
        link: "https://currency-converter-html.vercel.app/"
    },
    {
        
        title: "Countdown Timer",
        imageSrc:   "/Image/countdowntimernextjs.jpg",
        desc:  "A Next.JS app helps users allocate time effectively encouraging better productivity.",
        link: "https://countdowntimer-nextjs-xi.vercel.app/"
    },
    {
        
        title: "Todo App",
        imageSrc:   "/Image/todoappnextjs.jpg",
        desc:  "A Next.JS app helps users to manage tasks easily and enhance productivity.",
        link: "https://todoapp-nextjs-five.vercel.app/"
    },
    {
        
        title: "Easy Wear Website",
        imageSrc:   "/Image/easywearwebsitenextjs.jpg",
        desc:  "Shoes Website in Next.JS, created components and pages.",
        link: "https://assignment2-nextjs.vercel.app/"
    },
    {
        
        title: "Perfume Website",
        imageSrc:   "/Image/perfumewebsitenextjs.jpg",
        desc:  "Perfume Website in Next.JS, created components and pages.",
        link: "https://perfumewebsite-nextjs.vercel.app/"
    },
];


const ProjectsPage = () => {
  return (
    
    <div className={styles.container}>
        <Navbar />
        <h1 className={styles.title}>My Projects</h1>
        <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
                <div className={styles.projectCard} key={index}>
                    <Link href = {project.link}>
                    
                        <Image
                        src={project.imageSrc}
                        alt={project.title}
                        width={300}
                        height={300}
                        className={styles.image}
                        />
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        
                        </Link>
                        </div>
            ))}
        </div>
    </div>
  );
};

export default ProjectsPage;





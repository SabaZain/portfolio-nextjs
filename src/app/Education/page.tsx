import React from 'react'
import styles from "./education.module.css";
import Navbar from '../components/Navbar/Navbar';

const EducationPage = () => {
  return (
    
    <div >
      <Navbar />
      <h1 className={styles.title}>My Education and Skills</h1>
     <div className={styles.container}>
        <div className={styles.main}>
            <h2 className={styles.heading}>My Education</h2>
            <ul className={styles.list}>
                <li className={styles.items}>MBA(Finance) - 2012 Mohammad Ali Jinnah University</li>
                <li className={styles.items}>BCOM - 2009 University Of Karachi</li>
                <li className={styles.items}>HSC - 2006 Nazareth Girls College Hyderabad</li>
                <li className={styles.items}>SSC - 2004 County Cambridge School Hyderabad</li>
            </ul>
            
        </div>
        <div className={styles.main}>
                <h2 className={styles.heading}>My Skills</h2>
                <ul className={styles.list}>
                <li className={styles.items}>TypeScript - Skilled in TypeScript for building scalable and maintainable web applications.</li>
                <li className={styles.items}>HTML - Skilled in writing semantic and accessible HTML, ensuring optimal SEO and user experience.</li>
                <li className={styles.items}>CSS - Skilled in using CSS to create responsive, visually appealing web designs with a focus on layout and styling.</li>
                <li className={styles.items}>Next.Js - Skilled in creating dynamic, SEO-friendly pages, managing API routes, and optimizing applications</li>
            </ul>
            </div>
        </div> 
    </div>
  )
}

export default EducationPage

import React from 'react'
import Image from 'next/image'
import styles from "./about.module.css"; 
import Navbar from '../components/Navbar/Navbar';



const AboutPage = () => {
  return (
    
    <div className={styles.container}>
     <Navbar />
    <h2 className={styles.heading}>About Me</h2>
    <div className={styles.main}>
      <Image 
        src="/aboutmepic.jpg" 
        alt="about me"
        width={450} 
        height={450} 
        className={styles.image}
        />
        <div>
        <p className={styles.paragraph}>I have done MBA(Finance) from Mohammad Ali Jinnah University.<br /> Currently I have been selected for the Course - Cloud Applied Generative Artificial Intelligence (Governor Sindh Initiative), learning the fundamentals and passionate about building applications.<br /> Along with this running my own online business.
          <br />  Looking forward for good opportunity to enhance my career and professional development.
        </p>
        </div>
        </div>
        
      </div>

  
  )
}

export default AboutPage;

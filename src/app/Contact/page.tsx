import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import styles from "./contact.module.css";
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div>
            <h2 className={styles.heading}>Get in contact</h2>
            <p className={styles.paragraph}>Feel free to send me a message, give me a call, or reach out via this form.</p>
            <div className={styles.icon}>
            <CiMail  size={25} color='green'/> saba_punjwani@yahoo.com
            </div>
            <div className={styles.icon}>
            < FaPhoneAlt size={25} color='blue'/> 0334-2929247
            </div>
        </div>
        
        </div>
        <Footer />
      </div>
    
  )
}

export default ContactPage

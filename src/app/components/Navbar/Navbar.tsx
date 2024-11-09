import styles from ".//navbar.module.css";
import Link from "next/link";




const Navbar = () => {
  return (
    <header className={styles.container}>
      <h3 className={styles.logo}>Saba Ali Zain</h3>
      <nav className={styles.navbar}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Education">Education</Link></li>
          <li><Link href="/Projects">Projects</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
      </nav>
      
    </header>
     
  )
}

export default Navbar;






import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/img/erica-logo.png";
import styles from "../../components/Navbar/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <Image className={styles.logoImg} src={logo} alt="logo"></Image>
      </Link>

      <ul className={styles.navlinks}>
        <li className={styles.navlinksItem}>home</li>
        <li className={styles.navlinksItem}>about me</li>
        <li className={styles.navlinksItem}>projects</li>
        <li className={styles.navlinksItem}>skills</li>
      </ul>

      <Link href="/contact">
        <button className={styles.contactButton}>contact me</button>
      </Link>
    </nav>
  );
}

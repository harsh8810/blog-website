import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'
function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" height={24} width={24} alt='facebook'/>
        <Image src="/instagram.png" height={24} width={24} alt='insta'/>
        <Image src="/tiktok.png" height={24} width={24} alt='tiktok'/>
        <Image src="/youtube.png" height={24} width={24} alt='youtube'/>
      </div>
      <div className={styles.logo}>Freeky Blog</div>
      <div className={styles.links}>
        <ThemeToggle/>
        <Link href={"/"} className={styles.link}>HomePage</Link>
        <Link href={"/"} className={styles.link}>Contact</Link>
        <Link href={"/"} className={styles.link}>About</Link>
        <AuthLinks/>
      </div>
    </div>
  )
}

export default Navbar

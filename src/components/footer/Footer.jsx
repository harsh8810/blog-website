import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src={"/logo.png"} alt="" width={50} height={50} />
          <h1 className={styles.logoText}>Freeky Blog</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa nihil
          doloribus incidunt ullam eaque, omnis natus eum fugit delectus fugiat
          corrupti debitis, deleniti reiciendis cupiditate nobis adipisci quod
          similique quasi!
        </p>
        <div className={styles.icons}>
          <Image src={"/facebook.png"} alt="" height={18} width={18}/>
          <Image src={"/instagram.png"} alt="" height={18} width={18}/>
          <Image src={"/tiktok.png"} alt="" height={18} width={18}/>
          <Image src={"/youtube.png"} alt="" height={18} width={18}/>
        </div>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
        <span className={styles.listTitle}>Links</span>
        <Link href={'/'}>Homepage</Link>
        <Link href={'/'}>Blog</Link>
        <Link href={'/'}>About</Link>
        <Link href={'/'}>Contant</Link>
      </div>

      <div className={styles.list}>
        <span className={styles.listTitle}>Tags</span>
        <Link href={'/'}>Style</Link>
        <Link href={'/'}>Fashion</Link>
        <Link href={'/'}>Food</Link>
        <Link href={'/'}>Travel</Link>
      </div>

      <div className={styles.list}>
        <span className={styles.listTitle}>Social</span>
        <Link href={'/'}>Facebook</Link>
        <Link href={'/'}>Instagram</Link>
        <Link href={'/'}>Tiktok</Link>
        <Link href={'/'}>Youtube</Link>
      </div>

      </div>
    </div>
  );
}

export default Footer;

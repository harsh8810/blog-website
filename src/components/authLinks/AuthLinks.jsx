"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {status} = useSession();
  const logout = async () => {
    await signOut();
  };
  
  return (
    <>
      {status == "unauthenticated" ? (
        <Link href={"/login"} className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href={"/write"}>write</Link>
          <span className={styles.link} onClick={logout}>Logout</span>
        </>
      )}

      <div className={styles.burger} onClick={()=>setOpen(!open)}>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
        <div className={styles.lines}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href={"/"}>HomePage</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Contact</Link>

          {status == "notauthenticated" ? (
            <Link href={"/login"}>Login</Link>
          ) : (
            <>
              <Link href={"/write"}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

"use client";
import { signIn, useSession } from "next-auth/react";
import styles from "./loginPage.module.css";
import { useRouter } from "next/navigation";
import { useEffect } from 'react';

const LoginPage = () => {
  const { status,data } = useSession();
  const router = useRouter();
  console.log(status,data);
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Error occurred during Google sign-in:", error);
      // Handle the error here, such as displaying an error message to the user
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={handleGoogleSignIn}>
          Sign in with Google
        </div>
       
      </div>
    </div>
  );
};

export default LoginPage;

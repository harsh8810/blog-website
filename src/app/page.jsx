import Featured from "@/components/featured/Featured";
import styles from "./homepage.module.css";
import Category from "@/components/category/Category";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function Home({ searchParams }) {
  const page = (searchParams && parseInt(searchParams.page)) || 1;
  const flag = false;
  if(!flag){
    return null;
  }

  return (
    <>
        <div className={styles.container}>
          <Featured />
          <Category />
          <div className={styles.content}>
            <CardList page={page} />
            <Menu />
          </div>
        </div>
      
    </>
  );
}

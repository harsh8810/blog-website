"use client"
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFormLocalStorage =()=>{
    if(typeof window !== "undefined"){

        const value = localStorage.getItem("theme");
        return value || "light";
    }else {
        return "light";  
    }
}
export const ThemeContextProvider = ({children})=>{
    const [theme, setTheme] = useState(()=>getFormLocalStorage());

    const toggle =()=>{
        setTheme(theme == "light" ? "dark" : "light")
    }

    useEffect(()=>{
        localStorage.setItem("theme",theme);
    },[theme])

    const[load,setLoad]=useState(false);
    return <ThemeContext.Provider value={{theme,toggle,load,setLoad}}>
        {children}
    </ThemeContext.Provider>
}
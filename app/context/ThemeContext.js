"use client"
import { createContext, useContext, useState, useEffect } from "react"

//create theme context
export const ThemeContext = createContext();

//context provider
export const ThemeContextProvider = ({children}) =>{
//default theme
const [theme, setTheme] = useState("dark");

//toggle theme func
const toggleTheme = () =>{
    const changeTheme = theme === "dark" ? "light" : "dark";
    setTheme(changeTheme);
}

//apply theme to <html> tag
useEffect(() =>{
    if(theme === "dark"){
        document.documentElement.classList.add("dark")
    }else{
        document.documentElement.classList.remove("dark")
    }
}, [theme])


return (
    <>
    <ThemeContext.Provider value ={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>    
    </>
)

}
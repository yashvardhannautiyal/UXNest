"use client"
import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '@/app/context/ThemeContext'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <>
    <button className="text-2xl hover:cursor-pointer text-purple-700 flex items-center" onClick={toggleTheme}>
        {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
      </button>
    </>
  )
}

export default ThemeToggle

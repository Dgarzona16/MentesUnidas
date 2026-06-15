'use client'

import {useTheme} from "../context/ThemeContext"
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-zinc-200 transition-colors dark:hover:bg-zinc-700">
            {theme === 'light' ? <Sun className="w-5 h-5"/> : <Moon className="w-5 h-5"/>}
        </button>
    )
}

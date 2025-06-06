"use client"

import { useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ThemeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <button
            onClick={toggleMode}
            className={cn(
                "relative flex items-center w-16 h-8 rounded-full p-1 transition-all duration-300 ease-in-out focus:outline-none  focus:ring-opacity-50",
                isDarkMode ? "bg-gray-700 focus:ring-gray-400" : "bg-gray-300 ring-gray-300",
            )}
            aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
        >
            {/* Toggle Circle */}
            <div
                className={cn(
                    "flex items-center justify-center w-6 h-6 rounded-full shadow-md transform transition-all duration-300 ease-in-out",
                    isDarkMode ? "translate-x-8 bg-gray-800" : "translate-x-0 bg-[#e9ddf3]",
                )}
            >
                {/* Icon */}
                {isDarkMode ? <Moon className="w-4 h-4 text-blue-200" /> : <Sun className="w-4 h-4 text-white" />}
            </div>

            {/* Background Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
                <Sun
                    className={cn(
                        "w-4 h-4 transition-opacity duration-300",
                        isDarkMode ? "opacity-30 text-yellow-300" : "opacity-0",
                    )}
                />
                <Moon
                    className={cn(
                        "w-4 h-4 transition-opacity duration-300",
                        isDarkMode ? "opacity-0" : "opacity-30 text-gray-400",
                    )}
                />
            </div>
        </button>
    )
}

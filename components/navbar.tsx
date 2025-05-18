"use client"
import { FloatingNav } from "@/components/ui/floating-navbar"
import { funnelDisplay } from "@/app/fonts"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the theme toggle
  useEffect(() => {
    setMounted(true)
  }, [])

  // Define our navigation items with the current site sections
  const navItems = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "FAQs",
      link: "#faq",
    },
    {
      name: "Book a Call",
      link: "https://calendly.com/hazenbox/30min",
      isExternal: true,
    },
  ]

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems}
        className="bg-white/80 backdrop-blur-md border-gray-200/50 dark:bg-neutral-900/80 dark:border-neutral-800/50"
        logo={
          <span className={`text-xl font-medium text-gray-900 dark:text-white ${funnelDisplay.className}`}>
            Sleeek.design
          </span>
        }
        themeToggle={
          mounted ? (
            <button
              onClick={toggleTheme}
              className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-neutral-800 text-gray-900 dark:text-white"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          ) : null
        }
      />
    </div>
  )
}

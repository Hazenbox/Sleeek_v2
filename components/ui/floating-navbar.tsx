"use client"
import { useState } from "react"
import type React from "react"

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export const FloatingNav = ({
  navItems,
  className,
  logo,
  themeToggle,
}: {
  navItems: {
    name: string
    link: string
    icon?: React.ReactNode
    isExternal?: boolean
  }[]
  className?: string
  logo?: React.ReactNode
  themeToggle?: React.ReactNode
}) => {
  const { scrollYProgress } = useScroll()
  const [visible, setVisible] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.05) {
        setVisible(true)
      } else {
        if (direction < 0) {
          setVisible(true)
        } else {
          setVisible(false)
        }
      }
    }
  })

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isExternal?: boolean) => {
    if (isExternal) {
      // Let the default behavior handle external links
      setMobileMenuOpen(false)
      return
    }

    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed md:top-4 md:bottom-auto bottom-4 inset-x-0 mx-auto border border-transparent rounded-full z-[5000] px-6 py-3 items-center justify-between max-w-7xl",
          className,
        )}
      >
        {logo && <div className="mr-8">{logo}</div>}

        {/* Mobile menu button */}
        <div className="md:hidden ml-auto flex items-center">
          {themeToggle}
          <button
            className="ml-2 text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.slice(0, -1).map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={(e) => handleNavClick(e, navItem.link, navItem.isExternal)}
              className="text-gray-600 hover:text-gray-900 dark:text-neutral-400 dark:hover:text-white transition-all duration-300 text-sm font-normal relative group"
            >
              {navItem.icon && <span className="block sm:hidden">{navItem.icon}</span>}
              <span className="text-sm">{navItem.name}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-teal-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Special styling for the last item (CTA button) */}
          {navItems.length > 0 && (
            <a
              href={navItems[navItems.length - 1].link}
              onClick={(e) =>
                handleNavClick(e, navItems[navItems.length - 1].link, navItems[navItems.length - 1].isExternal)
              }
              target={navItems[navItems.length - 1].isExternal ? "_blank" : undefined}
              rel={navItems[navItems.length - 1].isExternal ? "noopener noreferrer" : undefined}
              className="border text-sm font-normal relative border-gray-300 text-gray-900 dark:text-white dark:border-neutral-700 px-4 py-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-neutral-800 transition-colors"
            >
              <span>{navItems[navItems.length - 1].name}</span>
            </a>
          )}

          {themeToggle}
        </div>
      </motion.div>

      {/* Mobile navigation menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-20 left-4 right-4 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl shadow-lg z-[5000] overflow-hidden md:hidden"
          >
            <div className="p-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((navItem, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={navItem.link}
                    onClick={(e) => handleNavClick(e, navItem.link, navItem.isExternal)}
                    target={navItem.isExternal ? "_blank" : undefined}
                    rel={navItem.isExternal ? "noopener noreferrer" : undefined}
                    className={`text-sm py-2 ${
                      idx === navItems.length - 1
                        ? "text-gray-900 dark:text-white font-normal bg-gray-200 dark:bg-neutral-800 rounded-lg px-4 text-center"
                        : "text-gray-600 dark:text-neutral-400 hover:text-gray-900 dark:hover:text-white font-normal"
                    }`}
                  >
                    {navItem.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatePresence>
  )
}

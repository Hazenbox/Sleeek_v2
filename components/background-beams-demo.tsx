"use client"
import { useState, useEffect } from "react"
import { BackgroundBeams } from "@/components/ui/background-beams"
import ContactModal from "./contact-modal"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import CoverDemo from "./cover-demo"
import { motion } from "motion/react"

export default function BackgroundBeamsDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <div
      id="contact"
      className="h-[40rem] w-full rounded-md bg-white dark:bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
    >
      <div className="max-w-2xl mx-auto p-4 -mt-4">
        <CoverDemo />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-gray-600 dark:text-neutral-400 max-w-lg mx-auto mt-2 mb-6 text-center relative z-10"
        >
          From 0→1 to scale, I collaborate with founders and teams to shape product foundations, build scalable design
          systems, and craft AI-first experiences that move fast—without cutting corners.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-4 relative z-10"
        >
          <a href="https://calendly.com/hazenbox/30min" target="_blank" rel="noopener noreferrer">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-white py-2.5 px-6"
            >
              <span>Book a Call</span>
            </HoverBorderGradient>
          </a>
        </motion.div>
      </div>

      {/* Animated background for desktop, static image for mobile */}
      {!isMobile ? (
        <BackgroundBeams className="opacity-70 dark:opacity-100" />
      ) : (
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-70 dark:opacity-100"
          style={{ backgroundImage: "url(/images/mobile-background.png)" }}
        ></div>
      )}

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

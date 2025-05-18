"use client"
import { useState, useRef } from "react"
import type React from "react"
import { motion } from "motion/react"

interface MagnetButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export default function MagnetButton({ onClick, children, className = "" }: MagnetButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate distance from center (in pixels)
    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    // Increased magnet effect (reduced divisor)
    const moveX = distanceX / 2
    const moveY = distanceY / 2

    setPosition({ x: moveX, y: moveY })
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  return (
    <div className="relative">
      <motion.button
        ref={buttonRef}
        className={`relative z-10 px-6 py-2.5 rounded-full bg-transparent text-white font-medium border border-neutral-700 hover:border-teal-500 transition-colors ${className}`}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        animate={{
          x: isHovered ? position.x : 0,
          y: isHovered ? position.y : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      >
        {children}
      </motion.button>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 0.15 : 0,
          x: isHovered ? position.x : 0,
          y: isHovered ? position.y : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          x: isHovered ? position.x : 0,
          y: isHovered ? position.y : 0,
        }}
        transition={{
          opacity: { duration: 0.3 },
          x: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
          y: { type: "spring", stiffness: 150, damping: 15, mass: 0.1 },
        }}
        style={{
          background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
    </div>
  )
}

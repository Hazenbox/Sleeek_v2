"use client"
import { useState } from "react"
import type React from "react"
import { motion } from "motion/react"

interface HoverBorderGradientButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
  borderRadius?: number
  gradientFromColor?: string
  gradientToColor?: string
}

export default function HoverBorderGradientButton({
  onClick,
  children,
  className = "",
  borderRadius = 9999, // Default to full rounded (pill)
  gradientFromColor = "#00DBDE",
  gradientToColor = "#FC00FF",
}: HoverBorderGradientButtonProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative group">
      {/* Gradient border container with blur effect */}
      <div
        className={`absolute -inset-0.5 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300`}
        style={{
          borderRadius: borderRadius,
          background: `linear-gradient(to right, ${gradientFromColor}, ${gradientToColor})`,
        }}
      />

      {/* Button with gradient border */}
      <motion.button
        className={`relative px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium border-0 ${className}`}
        style={{ borderRadius: borderRadius }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <span className="relative z-10">{children}</span>

        {/* Inner gradient border */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            borderRadius: borderRadius,
            background: `linear-gradient(to right, ${gradientFromColor}, ${gradientToColor})`,
            padding: "1px",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </motion.button>
    </div>
  )
}

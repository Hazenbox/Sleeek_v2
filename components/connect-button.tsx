"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "motion/react"

interface ConnectButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export default function ConnectButton({ onClick, children }: ConnectButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative">
      <motion.button
        className="relative z-10 px-6 py-2.5 rounded-full bg-transparent text-white font-medium border border-neutral-700 hover:border-teal-500 transition-colors"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onClick}
      >
        {children}
      </motion.button>
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 opacity-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.15 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute inset-0 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
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

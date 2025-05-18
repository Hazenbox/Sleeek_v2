"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "motion/react"
import { X } from "lucide-react"
import { funnelDisplay } from "@/app/fonts"

interface AnimatedModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function AnimatedModal({ isOpen, onClose, title, children }: AnimatedModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      if (!isOpen) {
        document.body.style.overflow = "auto"
      }
    }
  }, [isOpen, onClose])

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={handleOverlayClick}
        >
          <motion.div
            className="bg-neutral-900 rounded-2xl w-full max-w-md overflow-hidden relative"
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                onComplete: () => setAnimationComplete(true),
              },
            }}
            exit={{
              scale: 0.9,
              y: 20,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <div className="relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10"
              >
                <X size={20} />
                <span className="sr-only">Close</span>
              </button>

              <div className="p-6 border-b border-neutral-800">
                <h2 className={`text-2xl font-medium text-white ${funnelDisplay.className}`}>{title}</h2>
              </div>

              <div className="p-6">{children}</div>
            </div>

            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: animationComplete ? 1 : 0,
                transition: { delay: 0.3, duration: 0.5 },
              }}
              exit={{ opacity: 0 }}
              style={{
                background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
                padding: "1px",
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

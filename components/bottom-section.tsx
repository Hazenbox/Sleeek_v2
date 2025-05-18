"use client"
import { motion } from "motion/react"
import { funnelDisplay } from "@/app/fonts"
import { useState } from "react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function BottomSection() {
  const [isCopied, setIsCopied] = useState(false)
  const email = "hazenbox@gmail.com"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className="py-32 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            className={`text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-8 ${funnelDisplay.className}`}
          >
            Ready to elevate your design?
          </h2>

          <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto pt-6 mb-1 font-light">Email us</p>

          <div
            className="inline-flex items-center text-gray-900 dark:text-white text-base mb-8 relative cursor-pointer font-light group"
            onClick={copyToClipboard}
          >
            {email}
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-200 dark:bg-neutral-800 text-gray-900 dark:text-white text-xs py-1 px-2 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              Copy email
            </span>
            {isCopied && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-800 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </div>

          <div className="text-gray-500 text-xs mb-8">or</div>

          <div className="flex justify-center">
            <a href="https://calendly.com/hazenbox/30min" target="_blank" rel="noopener noreferrer">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="bg-white dark:bg-neutral-950 text-gray-900 dark:text-white py-2.5 px-6"
              >
                <span>Book a Call</span>
              </HoverBorderGradient>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

"use client"
import Image from "next/image"
import { Github, Feather, Weight, Zap, Shield, Flag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { motion } from "motion/react"

export default function PortfolioProjects() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        {/* Arbor Project - Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="md:col-span-4 bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h3 className={`text-4xl font-light text-gray-900 dark:text-white font-funnel mb-4 md:mb-0`}>Arbor</h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
              >
                visualidentity
              </Badge>
              <Badge
                variant="outline"
                className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
              >
                website
              </Badge>
              <Badge
                variant="outline"
                className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
              >
                productdesign
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Table image and laptop image stacked on the left */}
            <div className="grid grid-cols-1 gap-4">
              {/* Data sources table image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-neutral-900 p-3.5 rounded-xl aspect-[4/3] flex items-center justify-center"
              >
                <div className="w-full h-full relative">
                  <Image src="/images/arbor_1.png" alt="Arbor Data Sources" fill className="object-contain" />
                </div>
              </motion.div>

              {/* Laptop image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-100 dark:bg-neutral-900 p-3.5 rounded-xl aspect-[4/3] flex items-center justify-center"
              >
                <div className="w-full h-full relative">
                  <Image src="/images/arbor_2.png" alt="Arbor Website" fill className="object-contain" />
                </div>
              </motion.div>
            </div>

            {/* Chart interface on the right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-neutral-900 p-3.5 rounded-xl aspect-[3/4] md:aspect-auto md:h-full flex items-center justify-center"
            >
              <div className="w-full h-full relative">
                <Image src="/images/arbor_3.png" alt="Arbor Chart Interface" fill className="object-contain" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-[auto_auto_auto] gap-4">
          {/* Header Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-4 bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl flex flex-col md:flex-row justify-between items-start md:items-center"
          >
            <h3 className={`text-4xl font-light text-gray-900 dark:text-white font-funnel mb-4 md:mb-0`}>
              designsystem
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
              >
                visualidentity
              </Badge>
              <Badge
                variant="outline"
                className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
              >
                webdesign
              </Badge>
            </div>
          </motion.div>

          {/* Large Project Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 md:row-span-2 bg-gray-200 dark:bg-neutral-800 rounded-xl overflow-hidden relative group"
          >
            <div className="p-3.5">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="E-commerce Platform"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
              <div className="flex justify-between items-end">
                <div>
                  <h3 className={`text-4xl font-light text-gray-900 dark:text-white font-funnel`}>2.5</h3>
                  <p className="text-sm text-gray-800/80 dark:text-white/80">/ weeks development</p>
                </div>
                <div className="text-right">
                  <h3 className={`text-4xl font-light text-gray-900 dark:text-white font-funnel`}>6</h3>
                  <p className="text-sm text-gray-800/80 dark:text-white/80">/ team members</p>
                </div>
              </div>
              <div className="w-full h-[1px] bg-gray-900/20 dark:bg-white/20 my-4"></div>
              <div className="flex justify-between text-gray-800/80 dark:text-white/80 text-sm">
                <span>Full e-commerce solution</span>
                <span>React + Node.js</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl flex flex-col justify-center"
          >
            <div className="space-y-6">
              <div>
                <h3 className={`text-5xl font-light text-gray-900 dark:text-white font-funnel`}>20+</h3>
                <p className="text-gray-600 dark:text-neutral-400">Projects completed</p>
              </div>
              <div>
                <h3 className={`text-5xl font-light text-gray-900 dark:text-white font-funnel`}>150+</h3>
                <p className="text-gray-600 dark:text-neutral-400">Happy clients</p>
              </div>
              <div>
                <h3 className={`text-5xl font-light text-gray-900 dark:text-white font-funnel`}>5+</h3>
                <p className="text-gray-600 dark:text-neutral-400">Years of experience</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "UI/UX", "Figma", "AWS"].map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="bg-gray-200 dark:bg-neutral-800 text-gray-700 dark:text-neutral-300 font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Icons Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-blue-100 dark:bg-blue-900/30 p-6 rounded-xl"
          >
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: <Feather size={24} />, label: "Design" },
                { icon: <Zap size={24} />, label: "Performance" },
                { icon: <Shield size={24} />, label: "Security" },
                { icon: <Weight size={24} />, label: "Optimization" },
                { icon: <Github size={24} />, label: "Version Control" },
                { icon: <Flag size={24} />, label: "Deployment" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-gray-800 dark:bg-black flex items-center justify-center text-white mb-2">
                    {item.icon}
                  </div>
                  <span className="text-xs text-center text-gray-700 dark:text-neutral-300">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Small Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-yellow-100 dark:bg-yellow-900/30 p-6 rounded-xl"
          >
            <h3 className="text-lg font-light mb-3 text-gray-900 dark:text-white">Responsive design</h3>
            <div className="flex justify-center mb-4">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-black flex items-center justify-center text-white">
                  <Feather size={20} />
                </div>
                <div className="w-12 h-12 rounded-full bg-gray-800 dark:bg-black flex items-center justify-center text-white -ml-4">
                  <Zap size={20} />
                </div>
              </div>
            </div>
            <p className="text-sm mb-4 text-gray-600 dark:text-neutral-400">
              Optimized for all devices and screen sizes
            </p>
            <div className={`text-4xl font-light text-gray-900 dark:text-white font-funnel`}>
              100%
              <span className="text-base font-normal text-gray-600 dark:text-neutral-400"> / coverage</span>
            </div>
          </motion.div>

          {/* Temperature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-100 dark:bg-neutral-900 p-6 rounded-xl"
          >
            <h3 className="text-lg font-light mb-3 text-gray-900 dark:text-white">
              Fast performance
              <span className="ml-2">✨</span>
            </h3>
            <p className="text-sm mb-6 text-gray-600 dark:text-neutral-400">
              Our sites load in milliseconds for optimal user experience
            </p>
            <div className={`text-4xl font-light text-gray-900 dark:text-white font-funnel`}>
              95+
              <span className="text-base font-normal text-gray-600 dark:text-neutral-400"> / PageSpeed</span>
            </div>
          </motion.div>

          {/* Aerodynamic Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1 bg-gray-200 dark:bg-neutral-800 p-6 rounded-xl relative overflow-hidden"
          >
            <h3 className="text-lg font-light mb-3 relative z-10 text-gray-900 dark:text-white">Aerodynamic</h3>
            <div className="relative z-10">
              <p className="text-sm mb-4 text-gray-600 dark:text-neutral-400">Streamlined development process</p>
            </div>
            <div className="absolute right-0 bottom-0 w-full h-32">
              <svg viewBox="0 0 200 100" className="w-full h-full">
                <path
                  d="M0,50 Q50,20 100,50 T200,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  className="animate-pulse text-gray-900 dark:text-white"
                />
                <path
                  d="M0,60 Q50,30 100,60 T200,60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  className="animate-pulse text-gray-900 dark:text-white"
                />
                <path
                  d="M0,70 Q50,40 100,70 T200,70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeOpacity="0.2"
                  className="animate-pulse text-gray-900 dark:text-white"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

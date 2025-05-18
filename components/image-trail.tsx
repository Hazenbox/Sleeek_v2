"use client"
import { useRef, useState, useEffect } from "react"
import { motion } from "motion/react"

const images = [
  "https://cdn.dribbble.com/userupload/31912399/file/original-f26a9767189a1a759649812df60c0aee.jpg?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/27273951/file/original-138520e44a283dad8f61616259154975.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/25746640/file/original-7d04d761e0e4cdb0e5c9627b5748b0da.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/25235488/file/original-75a3f6522eafd832d18c6f29846afe9f.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/42407224/file/original-c88d0702b7fbf76f09e802a6a0e3dd69.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/42201425/file/original-0b993461e01802b778ce43cace892938.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/24373802/file/original-b724b53aa76bae5bfa2fc37e7a5dd751.png?format=webp&resize=700x525&vertical=center",
  "https://cdn.dribbble.com/userupload/42353552/file/original-be2485aa8a719c3be8cfdc11b9a64f08.png?format=webp&resize=700x525&vertical=center",
]

export default function ImageTrail() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isInside, setIsInside] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()

      // Check if mouse is inside the container
      if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
        setIsInside(true)
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      } else {
        setIsInside(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section className="py-20 px-4 bg-neutral-950 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-light text-white mb-4 font-funnel`}>Our Work</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">Hover over the area below to explore our latest projects</p>
        </motion.div>

        <div
          ref={containerRef}
          className="relative h-[60vh] w-full rounded-xl bg-neutral-900/50 border border-neutral-800 overflow-hidden"
        >
          <div className="absolute inset-0 flex items-center justify-center text-neutral-600 pointer-events-none">
            <p className="text-lg">Move your cursor to reveal projects</p>
          </div>

          {images.map((src, index) => (
            <motion.div
              key={index}
              className="absolute pointer-events-none"
              style={{
                width: 300,
                height: 225,
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: images.length - index,
              }}
              animate={{
                x: isInside ? cursorPos.x - 150 : window.innerWidth / 2 - 150,
                y: isInside ? cursorPos.y - 112 : window.innerHeight / 2 - 112,
                opacity: isInside ? 1 : 0.3,
                scale: isInside ? 1 - index * 0.05 : 0.8,
                rotate: isInside ? (index % 2 === 0 ? 1 : -1) * Math.random() * 10 : 0,
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.5,
                delay: index * 0.03,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

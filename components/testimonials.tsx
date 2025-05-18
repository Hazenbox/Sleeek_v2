"use client"
import { motion } from "motion/react"
import { funnelDisplay } from "@/app/fonts"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    title: "CEO",
    company: "Innovate Solutions",
    quote:
      "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Emily Davis",
    title: "Product Manager",
    company: "Nexus Digital",
    quote:
      "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "David Lee",
    title: "Founder",
    company: "GreenLeaf Enterprises",
    quote:
      "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "Mark Thompson",
    title: "Creative Director",
    company: "PixelWorks Studio",
    quote:
      "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning websites.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "Brian Clark",
    title: "Team Lead",
    company: "Mandro Designs",
    quote:
      "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "Daniel Carter",
    title: "Founder",
    company: "Fusion Studios",
    quote:
      "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2
            className={`text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-4 ${funnelDisplay.className}`}
          >
            What clients say
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-6"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-neutral-800">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-gray-700 dark:text-neutral-300 text-sm mb-5 font-light">"{testimonial.quote}"</p>

              <div className="border-t border-gray-200 dark:border-neutral-800 pt-4">
                <p className="font-medium text-gray-900 dark:text-white text-sm">
                  {testimonial.name} <span className="text-gray-500 mx-2">•</span> {testimonial.title}
                </p>
                <p className="text-gray-500 text-xs">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

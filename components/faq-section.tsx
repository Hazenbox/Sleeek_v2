"use client"
import { motion, AnimatePresence } from "motion/react"
import { funnelDisplay } from "@/app/fonts"
import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Why not just hire a full-time designer?",
    answer:
      "Hiring a senior designer full-time can cost over $100,000 a year—and that's before adding benefits. With Sleeek Design, you get high-quality design work only when you need it, saving you money and hassle.",
  },
  {
    question: "What do I get with a subscription?",
    answer:
      "You can request as many designs as you want, with one task worked on at a time. You also get unlimited revisions. We handle everything from UI/UX and landing pages to branding, web graphics, and more. Have something specific in mind? Just let us know.",
  },
  {
    question: "How quickly will I get my designs?",
    answer:
      "Most tasks are finished in 1–3 business days. The timeline depends on how complex the work is, but we always aim for fast and high-quality results.",
  },
  {
    question: "Who's doing the design work?",
    answer:
      "All designs are done by Harshil Acharya, the founder of Sleeek Design. No outsourcing, no junior staff—just consistent, high-quality work from one experienced designer.",
  },
  {
    question: "How do I send in design requests?",
    answer:
      "It's easy. You'll use Trello to submit your requests. Tasks are added to your queue and worked on one by one.",
  },
  {
    question: "What if I don't like a design?",
    answer:
      "No problem—every plan includes unlimited revisions. We'll keep working on it until you're completely happy.",
  },
  {
    question: "Is there a limit to how many tasks I can request?",
    answer:
      "No limits! You can add as many requests as you want. We'll complete them one at a time, in the order you choose.",
  },
  {
    question: "Can I pause my subscription?",
    answer:
      "Yes! If you only have a few tasks right now, you can pause your subscription and save the remaining days for later. For example, if you use 21 out of 31 days, you'll still have 10 days to use later when you need more work.",
  },
  {
    question: "What kind of design work do you do?",
    answer:
      "We design websites, mobile apps, and also develop using Webflow and Framer. We don't currently support 3D modeling or very complex animations.",
  },
  {
    question: "What design tools do you use?",
    answer:
      "Figma is our main tool for UI/UX and visual design. For building websites, we use no-code tools like Webflow and Framer (depending on your plan).",
  },
  {
    question: "What if I just need one project done?",
    answer:
      "That works! You can subscribe for just a month, get your project done, pause your plan, and come back later when you need more design help.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We don't offer refunds after the first 7 days of service. Also, if a project is already completed, we can't refund it. Thanks for understanding!",
  },
]

// Custom FAQ Accordion component
const FAQAccordion = ({ items }: { items: { question: string; answer: string }[] }) => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-2">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          <div className="rounded-lg overflow-hidden">
            <div
              className={cn(
                "rounded-lg cursor-pointer transition-all duration-300",
                openIndex === index
                  ? "bg-gray-100 dark:bg-neutral-900 rounded-b-none"
                  : "hover:bg-gray-100 dark:hover:bg-neutral-900",
              )}
              onClick={() => toggleAccordion(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center p-5 text-gray-900 dark:text-white">
                <h3 className="text-base font-normal">{item.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-4 w-4 text-gray-500" />
                </motion.div>
              </div>
            </div>

            {/* Answer */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-gray-100 dark:bg-neutral-900 overflow-hidden rounded-b-lg"
                >
                  <div className="p-5 pt-0 text-gray-600 dark:text-neutral-400">
                    <p className="text-gray-600 dark:text-neutral-400 max-w-none font-light">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 bg-white dark:bg-neutral-950">
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
            Your Questions are answered
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Everything you need to know about our design services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  )
}

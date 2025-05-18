"use client"
import { funnelDisplay } from "@/app/fonts"
import { Check } from "lucide-react"
import { motion } from "motion/react"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white dark:bg-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column - Heading and Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <h2
              className={`text-3xl md:text-4xl font-light text-gray-900 dark:text-white mb-6 leading-tight ${funnelDisplay.className}`}
            >
              Your plug-and-play design partner — productized for scale.
            </h2>
            <p className="text-gray-600 dark:text-neutral-400 max-w-md">
              No contracts. No surprises. Just consistent, high-quality design, delivered like a product.
            </p>
          </motion.div>

          {/* Right Column - Pricing Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Starter Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-8"
            >
              <div className="mb-6">
                <h3 className={`text-xl font-light text-gray-900 dark:text-white mb-6 ${funnelDisplay.className}`}>
                  Starter
                </h3>
                <div className="mb-4">
                  <span className={`text-5xl font-light text-gray-900 dark:text-white ${funnelDisplay.className}`}>
                    $2999
                  </span>
                  <span className="text-gray-600 dark:text-neutral-400 ml-1">/month</span>
                </div>
                <p className="text-gray-600 dark:text-neutral-400 text-sm">
                  Ideal for founders looking to experience premium design.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Unlimited design request (1 at a time)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">2–3 day turnaround</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Website or Mobile App UI Design</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Personal Trello Board</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Pause or Cancel Anytime</span>
                </div>
              </div>

              <div className="flex justify-start">
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

            {/* All-In-One Plan */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 dark:bg-neutral-900 rounded-2xl p-8"
            >
              <div className="mb-6">
                <h3 className={`text-xl font-light text-gray-900 dark:text-white mb-6 ${funnelDisplay.className}`}>
                  All-In-One
                </h3>
                <div className="mb-4">
                  <span className={`text-5xl font-light text-gray-900 dark:text-white ${funnelDisplay.className}`}>
                    $3999
                  </span>
                  <span className="text-gray-600 dark:text-neutral-400 ml-1">/month</span>
                </div>
                <p className="text-gray-600 dark:text-neutral-400 text-sm">
                  Perfect for founders looking for full support while growing their business.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Unlimited design request (2 at a time)</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">2–3 days turnaround</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Website or Mobile App UI Design</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Personal Trello Board</span>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-neutral-300">Pause or Cancel Anytime</span>
                </div>
              </div>

              <div className="flex justify-start">
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
        </div>
      </div>
    </section>
  )
}

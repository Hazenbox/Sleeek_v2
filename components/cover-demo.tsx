"use client"
import { Cover } from "@/components/ui/cover"
import { funnelDisplay } from "@/app/fonts"

export default function CoverDemo() {
  return (
    <div className="pt-24 pb-1">
      <h1
        className={`text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 pt-6 pb-4 bg-clip-text text-transparent bg-gradient-to-b from-gray-800 via-gray-700 to-gray-700 dark:from-neutral-800 dark:via-white dark:to-white ${funnelDisplay.className}`}
      >
        Plug-in design for
        <br className="hidden md:block" />
        <div className="mt-1">
          <Cover>fast-moving teams</Cover>
        </div>
      </h1>
    </div>
  )
}

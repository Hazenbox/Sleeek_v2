import type React from "react"
import "./globals.css"
import { dmSans, funnelDisplay } from "./fonts"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${funnelDisplay.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <body className={`font-sans ${dmSans.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

export const metadata = {
  generator: "v0.dev",
}

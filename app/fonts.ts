import { DM_Sans, Funnel_Display } from "next/font/google"

// Configure DM Sans font
export const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Configure Funnel Display font
export const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-funnel",
  weight: ["300", "400", "500", "600", "700", "800"],
})

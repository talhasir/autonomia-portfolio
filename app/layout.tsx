import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "Autonomia | Software Agent Automation Services",
  description:
    "We build intelligent software agents that automate your business logic and backend systems. AI Agent Development, Workflow Automation, and Backend Architecture.",
  generator: "v0.app",
  keywords: ["AI agents", "automation", "software development", "backend systems", "workflow automation"],
}

export const viewport: Viewport = {
  themeColor: "#00FF00",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

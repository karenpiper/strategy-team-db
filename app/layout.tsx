import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AirtableUserProvider } from "@/use-airtable-user"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Strategy Team Dashboard",
  description: "Your daily dose of team vibes and productivity",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <AirtableUserProvider>
            {children}
            <Toaster />
          </AirtableUserProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

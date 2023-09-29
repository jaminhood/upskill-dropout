import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
 title: "UpSkill Dropout",
 description: "Changing The World, One Line Of Code At A Time",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <Header />
   <body className={inter.className}>{children}</body>
   <Footer />
  </html>
 )
}

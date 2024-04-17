import './globals.css'
import type { Metadata } from 'next'
import {Poppins} from 'next/font/google'
import Header from "@/app/components/Header";
import React from "react";

const poppins = Poppins({ subsets: ['latin'], weight: ["400", "500", "600", "700"] })
export const revalidate = 60

export const metadata: Metadata = {
  title: 'Virgy Ferdian',
  description: 'Virgy Ferdian personal website.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-gradient-to-b from-primary to-black w-screen overflow-x-hidden"}>
        <Header/>
        {children}
      </body>
    </html>
  )
}

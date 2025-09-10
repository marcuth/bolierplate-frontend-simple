import { Geist, Geist_Mono } from "next/font/google"
import type { Metadata } from "next"

import { ThemeSwitcher } from "@/components/ui/theme-switcher"
import { SidebarTrigger } from "@/components/ui/sidebar"
import Providers from "./providers"
import "./globals.css"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
})

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
})

export const metadata: Metadata = {
    title: "Bolierplate",
    description: "Created by Marcuth",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Providers>
                    <main className="w-full">
                        <div className="h-16 flex items-center justify-between px-4">
                            <div className="flex items-center space-x-2">
                                <SidebarTrigger />
                                <span className="text-xs">Menu</span>
                            </div>
                            <ThemeSwitcher/>
                        </div>
                        <div className="px-4">{children}</div>
                    </main>
                </Providers>
            </body>
        </html>
    )
}

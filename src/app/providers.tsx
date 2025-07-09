import { ThemeProvider } from "next-themes"
import { cookies } from "next/headers"
import { FC, ReactNode } from "react"

import { SidebarProvider, SidebarTrigger } from "../components/ui/sidebar"
import AppSidebar from "../components/layout/application/app-sidebar"

type Props = {
    children: ReactNode
}

const Providers: FC<Props> = async ({ children }) => {
    const cookieStore = await cookies()
    const defaultOpen = cookieStore.get("sidebar_state")?.value === "true"

    return (
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system" themes={["light", "dark"]}>
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar />
                <main>
                    <div className="h-16 flex items-center justify-between px-4">
                        <div className="flex items-center space-x-2">
                            <SidebarTrigger />
                            <span className="text-xs">Menu</span>
                        </div>
                    </div>
                    <div className="px-4">{children}</div>
                </main>
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default Providers

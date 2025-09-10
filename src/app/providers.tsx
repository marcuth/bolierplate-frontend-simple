import { ThemeProvider } from "next-themes"
import { cookies } from "next/headers"
import { FC, ReactNode } from "react"

import AppSidebar from "@/components/layout/application/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

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
                {children}
            </SidebarProvider>
        </ThemeProvider>
    )
}

export default Providers

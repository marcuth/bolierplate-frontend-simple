"use client"

import { LuBraces, LuCopy, LuPencil, LuTrash } from "react-icons/lu"
import { toast } from "sonner"
import { FC } from "react"

import { useRouter } from "next/navigation"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deleteScraper, FindOneScraperResponse } from "@/services/api/scrapers"

type Props = {
    children: React.ReactNode
    data: FindOneScraperResponse
    accessToken: string
}

const ScraperDropdownMenu: FC<Props> = ({ children, data, accessToken }) => {
    const router = useRouter()

    const handleClickOnCopyIdButton = async () => {
        await navigator.clipboard.writeText(data.id)
        toast.success("ID copiado para a Área de Transferência.")
    }

    const handleClickOnDeleteButton = async () => {
        try {
            await deleteScraper(data.id, accessToken)
            toast.success(`O cliente "${data.name}" foi excluido com sucesso!`)

            router.push("/scrapers")
        } catch (error) {
            console.error("Error when deleting client:", error)
            toast.error("Não foi possível excluir o cliente!")
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>Ações</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleClickOnCopyIdButton}>
                    <LuCopy /> Copiar ID
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LuPencil /> Editar Informações Básicas
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LuBraces /> Editar Modelo de Parsing
                </DropdownMenuItem>
                <DropdownMenuItem variant="destructive" onClick={handleClickOnDeleteButton}>
                    <LuTrash /> Excluir Scraper
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ScraperDropdownMenu

"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Car, LogOut, User } from "lucide-react"
import { useRouter } from "next/navigation"

export default function Header() {
  const router = useRouter()

  const handleLogout = () => {
    // In a real app, you would handle logout here
    router.push("/")
  }

  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Car className="h-6 w-6 text-blue-800" />
          <span className="font-bold text-xl">Sistema de Veículos</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium">João Silva</span>
          </div>
          <Button variant="ghost" size="icon" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
            <span className="sr-only">Sair</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search } from "lucide-react"

export default function VehicleSearch() {
  const [licensePlate, setLicensePlate] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [notFound, setNotFound] = useState(false)
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSearching(true)
    setNotFound(false)

    // In a real app, you would search for the vehicle here
    // For demo purposes, we'll simulate a search
    setTimeout(() => {
      setIsSearching(false)

      // For demo: if plate contains "ABC", we'll find it, otherwise not found
      if (licensePlate.includes("ABC")) {
        router.push(`/vehicle/${licensePlate}`)
      } else {
        setNotFound(true)
      }
    }, 1000)
  }

  const handleRegisterNew = () => {
    router.push(`/vehicle/register?plate=${licensePlate}`)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Buscar Veículo</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Digite a placa do veículo"
              className="pl-10"
              value={licensePlate}
              onChange={(e) => setLicensePlate(e.target.value.toUpperCase())}
              required
            />
          </div>
          <Button type="submit" className="bg-blue-800 hover:bg-blue-900" disabled={isSearching}>
            {isSearching ? "Buscando..." : "Buscar"}
          </Button>
        </form>

        {notFound && (
          <div className="mt-4 text-center">
            <p className="text-gray-600 mb-4">Nenhum veículo encontrado com a placa {licensePlate}</p>
            <Button onClick={handleRegisterNew} className="bg-green-600 hover:bg-green-700">
              Cadastrar Novo Veículo
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

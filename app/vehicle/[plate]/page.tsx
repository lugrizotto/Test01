"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import VehicleDetails from "@/components/vehicle-details"
import DocumentsList from "@/components/documents-list"

// Mock data for demo purposes
const getMockVehicleData = (plate: string) => {
  return {
    plate,
    brand: "Toyota",
    model: "Corolla",
    year: "2022",
    chassis: "9BRBL3HE1J0123456",
    entryDate: "2023-10-15",
    lastUpdate: "2023-11-02",
    branch: "Filial Central",
    responsible: "João Silva",
    documents: [
      {
        id: "1",
        name: "Laudo de Vistoria",
        type: "Laudo",
        uploadDate: "2023-10-15",
        url: "#",
      },
      {
        id: "2",
        name: "Documento do Veículo",
        type: "DOC",
        uploadDate: "2023-10-15",
        url: "#",
      },
      {
        id: "3",
        name: "Certificado de Transferência",
        type: "ECV",
        uploadDate: "2023-10-16",
        url: "#",
      },
    ],
  }
}

export default function VehiclePage() {
  const params = useParams()
  const plate = params.plate as string
  const [vehicle, setVehicle] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // In a real app, you would fetch the vehicle data from an API
    // For demo purposes, we'll use mock data
    setTimeout(() => {
      setVehicle(getMockVehicleData(plate))
      setLoading(false)
    }, 1000)
  }, [plate])

  if (loading) {
    return (
      <main className="min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-center py-10">Carregando informações do veículo...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Detalhes do Veículo - {vehicle.plate}</h1>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <VehicleDetails vehicle={vehicle} />
          <DocumentsList documents={vehicle.documents} vehiclePlate={vehicle.plate} responsible={vehicle.responsible} />
        </div>
      </div>
    </main>
  )
}

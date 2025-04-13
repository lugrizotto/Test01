"use client"

import { useSearchParams, useRouter } from "next/navigation"
import VehicleForm from "@/components/vehicle-form"

export default function RegisterVehiclePage() {
  const searchParams = useSearchParams()
  const initialPlate = searchParams.get("plate") || ""
  const router = useRouter()

  const handleSuccess = (plate: string) => {
    // In a real app, you would redirect to the vehicle details page
    // after successful registration
    router.push(`/vehicle/${plate}`)
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Cadastrar Novo Veículo</h1>

        <VehicleForm initialPlate={initialPlate} onSuccess={handleSuccess} />
      </div>
    </main>
  )
}

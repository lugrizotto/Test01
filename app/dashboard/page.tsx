import VehicleSearch from "@/components/vehicle-search"

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Sistema de Gestão de Veículos</h1>
        <VehicleSearch />
      </div>
    </main>
  )
}

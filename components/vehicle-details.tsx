import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Car, Hash, MapPin, User } from "lucide-react"

interface VehicleDetailsProps {
  vehicle: {
    plate: string
    brand: string
    model: string
    year: string
    chassis: string
    entryDate: string
    lastUpdate: string
    branch: string
    responsible: string
  }
}

export default function VehicleDetails({ vehicle }: VehicleDetailsProps) {
  // Format dates for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5 text-blue-800" />
          Informações do Veículo
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Placa</p>
            <p className="font-medium">{vehicle.plate}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Marca</p>
            <p className="font-medium">{vehicle.brand}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Modelo</p>
            <p className="font-medium">{vehicle.model}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Ano</p>
            <p className="font-medium">{vehicle.year}</p>
          </div>
          <div className="space-y-1 col-span-2">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Hash className="h-4 w-4" /> Chassi
            </p>
            <p className="font-medium">{vehicle.chassis}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Data de Entrada
            </p>
            <p className="font-medium">{formatDate(vehicle.entryDate)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <Calendar className="h-4 w-4" /> Última Atualização
            </p>
            <p className="font-medium">{formatDate(vehicle.lastUpdate)}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <MapPin className="h-4 w-4" /> Filial
            </p>
            <p className="font-medium">{vehicle.branch}</p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-500 flex items-center gap-1">
              <User className="h-4 w-4" /> Responsável
            </p>
            <p className="font-medium">{vehicle.responsible}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

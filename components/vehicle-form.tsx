"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Car, Calendar } from "lucide-react"

interface VehicleFormProps {
  initialPlate?: string
  onSuccess: (plate: string) => void
}

export default function VehicleForm({ initialPlate = "", onSuccess }: VehicleFormProps) {
  const [formData, setFormData] = useState({
    plate: initialPlate,
    brand: "",
    model: "",
    year: "",
    chassis: "",
    entryDate: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD format
    branch: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: name === "plate" ? value.toUpperCase() : value,
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, you would submit the form data to an API
    // For demo purposes, we'll just simulate a submission
    setTimeout(() => {
      setIsSubmitting(false)
      onSuccess(formData.plate)
    }, 1500)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Car className="h-5 w-5 text-blue-800" />
          Informações do Veículo
        </CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="plate">Placa</Label>
              <Input
                id="plate"
                name="plate"
                value={formData.plate}
                onChange={handleChange}
                placeholder="ABC1234"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand">Marca</Label>
              <Input
                id="brand"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Ex: Toyota"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="model">Modelo</Label>
              <Input
                id="model"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Ex: Corolla"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="year">Ano</Label>
              <Input
                id="year"
                name="year"
                value={formData.year}
                onChange={handleChange}
                placeholder="Ex: 2022"
                required
              />
            </div>
            <div className="space-y-2 col-span-2">
              <Label htmlFor="chassis">Chassi</Label>
              <Input
                id="chassis"
                name="chassis"
                value={formData.chassis}
                onChange={handleChange}
                placeholder="Ex: 9BRBL3HE1J0123456"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="entryDate" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> Data de Entrada
              </Label>
              <Input
                id="entryDate"
                name="entryDate"
                type="date"
                value={formData.entryDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branch">Filial</Label>
              <Select value={formData.branch} onValueChange={(value) => handleSelectChange("branch", value)} required>
                <SelectTrigger id="branch">
                  <SelectValue placeholder="Selecione a filial" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Filial Central">Filial Central</SelectItem>
                  <SelectItem value="Filial Norte">Filial Norte</SelectItem>
                  <SelectItem value="Filial Sul">Filial Sul</SelectItem>
                  <SelectItem value="Filial Leste">Filial Leste</SelectItem>
                  <SelectItem value="Filial Oeste">Filial Oeste</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="border-t pt-4">
            <h3 className="text-sm font-medium mb-3">Documentos Iniciais</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="docName">Nome do Documento</Label>
                  <Input id="docName" placeholder="Ex: Laudo de Vistoria" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="docType">Tipo do Documento</Label>
                  <Select>
                    <SelectTrigger id="docType">
                      <SelectValue placeholder="Selecione o tipo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Laudo">Laudo de Vistoria</SelectItem>
                      <SelectItem value="ECV">ECV</SelectItem>
                      <SelectItem value="DOC">DOC</SelectItem>
                      <SelectItem value="Outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="docFile">Arquivo</Label>
                <Input id="docFile" type="file" />
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  Você poderá adicionar mais documentos após o cadastro inicial do veículo.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button type="submit" className="bg-green-600 hover:bg-green-700" disabled={isSubmitting}>
            {isSubmitting ? "Salvando..." : "Salvar Cadastro"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Eye, FileUp, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface Document {
  id: string
  name: string
  type: string
  uploadDate: string
  url: string
}

interface DocumentsListProps {
  documents: Document[]
  vehiclePlate: string
  responsible: string
}

export default function DocumentsList({ documents, vehiclePlate, responsible }: DocumentsListProps) {
  const [newDocName, setNewDocName] = useState("")
  const [newDocType, setNewDocType] = useState("")
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)

  // Mock current user for demo purposes
  const currentUser = "João Silva" // In a real app, this would come from auth context
  const isResponsible = currentUser === responsible

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("pt-BR")
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleUpload = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newDocName || !newDocType || !file) return

    setUploading(true)

    // In a real app, you would upload the file to a server
    // For demo purposes, we'll just simulate an upload
    setTimeout(() => {
      setUploading(false)
      setNewDocName("")
      setNewDocType("")
      setFile(null)

      // In a real app, you would refresh the documents list
      alert("Documento enviado com sucesso!")
    }, 1500)
  }

  const handleDelete = (docId: string) => {
    // In a real app, you would delete the document from the server
    // For demo purposes, we'll just show an alert
    alert(`Documento ${docId} removido com sucesso!`)
  }

  const handleView = (url: string) => {
    // In a real app, you would open the document in a new tab
    // For demo purposes, we'll just show an alert
    alert(`Visualizando documento: ${url}`)
  }

  const handleDownload = (url: string, name: string) => {
    // In a real app, you would download the document
    // For demo purposes, we'll just show an alert
    alert(`Baixando documento: ${name}`)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileUp className="h-5 w-5 text-blue-800" />
          Documentos do Veículo
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Data</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.name}</TableCell>
                <TableCell>
                  <Badge variant="outline">{doc.type}</Badge>
                </TableCell>
                <TableCell>{formatDate(doc.uploadDate)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon" onClick={() => handleView(doc.url)} title="Visualizar">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDownload(doc.url, doc.name)}
                      title="Baixar"
                    >
                      <Download className="h-4 w-4" />
                    </Button>
                    {isResponsible && (
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(doc.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        title="Remover"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium mb-3">Adicionar Novo Documento</h3>
          <form onSubmit={handleUpload} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="docName">Nome do Documento</Label>
                <Input
                  id="docName"
                  value={newDocName}
                  onChange={(e) => setNewDocName(e.target.value)}
                  placeholder="Ex: Laudo de Vistoria"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="docType">Tipo do Documento</Label>
                <Select value={newDocType} onValueChange={setNewDocType} required>
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
              <Input id="docFile" type="file" onChange={handleFileChange} required />
            </div>
            <div className="flex justify-end">
              <Button
                type="submit"
                className="bg-blue-800 hover:bg-blue-900"
                disabled={uploading || !newDocName || !newDocType || !file}
              >
                {uploading ? "Enviando..." : "Enviar Documento"}
              </Button>
            </div>
          </form>

          {!isResponsible && (
            <p className="text-xs text-gray-500 mt-4">
              Nota: Apenas o responsável pelo cadastro ({responsible}) pode remover arquivos.
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

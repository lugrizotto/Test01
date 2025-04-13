import LoginForm from "@/components/login-form"

export default function Home() {
  // In a real app, you would check for authentication here
  // If authenticated, redirect to dashboard
  // For demo purposes, we'll just show the login form

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Sistema de Gestão de Veículos</h1>
          <p className="text-gray-600 mt-2">Acesse para gerenciar veículos do grupo</p>
        </div>
        <LoginForm />
      </div>
    </main>
  )
}

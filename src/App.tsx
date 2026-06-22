import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateReport from './pages/CreateReport'
import Quotes from './pages/Quotes'
import Invoices from './pages/Invoices'
import Settings from './pages/Settings'

export default function App(){
  return (
    <div className="min-h-screen">
      <header className="bg-slate-800 p-4">
        <nav className="container mx-auto flex gap-4">
          <Link to="/" className="font-semibold">Dashboard</Link>
          <Link to="/reportes">Reportes</Link>
          <Link to="/cotizaciones">Cotizaciones</Link>
          <Link to="/cuentas">Cuentas</Link>
          <Link to="/ajustes" className="ml-auto">Ajustes</Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/reportes" element={<CreateReport/>} />
          <Route path="/cotizaciones" element={<Quotes/>} />
          <Route path="/cuentas" element={<Invoices/>} />
          <Route path="/ajustes" element={<Settings/>} />
        </Routes>
      </main>
    </div>
  )
}

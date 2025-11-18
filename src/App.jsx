import React, { useState } from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import Header from './components/Header'
import Hero from './components/Hero'
import Realms from './components/Realms'
import Dashboard from './components/Dashboard'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const [authOpen, setAuthOpen] = useState(false)
  const [user, setUser] = useState(null)

  const handleAuthSubmit = (data) => {
    setUser({ name: data.name })
    setAuthOpen(false)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-950 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.15),transparent_60%)]" />
        <Header onOpenAuth={() => setAuthOpen(true)} />
        <Hero />
        <Realms />
        <Dashboard user={user} />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

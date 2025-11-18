import React from 'react'
import { Menu, Sun, Moon, User, LogIn, LogOut } from 'lucide-react'
import { useTheme } from './ThemeProvider'

export default function Header({ onOpenAuth }) {
  const { theme, toggle } = useTheme()

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-white/5">
            <Menu className="w-5 h-5 text-slate-200" />
          </button>
          <a href="/" className="flex items-center gap-2">
            <img src="/logo.svg" alt="AIVA" className="w-8 h-8" />
            <span className="text-white font-semibold tracking-wide">AIVA WORLD</span>
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-8 text-slate-200">
          <a href="#dashboard" className="hover:text-white transition">Dashboard</a>
          <a href="#community" className="hover:text-white transition">Community</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <button onClick={onOpenAuth} className="hover:text-white transition">Login</button>
          <button onClick={onOpenAuth} className="px-3 py-1.5 rounded-md bg-indigo-500/80 hover:bg-indigo-500 text-white shadow-md shadow-indigo-500/30 transition">Sign Up</button>
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-white/5 text-slate-200"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={onOpenAuth} className="p-2 rounded-md hover:bg-white/5 text-slate-200">
            <User className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

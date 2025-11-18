import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-6 py-10 text-slate-300">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-x-4 text-sm">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
          </div>
          <div className="text-sm">
            GDPR & CCPA Compliant • End-to-End Encrypted • 13+ Only
          </div>
        </div>
        <p className="text-xs text-slate-500 mt-4">© {new Date().getFullYear()} AIVA WORLD. All rights reserved.</p>
      </div>
    </footer>
  )
}

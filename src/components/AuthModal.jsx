import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function AuthModal({ open, onClose, onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [error, setError] = useState('')

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError('Please fill in all fields')
      return
    }
    if (form.password !== form.confirm) {
      setError('Passwords do not match')
      return
    }
    setError('')
    onSubmit?.(form)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 220, damping: 22 }}
            className="w-full max-w-md rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/10 p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold">Create your account</h3>
            <p className="text-slate-300 mt-1">Join AIVA WORLD to craft and trade avatars.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm text-slate-300">Full Name</label>
                <input name="name" onChange={handleChange} value={form.name} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input type="email" name="email" onChange={handleChange} value={form.email} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm text-slate-300">Password</label>
                  <input type="password" name="password" onChange={handleChange} value={form.password} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div>
                  <label className="text-sm text-slate-300">Confirm Password</label>
                  <input type="password" name="confirm" onChange={handleChange} value={form.confirm} className="mt-1 w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              {error && <p className="text-rose-400 text-sm">{error}</p>}
              <div className="flex gap-3 pt-2">
                <button type="submit" className="flex-1 px-4 py-2.5 rounded-md bg-indigo-500 hover:bg-indigo-600 transition shadow-indigo-500/30 shadow">
                  Create Account
                </button>
                <button type="button" onClick={onClose} className="px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/20 transition">
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

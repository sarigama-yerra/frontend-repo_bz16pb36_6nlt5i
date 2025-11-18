import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            AIVA WORLD: Anywhere, Anytime
          </h1>
          <p className="mt-6 text-slate-200/90 text-lg">
            Dive into immersive realms and craft living avatars. Build, customize and interact across anime and realistic worlds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#realms" className="px-5 py-2.5 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/30 transition">Enter Realms</a>
            <a href="#pricing" className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition">View Plans</a>
          </div>
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />
      </div>
    </section>
  )
}

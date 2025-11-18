import React from 'react'
import { motion } from 'framer-motion'

export default function Dashboard({ user }) {
  const username = user?.name || 'Explorer'
  const avatars = user?.avatars || [
    { id: 1, name: 'Astra', realm: 'Anime', img: 'https://images.unsplash.com/photo-1520975922236-2400f3b2f95b?auto=format&fit=crop&w=600&q=60' },
    { id: 2, name: 'Nyx', realm: 'Realistic', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=60' },
  ]

  const quickStats = {
    totalAvatars: avatars.length,
    interactions: 1280,
    shares: 57,
  }

  const tiles = [
    { title: 'AI Studio', desc: 'Craft personalities, behaviors and story arcs.', color: 'from-indigo-500/40 to-cyan-500/30' },
    { title: 'Voice Studio', desc: 'Generate expressive voices with emotional tone.', color: 'from-fuchsia-500/40 to-violet-500/30' },
    { title: 'Live Interaction', desc: 'Talk to avatars in real time with gestures.', color: 'from-emerald-500/40 to-teal-500/30' },
  ]

  return (
    <section id="dashboard" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <h3 className="text-2xl font-bold text-white">Welcome Back, {username}</h3>
            <p className="text-slate-300">Here are your avatars.</p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {avatars.map((a, i) => (
                <motion.div key={a.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
                  <img src={a.img} alt={a.name} className="h-48 w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div>
                      <p className="text-white font-semibold">{a.name}</p>
                      <p className="text-slate-300 text-xs">{a.realm} Realm</p>
                    </div>
                    <button className="px-3 py-1.5 rounded-md bg-indigo-500/90 hover:bg-indigo-500 text-white text-sm">Open</button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tiles.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} className={`rounded-2xl p-5 border border-white/10 bg-gradient-to-br ${t.color} backdrop-blur-xl text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]`}> 
                <h4 className="font-semibold">{t.title}</h4>
                <p className="text-sm text-slate-100/80 mt-1">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl p-6 bg-white/5 border border-white/10 text-white backdrop-blur-xl">
            <h4 className="font-semibold">Quick Stats</h4>
            <div className="mt-4 space-y-3">
              <Stat label="Total Avatars" value={quickStats.totalAvatars} />
              <Stat label="Interactions" value={quickStats.interactions} />
              <Stat label="Community Shares" value={quickStats.shares} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg px-4 py-3">
      <span className="text-slate-300 text-sm">{label}</span>
      <span className="text-white font-semibold">{value}</span>
    </div>
  )
}

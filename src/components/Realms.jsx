import React, { useState } from 'react'
import { motion } from 'framer-motion'

const worlds = [
  { key: 'mermaid', label: 'Mermaid', story: 'Songs from the abyss and shimmering tides.', video: 'https://cdn.coverr.co/videos/coverr-waves-of-the-egean-sea-1137/1080p.mp4', animeImg: 'https://images.unsplash.com/photo-1603228253953-1b3e0f7fd0cf?auto=format&fit=crop&w=1200&q=60', realImg: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=60' },
  { key: 'demon', label: 'Demon', story: 'Cinders, sigils and forbidden pacts.', video: 'https://cdn.coverr.co/videos/coverr-fire-flames-4899/1080p.mp4', animeImg: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1200&q=60', realImg: 'https://images.unsplash.com/photo-1509221965823-bc4f27b9c54b?auto=format&fit=crop&w=1200&q=60' },
  { key: 'warrior', label: 'Warrior', story: 'Steel clashes, heroes rise.', video: 'https://cdn.coverr.co/videos/coverr-metal-armor-6155/1080p.mp4', animeImg: 'https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=1200&q=60', realImg: 'https://images.unsplash.com/photo-1520975922236-2400f3b2f95b?auto=format&fit=crop&w=1200&q=60' },
  { key: 'elf', label: 'Elf / Fairy', story: 'Whispering groves and luminous wings.', video: 'https://cdn.coverr.co/videos/coverr-cinematic-forest-1138/1080p.mp4', animeImg: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&w=1200&q=60', realImg: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=60' },
]

export default function Realms() {
  const [realm, setRealm] = useState('anime')
  const [active, setActive] = useState('mermaid')

  const activeWorld = worlds.find(w => w.key === active)

  return (
    <section id="realms" className="relative py-24">
      <div className="absolute inset-0 -z-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#6d28d9,transparent_25%),radial-gradient(circle_at_80%_30%,#22d3ee,transparent_25%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-stretch">
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex rounded-full bg-white/10 p-1 border border-white/10">
              <button onClick={() => setRealm('realistic')} className={`px-4 py-2 rounded-full text-sm ${realm==='realistic' ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}>Realistic Realm</button>
              <button onClick={() => setRealm('anime')} className={`px-4 py-2 rounded-full text-sm ${realm==='anime' ? 'bg-white/20 text-white' : 'text-slate-300 hover:text-white'}`}>Anime Realm</button>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-white">Choose your world</h2>
            <p className="text-slate-300 max-w-prose">Each world offers unique avatars, skills and narratives. Switch realms to see styles morph with animated previews and videos.</p>

            <div className="grid grid-cols-2 gap-4">
              {worlds.map((w, i) => (
                <motion.button
                  key={w.key}
                  onClick={() => setActive(w.key)}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`relative overflow-hidden rounded-xl group border ${active===w.key ? 'border-indigo-400' : 'border-white/10'} bg-white/5`}
                >
                  <img src={realm==='anime' ? w.animeImg : w.realImg} alt={w.label} className="h-28 w-full object-cover group-hover:scale-105 transition" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">
                    <span className="text-white font-medium drop-shadow">{w.label}</span>
                    <span className="text-xs text-indigo-200/90">View</span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/60">
              <video className="absolute inset-0 w-full h-full object-cover opacity-60" src={activeWorld.video} autoPlay loop muted playsInline />
              <motion.img
                key={`${realm}-${active}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={realm==='anime' ? activeWorld.animeImg : activeWorld.realImg}
                alt={activeWorld.label}
                className="absolute inset-0 w-full h-full object-cover mix-blend-screen"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
              <div className="absolute bottom-0 p-6">
                <h3 className="text-2xl font-semibold text-white">{activeWorld.label}</h3>
                <p className="text-slate-300 max-w-prose">{activeWorld.story}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-md bg-indigo-500 hover:bg-indigo-600 text-white transition">Create Avatar</button>
                  <button className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white transition">Interact</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

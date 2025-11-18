import React from 'react'
import { motion } from 'framer-motion'
import { Star, Sparkles, Crown, CreditCard, Bitcoin } from 'lucide-react'

const tiers = [
  {
    name: 'Free',
    icon: Star,
    price: '$0/mo',
    features: [
      '1 avatar creation',
      'Basic customization',
      '100 interactions/month',
      'Community access',
      'Standard voice profiles',
      'Basic animations',
    ],
  },
  {
    name: 'Premium',
    icon: Sparkles,
    price: '$19/mo',
    features: [
      'Unlimited avatars',
      'Advanced customization',
      'Unlimited interactions',
      'Priority support',
      'Advanced voice synthesis',
      'Custom animations',
    ],
  },
  {
    name: 'Creator Pro',
    icon: Crown,
    price: '$49/mo',
    features: [
      'All Premium features',
      'Upload/sell assets',
      '70/30 revenue sharing',
      'Advanced analytics',
      'API access',
      'Custom AI training',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center">Choose your power level</h2>
        <p className="text-slate-300 text-center max-w-2xl mx-auto mt-2">Flexible plans for explorers to creators, with animated reveals and perks.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 text-white p-6 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
              <div className="flex items-center gap-3">
                <t.icon className="w-6 h-6 text-indigo-300" />
                <h3 className="text-xl font-semibold">{t.name}</h3>
              </div>
              <p className="text-3xl font-extrabold mt-3">{t.price}</p>
              <ul className="mt-4 space-y-2 text-slate-200 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="text-indigo-300">•</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full py-2.5 rounded-md bg-indigo-500/90 hover:bg-indigo-500 transition">Get Started</button>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-slate-200">
          <span>Accepted payments:</span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"> <CreditCard className="w-4 h-4" /> Cards</span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"> PayPal</span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"> <Bitcoin className="w-4 h-4" /> BTC/ETH</span>
          <span className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"> Prepaid Credits</span>
        </div>
      </div>
    </section>
  )
}

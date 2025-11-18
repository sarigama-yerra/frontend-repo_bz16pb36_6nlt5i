import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  { q: 'Can I change plans later?', a: 'Yes, you can upgrade or downgrade anytime. Changes apply immediately and are pro-rated.' },
  { q: 'Do you keep my avatars if I cancel?', a: 'Your avatars remain archived for 90 days. Reactivate to restore access instantly.' },
  { q: 'What is the refund policy?', a: 'We offer a 14-day refund window for paid plans if features do not meet your needs.' },
  { q: 'Any hidden fees?', a: 'No. Taxes may apply in your region, but there are no additional platform fees.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="relative py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white text-center">Frequently Asked Questions</h3>
        <div className="mt-8 space-y-3">
          {items.map((it, i) => (
            <div key={it.q} className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
              <button className="w-full text-left px-5 py-4 text-white flex items-center justify-between" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="font-medium">{it.q}</span>
                <span className={`transition ${open===i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="px-5 pb-5 text-slate-200">
                    {it.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { motion, useAnimationControls } from 'framer-motion'
import { useEffect } from 'react'

const items = ['Minimal', 'Futuristic', 'Digital', 'Curated', 'Essential', 'Avant‑garde']

export default function Marquee() {
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({ x: ['0%', '-50%'], transition: { ease: 'linear', duration: 14, repeat: Infinity } })
  }, [])

  return (
    <section className="py-10 select-none">
      <div className="overflow-hidden border-y border-black/5 bg-white">
        <motion.div animate={controls} className="flex gap-12 whitespace-nowrap py-6">
          {[...items, ...items].map((w, i) => (
            <span key={i} className="text-4xl sm:text-5xl font-semibold tracking-tight opacity-70 hover:opacity-100 transition-opacity">{w}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(1200px_600px_at_50%_-20%,rgba(0,0,0,0.06),rgba(255,255,255,0)_60%)]" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Minimalism meets motion
          </h1>
          <p className="mt-6 text-gray-600 text-lg">
            An avant‑garde marketplace for curated essentials. Precision‑crafted interfaces, seamless motion, and a focus on what matters.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#new" className="inline-flex items-center justify-center rounded-full bg-black text-white px-6 py-3 text-sm hover:opacity-90 transition-opacity">Shop new arrivals</a>
            <a href="#catalog" className="inline-flex items-center justify-center rounded-full border px-6 py-3 text-sm hover:bg-gray-50 transition-colors">Browse catalog</a>
          </div>
        </motion.div>
      </div>

      {/* Gradient overlay for contrast, doesn't block pointer to Spline */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white" />
    </section>
  )
}

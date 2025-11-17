import { motion } from 'framer-motion'

const products = [
  { id: 1, title: 'Carbon Knit Runner', price: '$220', tag: 'New', img: 'https://images.unsplash.com/photo-1542293787938-c9e299b88054?q=80&w=1400&auto=format&fit=crop' },
  { id: 2, title: 'Mono Leather Tote', price: '$340', tag: 'Essentials', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1400&auto=format&fit=crop' },
  { id: 3, title: 'Aero Headphones', price: '$280', tag: 'Tech', img: 'https://images.unsplash.com/photo-1518449073235-22467c1f4a07?q=80&w=1400&auto=format&fit=crop' },
  { id: 4, title: 'Studio Lamp', price: '$190', tag: 'Home', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1400&auto=format&fit=crop' },
  { id: 5, title: 'Minimal Watch', price: '$260', tag: 'Edition', img: 'https://images.unsplash.com/photo-1511381939415-c1c76e5d244d?q=80&w=1400&auto=format&fit=crop' },
  { id: 6, title: 'Sculpt Chair', price: '$480', tag: 'Design', img: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=1400&auto=format&fit=crop' },
]

function Card({ p, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: i * 0.05 }}
      className="group bg-white rounded-2xl overflow-hidden border border-black/5 shadow-sm hover:shadow-lg transition-shadow"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img src={p.img} alt={p.title} className="h-full w-full object-cover will-change-transform group-hover:scale-[1.03] transition-transform duration-500" />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
          <span className="inline-flex items-center rounded-full bg-gray-100 px-2 py-1">{p.tag}</span>
          <span>{p.price}</span>
        </div>
        <h3 className="text-base font-medium tracking-tight">{p.title}</h3>
        <button className="mt-3 inline-flex items-center justify-center w-full rounded-full bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Add to cart</button>
      </div>
    </motion.article>
  )
}

export default function Showcase() {
  return (
    <section id="new" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured</h2>
            <p className="text-gray-600 mt-2">Curated drops from emerging designers and iconic staples.</p>
          </div>
          <a href="#" className="text-sm underline underline-offset-4 decoration-gray-300 hover:decoration-black">View all</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <Card key={p.id} p={p} i={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

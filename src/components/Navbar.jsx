import { useState } from 'react'
import { ShoppingCart, Search, Menu, X } from 'lucide-react'

function NavLink({ label }) {
  return (
    <a href="#" className="text-sm text-gray-700 hover:text-black transition-colors">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-40 backdrop-blur-md bg-white/60 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="font-semibold tracking-tight text-lg">atelier.</a>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink label="New" />
            <NavLink label="Men" />
            <NavLink label="Women" />
            <NavLink label="Accessories" />
            <NavLink label="Sale" />
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              placeholder="Search"
              className="pl-9 pr-3 py-2 rounded-full bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 outline-none text-sm transition-colors"
            />
          </div>
          <button className="relative inline-flex items-center justify-center h-9 w-9 rounded-full bg-black text-white hover:opacity-90 transition-opacity">
            <ShoppingCart className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-5 w-5 text-[10px] grid place-items-center rounded-full bg-white text-black border">2</span>
          </button>
        </div>

        <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border" onClick={() => setOpen(true)}>
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-white shadow-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <span className="font-semibold text-lg">atelier.</span>
              <button className="h-10 w-10 grid place-items-center rounded-full border" onClick={() => setOpen(false)}>
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {['New','Men','Women','Accessories','Sale'].map((i) => (
                <a key={i} href="#" className="text-base py-2 border-b">{i}</a>
              ))}
            </nav>
            <div className="mt-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input placeholder="Search" className="w-full pl-9 pr-3 py-3 rounded-full bg-gray-100 focus:bg-white border border-transparent focus:border-gray-300 outline-none text-sm transition-colors" />
              </div>
            </div>
            <button className="mt-auto inline-flex items-center gap-2 justify-center rounded-full bg-black text-white py-3">
              <ShoppingCart className="h-5 w-5" /> View Cart
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

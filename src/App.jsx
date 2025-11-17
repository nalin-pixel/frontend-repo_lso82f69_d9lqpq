import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Showcase from './components/Showcase'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Subtle background accents */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute inset-0 [background:radial-gradient(800px_400px_at_right_-10%,rgba(0,0,0,0.04),transparent_60%)]" />
        <div className="absolute inset-0 [background:radial-gradient(800px_400px_at_left_-10%,rgba(0,0,0,0.04),transparent_60%)]" />
      </div>

      <Navbar />
      <Hero />
      <Marquee />
      <Showcase />
      <Footer />
    </div>
  )
}

export default App

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div className="col-span-2">
          <h3 className="font-semibold mb-3">atelier.</h3>
          <p className="text-gray-600 max-w-sm">
            A minimal, forward‑thinking marketplace. Built with attention to detail and motion in mind.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-3">Shop</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">New Arrivals</a></li>
            <li><a href="#" className="hover:text-black">Men</a></li>
            <li><a href="#" className="hover:text-black">Women</a></li>
            <li><a href="#" className="hover:text-black">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-3">Company</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="#" className="hover:text-black">About</a></li>
            <li><a href="#" className="hover:text-black">Careers</a></li>
            <li><a href="#" className="hover:text-black">Contact</a></li>
            <li><a href="#" className="hover:text-black">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-xs text-gray-500 text-center">© {new Date().getFullYear()} atelier — All rights reserved.</div>
    </footer>
  )
}

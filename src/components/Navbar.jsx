import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Distilasyon Nedir?', href: '#what' },
  { label: 'Çeşitleri', href: '#types' },
  { label: 'Tepsi Türleri', href: '#trays' },
  { label: 'Ürünler', href: '#products' },
  { label: 'Teknik Detaylar', href: '#techspecs' },
  { label: 'Hesaplamalar', href: '#calculations' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? 'bg-white shadow-sm border-b border-steel-200' : 'bg-white/95 border-b border-steel-200'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <div className="w-7 h-7 bg-navy-800 rounded flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="5" y="0" width="4" height="14" rx="1" fill="white" opacity="0.9"/>
              <rect x="2" y="4" width="10" height="1.5" rx="0.75" fill="white"/>
              <rect x="2" y="7" width="10" height="1.5" rx="0.75" fill="white"/>
              <rect x="2" y="10" width="10" height="1.5" rx="0.75" fill="white"/>
            </svg>
          </div>
          <span className="font-semibold text-steel-900 tracking-tight">DistillaTech</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="text-steel-600 hover:text-steel-900 transition-colors text-sm font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#products" className="hidden md:inline-flex items-center gap-2 bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium px-4 py-2 rounded transition-colors">
          Ürün Kataloğu
        </a>

        <button className="md:hidden p-2 text-steel-600 hover:text-steel-900" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-steel-200 px-6 py-4 space-y-4">
          {links.map(l => (
            <a key={l.href} href={l.href} className="block text-steel-700 hover:text-steel-900 text-sm font-medium" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

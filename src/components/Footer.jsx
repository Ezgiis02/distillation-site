const links = [
  { label: 'Distilasyon Nedir?', href: '#what' },
  { label: 'Çeşitleri', href: '#types' },
  { label: 'Tepsi Türleri', href: '#trays' },
  { label: 'Ürünler', href: '#products' },
  { label: 'Teknik Detaylar', href: '#techspecs' },
  { label: 'Hesaplamalar', href: '#calculations' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 bg-white/10 rounded flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="5" y="0" width="4" height="14" rx="1" fill="white" opacity="0.8"/>
                  <rect x="2" y="4" width="10" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
                  <rect x="2" y="7" width="10" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
                  <rect x="2" y="10" width="10" height="1.5" rx="0.75" fill="white" opacity="0.5"/>
                </svg>
              </div>
              <span className="font-semibold text-white">DistillaTech</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Endüstriyel distilasyon sistemleri ve tepsi kolonu tasarımında uzman mühendislik firması.
            </p>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Navigasyon</p>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">Ürün</p>
            <div className="space-y-1.5 text-sm text-white/60">
              <p>MDK-16 Mısır Distilasyon Kolonu</p>
              <p>9.11 m × Ø 0.71 m</p>
              <p>16 Tepsi Kademesi</p>
              <p>100.000 L/gün Kapasite</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <span>© 2025 DistillaTech — Gıda Mühendisliği Tasarım Projesi</span>
          <span>MDK-16 Rev. A</span>
        </div>
      </div>
    </footer>
  )
}

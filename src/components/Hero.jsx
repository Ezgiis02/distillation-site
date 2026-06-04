import { ArrowRight, ChevronDown } from 'lucide-react'

const stats = [
  { value: '%95.6', sub: 'Molar', label: 'Ürün Saflığı' },
  { value: '16', sub: 'Kademe', label: 'Tepsi Sayısı' },
  { value: '100.000', sub: 'L/gün', label: 'İşleme Kapasitesi' },
  { value: '%0.02', sub: 'Kayıp', label: 'Atık Oranı' },
]

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex flex-col bg-steel-50">
      {/* Main hero */}
      <div className="flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 border border-steel-300 rounded-full px-3.5 py-1 text-xs font-medium text-steel-600 mb-8 bg-white">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              Endüstriyel Distilasyon Sistemleri
            </div>

            <h1 className="font-serif text-5xl md:text-6xl text-steel-900 leading-[1.1] mb-6">
              Yüksek Verimli<br />
              <span className="text-blue-700">Tepsi Kolonları</span>
            </h1>

            <p className="text-steel-600 text-lg leading-relaxed mb-10 max-w-lg">
              Gıda mühendisliği uygulamalarına özel tasarlanan distilasyon kolonlarımız,
              optimize edilmiş tepsi geometrisi ve hassas mühendislik hesaplarıyla
              sektör standartlarının üzerinde verim sunar.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#products" className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded transition-colors text-sm">
                Teknik Özellikler
                <ArrowRight size={15} />
              </a>
              <a href="#what" className="inline-flex items-center gap-2 border border-steel-300 bg-white hover:border-steel-400 text-steel-700 font-medium px-6 py-3 rounded transition-colors text-sm">
                Distilasyon Nedir?
              </a>
            </div>
          </div>

          {/* Right — column diagram */}
          <div className="flex justify-center lg:justify-end">
            <ColumnDiagram />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-steel-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-steel-200">
            {stats.map(s => (
              <div key={s.label} className="py-6 px-8 first:pl-0 last:pr-0">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-bold text-steel-900">{s.value}</span>
                  <span className="text-xs text-steel-500 font-medium">{s.sub}</span>
                </div>
                <p className="text-steel-500 text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a href="#what" className="flex justify-center py-4 text-steel-400 hover:text-steel-600 transition-colors">
        <ChevronDown size={20} />
      </a>
    </section>
  )
}

function ColumnDiagram() {
  const trayCount = 8
  const colH = 320
  const colW = 80
  const x0 = 80
  const topGap = 30
  const botGap = 22
  const traySpacing = (colH - topGap - botGap) / (trayCount - 1)
  const feedY = topGap + traySpacing * Math.floor(trayCount / 2)

  return (
    <div className="relative">
      <svg width="320" height="420" viewBox="0 0 320 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Column shell */}
        <rect x={x0} y="20" width={colW} height={colH} rx="4" stroke="#334155" strokeWidth="2" fill="#f8fafc"/>

        {/* Trays */}
        {Array.from({ length: trayCount }, (_, i) => {
          const y = 20 + topGap + i * traySpacing
          return (
            <g key={i}>
              <line x1={x0 + 4} y1={y} x2={x0 + colW - 4} y2={y} stroke={i === Math.floor(trayCount / 2) ? '#1d4ed8' : '#94a3b8'} strokeWidth={i === Math.floor(trayCount / 2) ? 2 : 1.5}/>
              <text x={x0 + colW + 8} y={y + 4} fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif">T{trayCount - i}</text>
            </g>
          )
        })}

        {/* Feed arrow */}
        <line x1="20" y1={20 + feedY} x2={x0} y2={20 + feedY} stroke="#1d4ed8" strokeWidth="1.5"/>
        <polygon points={`${x0},${20 + feedY - 4} ${x0 + 8},${20 + feedY} ${x0},${20 + feedY + 4}`} fill="#1d4ed8"/>
        <text x="22" y={20 + feedY - 7} fill="#1d4ed8" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">Besleme</text>
        <text x="22" y={20 + feedY + 14} fill="#64748b" fontSize="8" fontFamily="Inter, sans-serif">100.000 L/gün</text>

        {/* Top product */}
        <line x1={x0 + colW / 2} y1="20" x2={x0 + colW / 2} y2="4" stroke="#1d4ed8" strokeWidth="1.5"/>
        <text x={x0 + colW + 8} y="14" fill="#1d4ed8" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="500">Damıtılmış Ürün</text>
        <text x={x0 + colW + 8} y="26" fill="#64748b" fontSize="8" fontFamily="Inter, sans-serif">xD = 0.895</text>

        {/* Bottom product */}
        <line x1={x0 + colW / 2} y1={20 + colH} x2={x0 + colW / 2} y2={20 + colH + 16} stroke="#64748b" strokeWidth="1.5"/>
        <text x={x0 + colW + 8} y={20 + colH + 8} fill="#64748b" fontSize="9" fontFamily="Inter, sans-serif">Dip Ürün</text>
        <text x={x0 + colW + 8} y={20 + colH + 20} fill="#94a3b8" fontSize="8" fontFamily="Inter, sans-serif">% 0.02 kayıp</text>

        {/* Dimension lines */}
        <line x1={x0 - 16} y1="20" x2={x0 - 16} y2={20 + colH} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3 2"/>
        <line x1={x0 - 20} y1="20" x2={x0 - 12} y2="20" stroke="#cbd5e1" strokeWidth="1"/>
        <line x1={x0 - 20} y1={20 + colH} x2={x0 - 12} y2={20 + colH} stroke="#cbd5e1" strokeWidth="1"/>
        <text x={x0 - 30} y={20 + colH / 2 + 4} fill="#94a3b8" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle" transform={`rotate(-90, ${x0 - 30}, ${20 + colH / 2 + 4})`}>9.11 m</text>

        {/* Labels */}
        <text x={x0 + colW / 2} y="400" fill="#94a3b8" fontSize="9" fontFamily="Inter, sans-serif" textAnchor="middle">Ø 0.71 m — 16 Tepsi Kademesi</text>
      </svg>
    </div>
  )
}

import { Ruler, Circle, MoveVertical, Hash, ArrowDown, ArrowUp, ArrowRight, Factory, TrendingUp, Percent } from 'lucide-react'

const specRows = [
  { label: 'Kule Yüksekliği', value: '9.11 m', icon: Ruler },
  { label: 'Tepsi Çapı', value: 'Ø 0.71 m', icon: Circle },
  { label: 'Tepsi Aralığı', value: '0.50 m', icon: MoveVertical },
  { label: 'Tepsi Sayısı', value: '16 adet', icon: Hash },
  { label: 'Alt Boşluk', value: '0.61 m', icon: ArrowDown },
  { label: 'Üst Boşluk', value: '1.00 m', icon: ArrowUp },
  { label: 'Besleme Girişi', value: 'Kolon ortası', icon: ArrowRight },
  { label: 'İşleme Kapasitesi', value: '100.000 L/gün', icon: Factory },
]

const perfRows = [
  { label: 'Damıtılmış Ürün Verimi', value: '%95.6', sub: 'molar bazlı', accent: true },
  { label: 'Distilat Molar Fraksiyon (xD)', value: '0.895', sub: 'mol/mol' },
  { label: 'Dip Ürün Atık Oranı', value: '%0.02', sub: 'ağırlık bazlı' },
]

export default function Products({ onOpen }) {
  const modalData = {
    title: 'DistillaTech MDK-16',
    subtitle: 'Mısır Distilasyon Kolonu',
    description: 'MDK-16, mısır hammaddesinden yüksek saflıklı damıtılmış ürün elde etmek üzere tasarlanmış endüstriyel ölçekli tepsi kolonudur. 16 kademeli elek tepsi yapısı, 100.000 L/gün besleme kapasitesinde %95.6 verim ve 0.895 molar fraksiyon ile çalışmaktadır. Tüm bileşenler gıda sınıfı paslanmaz çelikten üretilmekte olup kolon, beslemenin tam ortadan yapıldığı optimize edilmiş bir akış tasarımı içermektedir.',
    pros: ['Gıda sınıfı paslanmaz çelik (316L)', 'Merkezi besleme — optimize kütle transferi', 'Düşük atık oranı (%0.02)', '16 denge kademesi — yüksek ayırma gücü', 'Kolay temizlenebilir sökülebilir tepsi tasarımı'],
    cons: [],
    usage: 'Mısır bazlı etanol ve distilat üretimi, endüstriyel gıda işleme',
    uses: ['Mısır bazlı etanol üretimi', 'Gıda sınıfı damıtılmış ürün eldesi', 'Endüstriyel ölçek akışkan işleme'],
    specs: specRows.map(s => ({ label: s.label, value: s.value, icon: '—' })),
    performance: perfRows.map(p => ({ label: p.label, value: p.value, color: p.accent ? 'text-blue-700' : 'text-steel-800' })),
  }

  return (
    <section id="products" className="py-24 bg-steel-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Ürün Kataloğu</p>
          <h2 className="font-serif text-4xl text-steel-900 leading-tight">MDK-16</h2>
          <p className="text-steel-500 mt-2">Mısır Distilasyon Kolonu — DistillaTech</p>
        </div>

        {/* Column photo */}
        <div className="mb-8 rounded-2xl overflow-hidden border border-steel-200 bg-white">
          <div className="relative">
            <img
              src="/column.jpg"
              alt="DistillaTech MDK-16 Distilasyon Kolonu ve Tepsi Detayı"
              className="w-full object-cover max-h-[520px]"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-steel-900/70 to-transparent px-6 py-5">
              <p className="text-white font-semibold text-sm">MDK-16 — Mısır Distilasyon Kolonu</p>
              <p className="text-white/70 text-xs mt-0.5">16 Tepsi Kademesi · Ø 0.71 m · 9.11 m Yükseklik</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: description + CTA */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white border border-steel-200 rounded-xl p-6">
              <p className="text-steel-600 text-sm leading-relaxed mb-6">
                MDK-16, mısır hammaddesinden yüksek saflıklı distilat elde etmek üzere
                hesapsal optimizasyon ile tasarlanmış endüstriyel tepsi kolonudur. 16 kademeli
                yapısı ve merkezi besleme tasarımı ile kütle transferini maksimize eder.
              </p>

              {/* Performance highlight */}
              <div className="space-y-3">
                {perfRows.map(p => (
                  <div key={p.label} className="flex items-center justify-between py-2 border-b border-steel-100 last:border-0">
                    <span className="text-steel-500 text-xs">{p.label}</span>
                    <div className="text-right">
                      <span className={`font-bold text-sm ${p.accent ? 'text-blue-700' : 'text-steel-800'}`}>{p.value}</span>
                      <span className="text-steel-400 text-xs ml-1">{p.sub}</span>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpen(modalData)}
                className="mt-6 w-full bg-navy-800 hover:bg-navy-700 text-white text-sm font-medium py-2.5 px-4 rounded transition-colors"
              >
                Tüm Teknik Detaylar
              </button>
            </div>

            {/* Tags */}
            <div className="bg-blue-700 rounded-xl p-6 text-white">
              <p className="text-sm font-semibold mb-3">Ürün Sertifikasyonu</p>
              <div className="space-y-2 text-sm text-white/80">
                <p>— Gıda Sınıfı 316L Paslanmaz Çelik</p>
                <p>— Merkezi Besleme Tasarımı</p>
                <p>— 16 Denge Kademesi</p>
                <p>— %0.02 Atık Oranı</p>
              </div>
            </div>
          </div>

          {/* Right: spec table */}
          <div className="lg:col-span-2 bg-white border border-steel-200 rounded-xl overflow-hidden">
            <div className="px-6 py-4 border-b border-steel-200 flex items-center justify-between">
              <h3 className="font-semibold text-steel-900 text-sm">Teknik Özellikler</h3>
              <span className="text-xs text-steel-400 bg-steel-100 px-2.5 py-1 rounded-full">MDK-16 — Rev. A</span>
            </div>
            <table className="w-full">
              <thead>
                <tr className="bg-steel-50 border-b border-steel-200">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Parametre</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">Değer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-100">
                {specRows.map(({ label, value, icon: Icon }) => (
                  <tr key={label} className="hover:bg-steel-50 transition-colors">
                    <td className="px-6 py-3.5">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-steel-100 rounded-md flex items-center justify-center shrink-0">
                          <Icon size={13} className="text-steel-500" />
                        </div>
                        <span className="text-steel-700 text-sm">{label}</span>
                      </div>
                    </td>
                    <td className="px-6 py-3.5 text-right font-semibold text-steel-900 text-sm tabular-nums">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

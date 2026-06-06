const materialBalance = [
  { symbol: 'F', label: 'Besleme Debisi', value: '100.000', unit: 'L/gün', note: 'Mısır hammaddesi — kolon ortasından giriş' },
  { symbol: 'D', label: 'Distilat (Damıtılmış Ürün)', value: '95.600', unit: 'L/gün', note: '%95.6 verim' },
  { symbol: 'B', label: 'Dip Ürün (Atık)', value: '20', unit: 'L/gün', note: '%0.02 kayıp' },
  { symbol: 'xF', label: 'Besleme Molar Fraksiyonu', value: '—', unit: 'mol/mol', note: 'Mısır bazlı ham besleme' },
  { symbol: 'xD', label: 'Distilat Molar Fraksiyonu', value: '0.895', unit: 'mol/mol', note: 'Hedef ürün saflığı' },
  { symbol: 'xB', label: 'Dip Ürün Molar Fraksiyonu', value: '≈ 0.02', unit: 'mol/mol', note: 'Atık akım bileşimi' },
]

const designParams = [
  { label: 'Teorik Kademe Sayısı', value: '16', unit: 'kademe', highlight: true },
  { label: 'Besleme Konumu', value: 'Orta kademe', unit: '', highlight: false },
  { label: 'Kolon Çapı', value: '0.71', unit: 'm' },
  { label: 'Kule Yüksekliği', value: '9.11', unit: 'm' },
  { label: 'Tepsi Aralığı', value: '0.50', unit: 'm' },
  { label: 'Alt Boşluk', value: '0.61', unit: 'm' },
  { label: 'Üst Boşluk', value: '1.00', unit: 'm' },
]

const diagramNotes = [
  { color: 'bg-black', label: '45° Çizgisi', desc: 'x = y doğrusu — ideal denge referansı' },
  { color: 'bg-blue-500', label: 'Denge Eğrisi', desc: 'Buhar-sıvı denge ilişkisi (VLE)' },
  { color: 'bg-green-500', label: 'Besleme Doğrusu (q-line)', desc: 'Beslemenin termodinamik durumu' },
  { color: 'bg-orange-500', label: 'Zenginleştirme Hattı', desc: 'Rectifying section işletme doğrusu' },
  { color: 'bg-purple-500', label: 'Soyma Hattı', desc: 'Stripping section işletme doğrusu' },
  { color: 'bg-yellow-400', label: 'Teorik Kademeler', desc: 'McCabe-Thiele adım sayımı — 16 kademe' },
]

export default function Calculations() {
  return (
    <section id="calculations" className="py-24 bg-white border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div>
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Tasarım Hesapları</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Hesaplamalar</h2>
            <p className="text-steel-500 text-sm max-w-sm">MDK-16 distilasyon kolonunun malzeme dengesi, tasarım parametreleri ve McCabe-Thiele analizi.</p>
          </div>
        </div>

        {/* Material Balance */}
        <div>
          <h3 className="text-steel-900 font-semibold text-lg mb-1">Malzeme Dengesi</h3>
          <p className="text-steel-500 text-sm mb-5">Genel malzeme dengesi: F = D + B</p>
          <div className="border border-steel-200 rounded-xl overflow-hidden bg-white">
            <div className="hidden md:grid grid-cols-12 bg-steel-50 px-6 py-3 border-b border-steel-200 text-xs font-semibold text-steel-500 uppercase tracking-wider">
              <div className="col-span-1">Sembol</div>
              <div className="col-span-4">Parametre</div>
              <div className="col-span-2 text-right">Değer</div>
              <div className="col-span-2 text-right">Birim</div>
              <div className="col-span-3 text-right">Açıklama</div>
            </div>
            <div className="divide-y divide-steel-100">
              {materialBalance.map(r => (
                <div key={r.symbol} className="grid grid-cols-1 md:grid-cols-12 px-6 py-4 hover:bg-steel-50 transition-colors gap-1 md:gap-0 md:items-center">
                  <div className="md:col-span-1">
                    <span className="font-mono font-bold text-blue-700 text-sm bg-blue-50 px-2 py-0.5 rounded">{r.symbol}</span>
                  </div>
                  <div className="md:col-span-4 text-steel-800 text-sm font-medium">{r.label}</div>
                  <div className="md:col-span-2 md:text-right font-bold text-steel-900 text-sm tabular-nums">{r.value}</div>
                  <div className="md:col-span-2 md:text-right text-steel-500 text-xs">{r.unit}</div>
                  <div className="md:col-span-3 md:text-right text-steel-400 text-xs">{r.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Design Parameters */}
        <div>
          <h3 className="text-steel-900 font-semibold text-lg mb-1">Tasarım Parametreleri</h3>
          <p className="text-steel-500 text-sm mb-5">Kolon geometrisi ve kademe tasarımı</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {designParams.map(p => (
              <div key={p.label} className={`border rounded-xl p-4 ${p.highlight ? 'border-blue-300 bg-blue-50' : 'border-steel-200 bg-white'}`}>
                <p className={`text-2xl font-bold tabular-nums ${p.highlight ? 'text-blue-700' : 'text-steel-900'}`}>
                  {p.value}
                  {p.unit && <span className="text-sm font-normal text-steel-400 ml-1">{p.unit}</span>}
                </p>
                <p className="text-steel-500 text-xs mt-1 leading-tight">{p.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* McCabe-Thiele */}
        <div>
          <h3 className="text-steel-900 font-semibold text-lg mb-1">McCabe-Thiele Diyagramı</h3>
          <p className="text-steel-500 text-sm mb-6">
            Grafik yöntemiyle teorik kademe sayısının belirlenmesi. Denge eğrisi ile işletme doğrularının
            arakesitinden kademeler sayılarak kolon tasarımı doğrulanmıştır.
          </p>

          {/* Legend */}
          <div className="flex flex-wrap gap-3 mb-5">
            {diagramNotes.map(n => (
              <div key={n.label} className="flex items-center gap-2 bg-steel-50 border border-steel-200 rounded-lg px-3 py-2">
                <span className={`w-3 h-3 rounded-sm shrink-0 ${n.color}`} />
                <div>
                  <p className="text-steel-800 text-xs font-semibold">{n.label}</p>
                  <p className="text-steel-400 text-xs">{n.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Diagram image */}
          <div className="border border-steel-200 rounded-2xl overflow-hidden bg-white">
            <div className="px-5 py-3.5 border-b border-steel-200 flex items-center justify-between">
              <p className="text-steel-700 font-semibold text-sm">McCabe-Thiele Diyagramı — MDK-16</p>
              <span className="text-xs bg-steel-100 text-steel-500 px-2.5 py-1 rounded-full">16 Teorik Kademe</span>
            </div>
            <div className="p-4 bg-steel-50">
              <img
                src="/mccabe-thiele.jpg"
                alt="McCabe-Thiele Diyagramı — MDK-16 Mısır Distilasyon Kolonu"
                className="w-full rounded-lg shadow-sm border border-steel-200"
              />
            </div>
            <div className="px-5 py-3 border-t border-steel-200 bg-white">
              <p className="text-steel-500 text-xs">
                x ekseni: Sıvı faz molar fraksiyonu — y ekseni: Buhar faz molar fraksiyonu.
                Turuncu adımlar 16 teorik kademeyi, yeşil kesikli çizgi besleme konumunu göstermektedir.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

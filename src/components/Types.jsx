import { useState } from 'react'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

const types = [
  {
    id: 'simple',
    title: 'Basit Distilasyon',
    tag: 'Temel',
    short: 'Tek kademe; kaynama noktaları arasında en az 25°C fark bulunan karışımlar için.',
    description: 'Basit distilasyon, kaynama noktaları arasında en az 25°C fark bulunan iki bileşenli karışımları ayırmak için kullanılır. Genellikle tek bir ısıtma-yoğunlaştırma adımından oluşur. Laboratuvar ölçeğinde yaygın kullanılır; endüstriyel uygulamalarda nadiren tercih edilir.',
    uses: ['Su arıtma', 'Alkol-su ayrımı (kaba)', 'Solvent geri kazanımı'],
    efficiency: 'Düşük — Orta',
    complexity: 'Basit',
  },
  {
    id: 'fractional',
    title: 'Fraksiyonel Distilasyon',
    tag: 'Endüstriyel Standart',
    highlight: true,
    short: 'Çoklu denge kademeleriyle benzer kaynama noktalı bileşenler yüksek saflıkla ayrılır.',
    description: 'Fraksiyonel distilasyon, kolon içinde çok sayıda denge kademesi barındırır. Petrol rafinerisi, etanol üretimi ve kimya sanayiinde temel ayırma yöntemidir. MDK-16 ürünümüz bu kategoride yer almaktadır.',
    uses: ['Ham petrol fraksiyonları', 'Etanol üretimi', 'Hava ayrışımı (N₂, O₂)', 'Mısır bazlı damıtma'],
    efficiency: 'Yüksek',
    complexity: 'Orta — Karmaşık',
  },
  {
    id: 'vacuum',
    title: 'Vakum Distilasyonu',
    tag: 'Isıya Duyarlı',
    short: 'Düşük basınçta kaynama noktası azaltılır; ısıya duyarlı maddeler korunur.',
    description: 'Basıncın düşürülmesiyle bileşenlerin kaynama noktaları da düşer; ısıya duyarlı maddeler bozulmadan ayrılabilir. Gıda sanayiinde meyve suyu konsantrasyonu ve hassas aroma maddelerinin eldesi için kritik öneme sahiptir.',
    uses: ['Meyve suyu konsantrasyonu', 'İlaç etken maddeleri', 'Ağır petrol fraksiyonları', 'Aroma eldesi'],
    efficiency: 'Yüksek',
    complexity: 'Karmaşık',
  },
  {
    id: 'steam',
    title: 'Buhar Distilasyonu',
    tag: 'Doğal Ürünler',
    short: 'Su buharıyla sürükleme; esansiyel yağ ve aroma üretiminde klasik yöntem.',
    description: 'Sisteme enjekte edilen su buharı, uçucu organik bileşenleri sürükler. Suya karışmayan veya az karışan bileşenler için özellikle uygundur. Esansiyel yağlar ve doğal aroma maddeleri üretiminde yüzyıllardır kullanılmaktadır.',
    uses: ['Lavanta, gül, nane yağları', 'Doğal çiçek esansları', 'Baharatlı bitki ekstraksiyonu'],
    efficiency: 'Orta',
    complexity: 'Orta',
  },
  {
    id: 'reactive',
    title: 'Reaktif Distilasyon',
    tag: 'İleri Proses',
    short: 'Reaksiyon ve distilasyon tek kolonda; enerji tasarrufu ve yüksek dönüşüm.',
    description: 'Reaksiyon ve ayırma işlemlerinin aynı anda aynı kolonda gerçekleştirildiği ileri bir süreçtir. Denge kısıtlamalarını aşar, yüksek dönüşüm oranları elde edilir ve enerji tüketimi önemli ölçüde azaltılır.',
    uses: ['Metil asetat üretimi', 'MTBE sentezi', 'Esterifikasyon reaksiyonları'],
    efficiency: 'Çok Yüksek',
    complexity: 'İleri Düzey',
  },
  {
    id: 'azeotropic',
    title: 'Azeotropik Distilasyon',
    tag: 'Özel Durum',
    short: 'Üçüncü bileşen (entrainer) ile azeotrop kırılır; mutlak etanol üretiminde kullanılır.',
    description: 'Bazı karışımlar belirli bileşimde azeotrop oluşturarak normal distilasyon ile ayrılamaz. Bu durumda üçüncü bir madde eklenerek azeotrop kırılır. Mutlak etanol üretiminde (%99.9) bu yöntem tercih edilir.',
    uses: ['Mutlak etanol üretimi', 'İzopropanol saflaştırma', 'Organik solvent kurutma'],
    efficiency: 'Yüksek',
    complexity: 'Karmaşık',
  },
]

export default function Types() {
  const [selectedId, setSelectedId] = useState(null)

  const selected = types.find(t => t.id === selectedId)

  const handleSelect = (id) => {
    setSelectedId(prev => prev === id ? null : id)
  }

  return (
    <section id="types" className="py-24 bg-steel-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Sınıflandırma</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Distilasyon Çeşitleri</h2>
            <p className="text-steel-500 text-sm max-w-sm">Bir türe tıklayarak detaylı bilgiye ulaşın.</p>
          </div>
        </div>

        {/* Fixed-height card grid — never changes size */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {types.map(t => {
            const isSelected = selectedId === t.id
            return (
              <button
                key={t.id}
                onClick={() => handleSelect(t.id)}
                className={`text-left rounded-xl border px-5 py-5 transition-all duration-150 group ${
                  t.highlight
                    ? isSelected
                      ? 'bg-navy-800 border-navy-600 ring-2 ring-blue-400 ring-offset-2 ring-offset-steel-50'
                      : 'bg-navy-800 border-navy-700 hover:border-navy-500'
                    : isSelected
                      ? 'bg-white border-blue-400 ring-2 ring-blue-400 ring-offset-2 ring-offset-steel-50'
                      : 'bg-white border-steel-200 hover:border-steel-300'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                    t.highlight
                      ? 'border-white/20 text-white/70 bg-white/10'
                      : 'border-steel-200 text-steel-500 bg-steel-50'
                  }`}>
                    {t.tag}
                  </span>
                  <ChevronRight
                    size={14}
                    className={`shrink-0 mt-0.5 transition-transform duration-150 ${
                      isSelected ? 'rotate-90' : 'group-hover:translate-x-0.5'
                    } ${t.highlight ? 'text-white/40' : 'text-steel-300'}`}
                  />
                </div>
                <h3 className={`font-semibold text-sm mb-1.5 ${t.highlight ? 'text-white' : 'text-steel-900'}`}>
                  {t.title}
                </h3>
                <p className={`text-xs leading-relaxed ${t.highlight ? 'text-white/60' : 'text-steel-500'}`}>
                  {t.short}
                </p>
              </button>
            )
          })}
        </div>

        {/* Detail panel — appears below the entire grid */}
        {selected && (
          <div className="mt-4 rounded-xl border border-blue-200 bg-white overflow-hidden">
            {/* Panel header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-steel-100 bg-steel-50">
              <div>
                <p className="font-semibold text-steel-900">{selected.title}</p>
                <p className="text-xs text-steel-500 mt-0.5">{selected.tag}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-steel-400 hover:text-steel-700 text-xs font-medium border border-steel-200 px-3 py-1.5 rounded-lg transition-colors bg-white hover:bg-steel-50"
              >
                Kapat
              </button>
            </div>

            {/* Panel body */}
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Description */}
              <div className="md:col-span-2">
                <p className="text-steel-600 text-sm leading-relaxed">{selected.description}</p>
              </div>

              {/* Meta */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-steel-50 border border-steel-100 rounded-lg px-3 py-3">
                    <p className="text-xs text-steel-400 mb-0.5">Verimlilik</p>
                    <p className="text-sm font-semibold text-steel-900">{selected.efficiency}</p>
                  </div>
                  <div className="bg-steel-50 border border-steel-100 rounded-lg px-3 py-3">
                    <p className="text-xs text-steel-400 mb-0.5">Karmaşıklık</p>
                    <p className="text-sm font-semibold text-steel-900">{selected.complexity}</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Kullanım Alanları</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.uses.map(u => (
                      <span key={u} className="text-xs border border-steel-200 text-steel-600 bg-steel-50 px-2.5 py-1 rounded-full">
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

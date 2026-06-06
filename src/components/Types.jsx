import { useState } from 'react'
import { ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react'

const types = [
  {
    id: 'simple',
    title: 'Basit Distilasyon',
    tag: 'Temel',
    short: 'Kaynama noktaları arasında en az 25°C fark bulunan iki bileşenli karışımları ayırmak için tek kademe kullanılır.',
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
    short: 'Çoklu denge kademeleri barındıran kolon sayesinde benzer kaynama noktalı bileşenler bile yüksek saflıkla ayrılır.',
    description: 'Fraksiyonel distilasyon, kolon içinde çok sayıda denge kademesi barındırır. Petrol rafinerisi, etanol üretimi ve kimya sanayiinde temel ayırma yöntemidir. MDK-16 ürünümüz bu kategoride yer almaktadır.',
    uses: ['Ham petrol fraksiyonları', 'Etanol üretimi', 'Hava ayrışımı (N₂, O₂)', 'Mısır bazlı damıtma'],
    efficiency: 'Yüksek',
    complexity: 'Orta — Karmaşık',
  },
  {
    id: 'vacuum',
    title: 'Vakum Distilasyonu',
    tag: 'Isıya Duyarlı',
    short: 'Basınç düşürülerek kaynama noktası azaltılır; böylece ısıya duyarlı maddeler bozulmadan ayrılabilir.',
    description: 'Basıncın düşürülmesiyle bileşenlerin kaynama noktaları da düşer; ısıya duyarlı maddeler bozulmadan ayrılabilir. Gıda sanayiinde meyve suyu konsantrasyonu ve hassas aroma maddelerinin eldesi için kritik öneme sahiptir.',
    uses: ['Meyve suyu konsantrasyonu', 'İlaç etken maddeleri', 'Ağır petrol fraksiyonları', 'Aroma eldesi'],
    efficiency: 'Yüksek',
    complexity: 'Karmaşık',
  },
  {
    id: 'steam',
    title: 'Buhar Distilasyonu',
    tag: 'Doğal Ürünler',
    short: 'Enjekte edilen su buharı uçucu organik bileşenleri sürükler; esansiyel yağ üretiminde klasik yöntemdir.',
    description: 'Sisteme enjekte edilen su buharı, uçucu organik bileşenleri sürükler. Suya karışmayan veya az karışan bileşenler için özellikle uygundur. Esansiyel yağlar ve doğal aroma maddeleri üretiminde yüzyıllardır kullanılmaktadır.',
    uses: ['Lavanta, gül, nane yağları', 'Doğal çiçek esansları', 'Baharatlı bitki ekstraksiyonu'],
    efficiency: 'Orta',
    complexity: 'Orta',
  },
  {
    id: 'reactive',
    title: 'Reaktif Distilasyon',
    tag: 'İleri Proses',
    short: 'Kimyasal reaksiyon ve distilasyon tek kolonda birleştirilir; denge kısıtlamaları aşılarak enerji tasarrufu sağlanır.',
    description: 'Reaksiyon ve ayırma işlemlerinin aynı anda aynı kolonda gerçekleştirildiği ileri bir süreçtir. Denge kısıtlamalarını aşar, yüksek dönüşüm oranları elde edilir ve enerji tüketimi önemli ölçüde azaltılır.',
    uses: ['Metil asetat üretimi', 'MTBE sentezi', 'Esterifikasyon reaksiyonları'],
    efficiency: 'Çok Yüksek',
    complexity: 'İleri Düzey',
  },
  {
    id: 'azeotropic',
    title: 'Azeotropik Distilasyon',
    tag: 'Özel Durum',
    short: 'Azeotrop oluşturan karışımları kırmak için entrainer adı verilen üçüncü bir madde eklenerek ayırma gerçekleştirilir.',
    description: 'Bazı karışımlar belirli bileşimde azeotrop oluşturarak normal distilasyon ile ayrılamaz. Bu durumda üçüncü bir madde eklenerek azeotrop kırılır. Mutlak etanol üretiminde (%99.9) bu yöntem tercih edilir.',
    uses: ['Mutlak etanol üretimi', 'İzopropanol saflaştırma', 'Organik solvent kurutma'],
    efficiency: 'Yüksek',
    complexity: 'Karmaşık',
  },
]

export default function Types() {
  const [openId, setOpenId] = useState(null)

  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

  return (
    <section id="types" className="py-24 bg-steel-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Sınıflandırma</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Distilasyon Çeşitleri</h2>
            <p className="text-steel-500 text-sm max-w-sm">Her uygulama için doğru yöntemi seçmek verimlilik ve ürün kalitesi açısından kritiktir.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {types.map(t => {
            const isOpen = openId === t.id
            return (
              <div
                key={t.id}
                className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                  t.highlight
                    ? isOpen ? 'border-navy-600 bg-navy-800' : 'border-navy-700 bg-navy-800'
                    : isOpen ? 'border-blue-300 bg-white' : 'border-steel-200 bg-white hover:border-steel-300'
                }`}
              >
                {/* Card header — always visible */}
                <button
                  onClick={() => toggle(t.id)}
                  className="w-full text-left px-5 py-5 flex items-start justify-between gap-3"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
                        t.highlight
                          ? 'border-white/20 text-white/70 bg-white/10'
                          : 'border-steel-200 text-steel-500 bg-steel-50'
                      }`}>
                        {t.tag}
                      </span>
                    </div>
                    <h3 className={`font-semibold text-base ${t.highlight ? 'text-white' : 'text-steel-900'}`}>
                      {t.title}
                    </h3>
                    <p className={`text-sm mt-1.5 leading-relaxed ${t.highlight ? 'text-white/65' : 'text-steel-500'}`}>
                      {t.short}
                    </p>
                  </div>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 mt-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${t.highlight ? 'text-white/50' : 'text-steel-400'}`}
                  />
                </button>

                {/* Expandable detail */}
                {isOpen && (
                  <div className={`px-5 pb-5 border-t ${t.highlight ? 'border-white/10' : 'border-steel-100'}`}>
                    <p className={`text-sm leading-relaxed mt-4 mb-4 ${t.highlight ? 'text-white/75' : 'text-steel-600'}`}>
                      {t.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className={`rounded-lg px-3 py-2 ${t.highlight ? 'bg-white/10' : 'bg-steel-50 border border-steel-100'}`}>
                        <p className={`text-xs mb-0.5 ${t.highlight ? 'text-white/40' : 'text-steel-400'}`}>Verimlilik</p>
                        <p className={`text-sm font-semibold ${t.highlight ? 'text-white' : 'text-steel-800'}`}>{t.efficiency}</p>
                      </div>
                      <div className={`rounded-lg px-3 py-2 ${t.highlight ? 'bg-white/10' : 'bg-steel-50 border border-steel-100'}`}>
                        <p className={`text-xs mb-0.5 ${t.highlight ? 'text-white/40' : 'text-steel-400'}`}>Karmaşıklık</p>
                        <p className={`text-sm font-semibold ${t.highlight ? 'text-white' : 'text-steel-800'}`}>{t.complexity}</p>
                      </div>
                    </div>

                    <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${t.highlight ? 'text-white/40' : 'text-steel-400'}`}>
                      Kullanım Alanları
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {t.uses.map(u => (
                        <span key={u} className={`text-xs px-2.5 py-1 rounded-full border ${
                          t.highlight
                            ? 'border-white/20 text-white/70 bg-white/10'
                            : 'border-steel-200 text-steel-600 bg-white'
                        }`}>
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

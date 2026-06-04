import { ArrowUpRight } from 'lucide-react'

const types = [
  {
    id: 'simple',
    title: 'Basit Distilasyon',
    tag: 'Temel',
    short: 'Kaynama noktaları arasında en az 25°C fark bulunan iki bileşenli karışımları ayırmak için tek kademe kullanılır.',
    detail: {
      description: 'Basit distilasyon, kaynama noktaları arasında en az 25°C fark bulunan iki bileşenli karışımları ayırmak için kullanılır. Genellikle tek bir ısıtma-yoğunlaştırma adımından oluşur. Laboratuvar ölçeğinde yaygın kullanılır; endüstriyel uygulamalarda nadiren tercih edilir.',
      uses: ['Su arıtma', 'Alkol-su ayrımı (kaba)', 'Solvent geri kazanımı'],
      efficiency: 'Düşük — Orta',
      complexity: 'Basit',
    },
  },
  {
    id: 'fractional',
    title: 'Fraksiyonel Distilasyon',
    tag: 'Endüstriyel Standart',
    highlight: true,
    short: 'Çoklu denge kademeleri barındıran kolon sayesinde benzer kaynama noktalı bileşenler bile yüksek saflıkla ayrılır.',
    detail: {
      description: 'Fraksiyonel distilasyon, kolon içinde çok sayıda denge kademesi barındırır. Petrol rafinerisi, etanol üretimi ve kimya sanayiinde temel ayırma yöntemidir. MDK-16 ürünümüz bu kategoride yer almaktadır.',
      uses: ['Ham petrol fraksiyonları', 'Etanol üretimi', 'Hava ayrışımı (N₂, O₂)', 'Mısır bazlı damıtma'],
      efficiency: 'Yüksek',
      complexity: 'Orta — Karmaşık',
    },
  },
  {
    id: 'vacuum',
    title: 'Vakum Distilasyonu',
    tag: 'Isıya Duyarlı',
    short: 'Basınç düşürülerek kaynama noktası azaltılır; böylece ısıya duyarlı maddeler bozulmadan ayrılabilir.',
    detail: {
      description: 'Basıncın düşürülmesiyle bileşenlerin kaynama noktaları da düşer; ısıya duyarlı maddeler bozulmadan ayrılabilir. Gıda sanayiinde meyve suyu konsantrasyonu ve hassas aroma maddelerinin eldesi için kritik öneme sahiptir.',
      uses: ['Meyve suyu konsantrasyonu', 'İlaç etken maddeleri', 'Ağır petrol fraksiyonları', 'Aroma eldesi'],
      efficiency: 'Yüksek',
      complexity: 'Karmaşık',
    },
  },
  {
    id: 'steam',
    title: 'Buhar Distilasyonu',
    tag: 'Doğal Ürünler',
    short: 'Enjekte edilen su buharı uçucu organik bileşenleri sürükler; esansiyel yağ üretiminde klasik yöntemdir.',
    detail: {
      description: 'Sisteme enjekte edilen su buharı, uçucu organik bileşenleri sürükler. Suya karışmayan veya az karışan bileşenler için özellikle uygundur. Esansiyel yağlar ve doğal aroma maddeleri üretiminde yüzyıllardır kullanılmaktadır.',
      uses: ['Lavanta, gül, nane yağları', 'Doğal çiçek esansları', 'Baharatlı bitki ekstraksiyonu'],
      efficiency: 'Orta',
      complexity: 'Orta',
    },
  },
  {
    id: 'reactive',
    title: 'Reaktif Distilasyon',
    tag: 'İleri Proses',
    short: 'Kimyasal reaksiyon ve distilasyon tek kolonda birleştirilir; denge kısıtlamaları aşılarak enerji tasarrufu sağlanır.',
    detail: {
      description: 'Reaksiyon ve ayırma işlemlerinin aynı anda aynı kolonda gerçekleştirildiği ileri bir süreçtir. Denge kısıtlamalarını aşar, yüksek dönüşüm oranları elde edilir ve enerji tüketimi önemli ölçüde azaltılır.',
      uses: ['Metil asetat üretimi', 'MTBE sentezi', 'Esterifikasyon reaksiyonları'],
      efficiency: 'Çok Yüksek',
      complexity: 'İleri Düzey',
    },
  },
  {
    id: 'azeotropic',
    title: 'Azeotropik Distilasyon',
    tag: 'Özel Durum',
    short: 'Azeotrop oluşturan karışımları kırmak için entrainer adı verilen üçüncü bir madde eklenerek ayırma gerçekleştirilir.',
    detail: {
      description: 'Bazı karışımlar belirli bileşimde azeotrop oluşturarak normal distilasyon ile ayrılamaz. Bu durumda üçüncü bir madde eklenerek azeotrop kırılır. Mutlak etanol üretiminde (%99.9) bu yöntem tercih edilir.',
      uses: ['Mutlak etanol üretimi', 'İzopropanol saflaştırma', 'Organik solvent kurutma'],
      efficiency: 'Yüksek',
      complexity: 'Karmaşık',
    },
  },
]

export default function Types({ onOpen }) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-200 border border-steel-200 rounded-xl overflow-hidden">
          {types.map(t => (
            <button
              key={t.id}
              onClick={() => onOpen({ title: t.title, ...t.detail })}
              className={`text-left p-6 group transition-colors cursor-pointer ${t.highlight ? 'bg-navy-800 hover:bg-navy-700 text-white' : 'bg-white hover:bg-steel-50'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${t.highlight ? 'border-white/20 text-white/70 bg-white/10' : 'border-steel-200 text-steel-500 bg-steel-50'}`}>
                  {t.tag}
                </span>
                <ArrowUpRight size={16} className={`mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${t.highlight ? 'text-white/50 group-hover:text-white' : 'text-steel-300 group-hover:text-blue-600'}`} />
              </div>
              <h3 className={`font-semibold text-base mb-2 ${t.highlight ? 'text-white' : 'text-steel-900'}`}>{t.title}</h3>
              <p className={`text-sm leading-relaxed ${t.highlight ? 'text-white/70' : 'text-steel-500'}`}>{t.short}</p>
            </button>
          ))}
        </div>

        <p className="text-center text-steel-400 text-xs mt-4">Her karta tıklayarak detaylı bilgiye ulaşabilirsiniz.</p>
      </div>
    </section>
  )
}

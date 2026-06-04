import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

const trays = [
  {
    id: 'sieve',
    title: 'Elek Tepsi',
    subtitle: 'Sieve Tray',
    short: 'Delikli düz metal plaka; basit yapı, düşük maliyet, gıda sanayiinde yaygın kullanım.',
    detail: {
      description: 'Elek tepsiler, üzerinde düzenli dağılmış küçük delikler bulunan düz metal plakalardır. Buhar bu deliklerden geçerek sıvı tabakasında köpüklenerek temas sağlar. Yapı olarak son derece basit ve ucuzdur.',
      pros: ['Düşük imalat maliyeti', 'Kolay temizlik ve bakım', 'Düşük basınç düşümü', 'Gıda uygulamalarına uygun'],
      cons: ['Dar çalışma aralığı', 'Köpük oluşumu riski'],
      usage: 'Etanol, meyve suyu konsantrasyonu, basit kimyasal ayırma',
    },
  },
  {
    id: 'valve',
    title: 'Valf Tepsi',
    subtitle: 'Valve Tray',
    short: 'Hareketli kapakçıklar sayesinde değişken debi koşullarında yüksek verimle çalışır.',
    detail: {
      description: 'Valf tepsiler, delik üzerinde hareket eden metal kapakçıklar içerir. Buhar debisi değiştikçe kapakçıklar yukarı-aşağı hareket ederek geçiş alanını ayarlar. Geniş yük aralığında yüksek verim elde edilir.',
      pros: ['Geniş operasyon aralığı', 'Yüksek kapasite', 'Kendiliğinden debiye göre ayarlanma'],
      cons: ['Elek tepsiye göre pahalı', 'Kapakçıklarda mekanik yıpranma'],
      usage: 'Petrokimya, orta-büyük ölçekli kimya tesisleri',
    },
  },
  {
    id: 'bubblecap',
    title: 'Balon Kapak Tepsi',
    subtitle: 'Bubble Cap Tray',
    short: 'En eski ve güvenilir tepsi tipi; minimum buhar debisinde bile sıvıyı tepside tutar.',
    detail: {
      description: 'Yükseltilmiş riserlerin üzerine oturtulan şapka tasarımı, buharın sıvı içinde dağılmasını sağlar. Sıvı tepside tutulduğundan çok düşük debilerde bile çalışabilir.',
      pros: ['Çok geniş çalışma aralığı', 'Düşük debide kararlı çalışma', 'Yüksek sıvı tutma kapasitesi'],
      cons: ['Yüksek imalat maliyeti', 'Yüksek basınç düşümü', 'Temizlik güçlüğü'],
      usage: 'Özel kimyasal süreçler, düşük debi uygulamaları',
    },
  },
  {
    id: 'dualflow',
    title: 'Çift Akışlı Tepsi',
    subtitle: 'Dual Flow Tray',
    short: 'Downcomer olmaksızın çalışır; buhar ve sıvı aynı deliklerden geçer, tıkanmaya karşı dayanıklıdır.',
    detail: {
      description: 'Geleneksel downcomersız tasarımdaki bu tepsiler, hem buhar hem sıvının aynı deliklerden geçmesine izin verir. Tıkanma eğilimli sistemler veya askıdaki katı madde içeren akışkanlar için önerilir.',
      pros: ['Tıkanmaya karşı yüksek dayanıklılık', 'Kolay temizlik', 'Düşük maliyet'],
      cons: ['Dar verimli çalışma aralığı', 'Düşük ayırma verimliliği'],
      usage: 'Fermentasyon sıvıları, pulp içeren akışkanlar',
    },
  },
  {
    id: 'structured',
    title: 'Yapılandırılmış Dolgu',
    subtitle: 'Structured Packing',
    short: 'Corrugated metal levhalardan oluşan dolgu; çok düşük basınç düşümü ve yüksek transfer verimi.',
    detail: {
      description: 'Corrugated metal levhalardan yapılır; çok düşük basınç düşümü ve yüksek transfer verimi sağlar. Vakum uygulamalarında ve ısıya duyarlı ürünlerde tepsi kolonuna tercih edilir.',
      pros: ['Çok düşük basınç düşümü', 'Yüksek transfer yüzeyi', 'Vakum uygulamaları için ideal'],
      cons: ['Fouling riski', 'Islama güçlüğü', 'Yüksek ilk yatırım maliyeti'],
      usage: 'Vakum distilasyonu, azeotropik ayırma, ısıya duyarlı ürünler',
    },
  },
  {
    id: 'our_tray',
    title: 'MDK-16 Tepsisi',
    subtitle: 'DistillaTech Özel Tasarım',
    our: true,
    short: 'Mısır işleme koşullarına özel geliştirilmiş elek tepsi: Ø 0.71 m çap, 0.50 m kademe aralığı.',
    detail: {
      description: 'DistillaTech MDK-16 ürünümüzde, mısır işleme koşullarına uygun özel tasarım elek tepsiler kullanılmaktadır. Paslanmaz çelik yapısı gıda güvenliği standartlarını karşılar. Ø 0.71 m çapı ve 0.5 m tepsi aralığı, 100.000 L/gün besleme kapasitesinde optimum buhar-sıvı temasını sağlayacak şekilde hesaplanmıştır.',
      pros: ['Gıda sınıfı paslanmaz çelik (316L)', 'Optimize edilmiş delik geometrisi', 'Kolay sökülebilir temizleme tasarımı', 'EHEDG uyumlu yüzey işlemi'],
      cons: [],
      usage: 'Mısır hammaddesinden yüksek saflıkta damıtılmış ürün eldesi (xD = 0.895)',
    },
  },
]

export default function TrayTypes({ onOpen }) {
  return (
    <section id="trays" className="py-24 bg-white border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Ekipman Bilgisi</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Tepsi Türleri</h2>
            <p className="text-steel-500 text-sm max-w-sm">Distilasyon kolonunun kalbini oluşturan tepsiler, verim ve kapasite üzerinde doğrudan etkilidir.</p>
          </div>
        </div>

        <div className="space-y-px bg-steel-200 border border-steel-200 rounded-xl overflow-hidden">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-12 bg-steel-100 px-6 py-3 text-xs font-semibold text-steel-500 uppercase tracking-wider">
            <div className="col-span-3">Tepsi Türü</div>
            <div className="col-span-5">Kısa Açıklama</div>
            <div className="col-span-3">Tipik Kullanım</div>
            <div className="col-span-1" />
          </div>

          {trays.map(t => (
            <button
              key={t.id}
              onClick={() => onOpen({ title: t.title, subtitle: t.subtitle, ...t.detail })}
              className={`w-full text-left px-6 py-5 group transition-colors cursor-pointer ${t.our ? 'bg-blue-700 hover:bg-blue-800' : 'bg-white hover:bg-steel-50'}`}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-0 md:items-center">
                <div className="md:col-span-3 flex items-center gap-3">
                  {t.our && <CheckCircle2 size={14} className="text-white/80 shrink-0" />}
                  <div>
                    <p className={`font-semibold text-sm ${t.our ? 'text-white' : 'text-steel-900'}`}>{t.title}</p>
                    <p className={`text-xs mt-0.5 ${t.our ? 'text-white/60' : 'text-steel-400'}`}>{t.subtitle}</p>
                  </div>
                </div>
                <div className={`md:col-span-5 text-sm ${t.our ? 'text-white/80' : 'text-steel-600'}`}>{t.short}</div>
                <div className={`md:col-span-3 text-xs ${t.our ? 'text-white/60' : 'text-steel-400'}`}>{t.detail.usage}</div>
                <div className="md:col-span-1 flex justify-end">
                  <ArrowUpRight size={15} className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${t.our ? 'text-white/50 group-hover:text-white' : 'text-steel-300 group-hover:text-blue-600'}`} />
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="text-center text-steel-400 text-xs mt-4">Her satıra tıklayarak detaylı bilgiye ulaşabilirsiniz.</p>
      </div>
    </section>
  )
}

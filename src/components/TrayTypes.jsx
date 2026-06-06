import { useState } from 'react'
import { ChevronRight, CheckCircle2 } from 'lucide-react'

const trays = [
  {
    id: 'sieve',
    title: 'Elek Tepsi',
    subtitle: 'Sieve Tray',
    short: 'Delikli düz metal plaka; basit yapı, düşük maliyet, gıda sanayiinde yaygın kullanım.',
    description: 'Elek tepsiler, üzerinde düzenli dağılmış küçük delikler bulunan düz metal plakalardır. Buhar bu deliklerden geçerek sıvı tabakasında köpüklenerek temas sağlar. Yapı olarak son derece basit ve ucuzdur.',
    pros: ['Düşük imalat maliyeti', 'Kolay temizlik ve bakım', 'Düşük basınç düşümü', 'Gıda uygulamalarına uygun'],
    cons: ['Dar çalışma aralığı', 'Köpük oluşumu riski'],
    usage: 'Etanol, meyve suyu konsantrasyonu, basit kimyasal ayırma',
  },
  {
    id: 'valve',
    title: 'Valf Tepsi',
    subtitle: 'Valve Tray',
    short: 'Hareketli kapakçıklar sayesinde değişken debi koşullarında yüksek verimle çalışır.',
    description: 'Valf tepsiler, delik üzerinde hareket eden metal kapakçıklar içerir. Buhar debisi değiştikçe kapakçıklar yukarı-aşağı hareket ederek geçiş alanını ayarlar. Geniş yük aralığında yüksek verim elde edilir.',
    pros: ['Geniş operasyon aralığı', 'Yüksek kapasite', 'Kendiliğinden debiye göre ayarlanma'],
    cons: ['Elek tepsiye göre pahalı', 'Kapakçıklarda mekanik yıpranma'],
    usage: 'Petrokimya, orta-büyük ölçekli kimya tesisleri',
  },
  {
    id: 'bubblecap',
    title: 'Balon Kapak Tepsi',
    subtitle: 'Bubble Cap Tray',
    short: 'En eski ve güvenilir tepsi tipi; minimum buhar debisinde bile sıvıyı tepside tutar.',
    description: 'Yükseltilmiş riserlerin üzerine oturtulan şapka tasarımı, buharın sıvı içinde dağılmasını sağlar. Sıvı tepside tutulduğundan çok düşük debilerde bile çalışabilir.',
    pros: ['Çok geniş çalışma aralığı', 'Düşük debide kararlı çalışma', 'Yüksek sıvı tutma kapasitesi'],
    cons: ['Yüksek imalat maliyeti', 'Yüksek basınç düşümü', 'Temizlik güçlüğü'],
    usage: 'Özel kimyasal süreçler, düşük debi uygulamaları',
  },
  {
    id: 'dualflow',
    title: 'Çift Akışlı Tepsi',
    subtitle: 'Dual Flow Tray',
    short: 'Downcomer olmaksızın çalışır; buhar ve sıvı aynı deliklerden geçer, tıkanmaya dayanıklı.',
    description: 'Geleneksel downcomersız tasarımdaki bu tepsiler, hem buhar hem sıvının aynı deliklerden geçmesine izin verir. Tıkanma eğilimli sistemler veya askıdaki katı madde içeren akışkanlar için önerilir.',
    pros: ['Tıkanmaya karşı yüksek dayanıklılık', 'Kolay temizlik', 'Düşük maliyet'],
    cons: ['Dar verimli çalışma aralığı', 'Düşük ayırma verimliliği'],
    usage: 'Fermentasyon sıvıları, pulp içeren akışkanlar',
  },
  {
    id: 'structured',
    title: 'Yapılandırılmış Dolgu',
    subtitle: 'Structured Packing',
    short: 'Corrugated metal levhalar; çok düşük basınç düşümü ve yüksek transfer verimi.',
    description: 'Corrugated metal levhalardan yapılır; çok düşük basınç düşümü ve yüksek transfer verimi sağlar. Vakum uygulamalarında ve ısıya duyarlı ürünlerde tepsi kolonuna tercih edilir.',
    pros: ['Çok düşük basınç düşümü', 'Yüksek transfer yüzeyi', 'Vakum uygulamaları için ideal'],
    cons: ['Fouling riski', 'Islama güçlüğü', 'Yüksek ilk yatırım maliyeti'],
    usage: 'Vakum distilasyonu, azeotropik ayırma, ısıya duyarlı ürünler',
  },
  {
    id: 'our_tray',
    title: 'MDK-16 Tepsisi',
    subtitle: 'DistillaTech Özel Tasarım',
    our: true,
    short: 'Mısır işleme koşullarına özel geliştirilmiş elek tepsi: Ø 0.71 m, 0.50 m kademe aralığı.',
    description: 'MDK-16 ürünümüzde, mısır işleme koşullarına uygun özel tasarım elek tepsiler kullanılmaktadır. Paslanmaz çelik yapısı gıda güvenliği standartlarını karşılar. Ø 0.71 m çapı ve 0.5 m tepsi aralığı, 100.000 L/gün besleme kapasitesinde optimum buhar-sıvı temasını sağlayacak şekilde hesaplanmıştır.',
    pros: ['Gıda sınıfı paslanmaz çelik (316L)', 'Optimize edilmiş delik geometrisi', 'Kolay sökülebilir temizleme tasarımı', 'EHEDG uyumlu yüzey işlemi'],
    cons: [],
    usage: 'Mısır hammaddesinden yüksek saflıkta damıtılmış ürün eldesi (xD = 0.895)',
  },
]

export default function TrayTypes() {
  const [selectedId, setSelectedId] = useState(null)
  const selected = trays.find(t => t.id === selectedId)
  const handleSelect = (id) => setSelectedId(prev => prev === id ? null : id)

  return (
    <section id="trays" className="py-24 bg-white border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Ekipman Bilgisi</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Tepsi Türleri</h2>
            <p className="text-steel-500 text-sm max-w-sm">Bir satıra tıklayarak detaylı bilgiye ulaşın.</p>
          </div>
        </div>

        {/* Fixed table — rows never change height */}
        <div className="border border-steel-200 rounded-xl overflow-hidden">
          <div className="hidden md:grid grid-cols-12 bg-steel-50 px-6 py-3 border-b border-steel-200 text-xs font-semibold text-steel-500 uppercase tracking-wider">
            <div className="col-span-3">Tepsi Türü</div>
            <div className="col-span-6">Kısa Açıklama</div>
            <div className="col-span-2">Kullanım</div>
            <div className="col-span-1" />
          </div>

          <div className="divide-y divide-steel-100">
            {trays.map(t => {
              const isSelected = selectedId === t.id
              return (
                <button
                  key={t.id}
                  onClick={() => handleSelect(t.id)}
                  className={`w-full text-left px-6 py-4 grid grid-cols-1 md:grid-cols-12 gap-1 md:gap-0 md:items-center group transition-colors ${
                    t.our
                      ? isSelected ? 'bg-blue-800' : 'bg-blue-700 hover:bg-blue-800'
                      : isSelected ? 'bg-blue-50' : 'bg-white hover:bg-steel-50'
                  }`}
                >
                  <div className="md:col-span-3 flex items-center gap-2">
                    {t.our && <CheckCircle2 size={13} className="text-white/70 shrink-0" />}
                    <div>
                      <p className={`font-semibold text-sm ${t.our ? 'text-white' : 'text-steel-900'}`}>{t.title}</p>
                      <p className={`text-xs mt-0.5 ${t.our ? 'text-white/55' : 'text-steel-400'}`}>{t.subtitle}</p>
                    </div>
                  </div>
                  <div className={`md:col-span-6 text-sm ${t.our ? 'text-white/75' : 'text-steel-600'}`}>{t.short}</div>
                  <div className={`md:col-span-2 text-xs hidden md:block truncate ${t.our ? 'text-white/45' : 'text-steel-400'}`}>
                    {t.usage.split(',')[0]}
                  </div>
                  <div className="md:col-span-1 flex justify-end">
                    <ChevronRight
                      size={14}
                      className={`transition-transform duration-150 ${isSelected ? 'rotate-90' : ''} ${t.our ? 'text-white/40' : 'text-steel-300'}`}
                    />
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Detail panel — below entire table */}
        {selected && (
          <div className="mt-4 rounded-xl border border-blue-200 bg-white overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-steel-100 bg-steel-50">
              <div>
                <p className="font-semibold text-steel-900">{selected.title}</p>
                <p className="text-xs text-steel-500 mt-0.5">{selected.subtitle}</p>
              </div>
              <button
                onClick={() => setSelectedId(null)}
                className="text-steel-400 hover:text-steel-700 text-xs font-medium border border-steel-200 px-3 py-1.5 rounded-lg transition-colors bg-white hover:bg-steel-50"
              >
                Kapat
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-4">
                <p className="text-steel-600 text-sm leading-relaxed">{selected.description}</p>
                <div className="bg-steel-50 border border-steel-100 rounded-lg px-4 py-3">
                  <p className="text-xs text-steel-400 mb-0.5">Tipik Uygulama</p>
                  <p className="text-steel-700 text-sm">{selected.usage}</p>
                </div>
              </div>

              <div className="space-y-4">
                {selected.pros.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Avantajlar</p>
                    <ul className="space-y-1.5">
                      {selected.pros.map(p => (
                        <li key={p} className="flex items-start gap-2 text-steel-700 text-sm">
                          <CheckCircle2 size={13} className="text-blue-500 mt-0.5 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {selected.cons.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-steel-400 mb-2">Dezavantajlar</p>
                    <ul className="space-y-1.5">
                      {selected.cons.map(c => (
                        <li key={c} className="flex items-start gap-2 text-steel-700 text-sm">
                          <span className="text-amber-400 mt-0.5 shrink-0 text-xs">—</span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

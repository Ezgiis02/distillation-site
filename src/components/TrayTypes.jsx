import { useState } from 'react'
import { ChevronDown, CheckCircle2 } from 'lucide-react'

const trays = [
  {
    id: 'sieve',
    title: 'Elek Tepsi',
    subtitle: 'Sieve Tray',
    short: 'Delikli düz metal plaka; basit yapı, düşük maliyet, gıda sanayiinde yaygın kullanım.',
    description: 'Elek tepsiler, üzerinde düzenli dağılmış küçük delikler bulunan düz metal plakalardır. Buhar bu deliklerden geçerek sıvı tabakasında köpüklenerek temas sağlar.',
    pros: ['Düşük imalat maliyeti', 'Kolay temizlik ve bakım', 'Düşük basınç düşümü', 'Gıda uygulamalarına uygun'],
    cons: ['Dar çalışma aralığı', 'Köpük oluşumu riski'],
    usage: 'Etanol, meyve suyu konsantrasyonu, basit kimyasal ayırma',
  },
  {
    id: 'valve',
    title: 'Valf Tepsi',
    subtitle: 'Valve Tray',
    short: 'Hareketli kapakçıklar sayesinde değişken debi koşullarında yüksek verimle çalışır.',
    description: 'Valf tepsiler, delik üzerinde hareket eden metal kapakçıklar içerir. Buhar debisi değiştikçe kapakçıklar yukarı-aşağı hareket ederek geçiş alanını ayarlar.',
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
    description: 'Downcomersız tasarımdaki bu tepsiler, hem buhar hem sıvının aynı deliklerden geçmesine izin verir. Tıkanma eğilimli sistemler için önerilir.',
    pros: ['Tıkanmaya karşı yüksek dayanıklılık', 'Kolay temizlik', 'Düşük maliyet'],
    cons: ['Dar verimli çalışma aralığı', 'Düşük ayırma verimliliği'],
    usage: 'Fermentasyon sıvıları, pulp içeren akışkanlar',
  },
  {
    id: 'structured',
    title: 'Yapılandırılmış Dolgu',
    subtitle: 'Structured Packing',
    short: 'Corrugated metal levhalar; çok düşük basınç düşümü ve yüksek transfer verimi.',
    description: 'Corrugated metal levhalardan yapılır; çok düşük basınç düşümü ve yüksek transfer verimi sağlar. Vakum uygulamalarında tepsi kolonuna tercih edilir.',
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
    description: 'MDK-16 ürünümüzde, mısır işleme koşullarına uygun özel tasarım elek tepsiler kullanılmaktadır. Paslanmaz çelik yapısı gıda güvenliği standartlarını karşılar. Ø 0.71 m çapı ve 0.5 m tepsi aralığı, 100.000 L/gün besleme kapasitesinde optimum buhar-sıvı temasını sağlar.',
    pros: ['Gıda sınıfı paslanmaz çelik (316L)', 'Optimize edilmiş delik geometrisi', 'Kolay sökülebilir temizleme tasarımı', 'EHEDG uyumlu yüzey işlemi'],
    cons: [],
    usage: 'Mısır hammaddesinden yüksek saflıkta damıtılmış ürün eldesi (xD = 0.895)',
  },
]

export default function TrayTypes() {
  const [openId, setOpenId] = useState(null)
  const toggle = (id) => setOpenId(prev => prev === id ? null : id)

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

        <div className="border border-steel-200 rounded-xl overflow-hidden divide-y divide-steel-200">
          {trays.map((t) => {
            const isOpen = openId === t.id
            return (
              <div key={t.id} className={
                t.our
                  ? isOpen ? 'bg-blue-800' : 'bg-blue-700 hover:bg-blue-800'
                  : isOpen ? 'bg-white' : 'bg-white hover:bg-steel-50'
              }>
                {/* Header row */}
                <button
                  onClick={() => toggle(t.id)}
                  className="w-full text-left px-6 py-5 flex items-center gap-4"
                >
                  {t.our && <CheckCircle2 size={14} className="text-white/70 shrink-0" />}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3">
                      <span className={`font-semibold text-sm sm:text-base ${t.our ? 'text-white' : 'text-steel-900'}`}>
                        {t.title}
                      </span>
                      <span className={`text-xs hidden sm:inline ${t.our ? 'text-white/45' : 'text-steel-400'}`}>
                        {t.subtitle}
                      </span>
                    </div>
                    {!isOpen && (
                      <p className={`text-xs sm:text-sm mt-0.5 truncate ${t.our ? 'text-white/60' : 'text-steel-500'}`}>
                        {t.short}
                      </p>
                    )}
                  </div>

                  <ChevronDown
                    size={15}
                    className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''} ${t.our ? 'text-white/40' : 'text-steel-400'}`}
                  />
                </button>

                {/* Expanded body */}
                {isOpen && (
                  <div className={`px-6 pb-6 border-t ${t.our ? 'border-white/10' : 'border-steel-100'}`}>
                    <div className="pt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="md:col-span-2 space-y-4">
                        <p className={`text-sm leading-relaxed ${t.our ? 'text-white/75' : 'text-steel-600'}`}>
                          {t.description}
                        </p>
                        <div className={`rounded-lg px-4 py-3 text-sm ${t.our ? 'bg-white/10 text-white/65' : 'bg-steel-50 border border-steel-100 text-steel-600'}`}>
                          <span className={`text-xs font-semibold uppercase tracking-wider mr-2 ${t.our ? 'text-white/35' : 'text-steel-400'}`}>
                            Kullanım
                          </span>
                          {t.usage}
                        </div>
                      </div>

                      <div className="space-y-4">
                        {t.pros.length > 0 && (
                          <div>
                            <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${t.our ? 'text-white/35' : 'text-steel-400'}`}>
                              Avantajlar
                            </p>
                            <ul className="space-y-1.5">
                              {t.pros.map(p => (
                                <li key={p} className={`flex items-start gap-2 text-sm ${t.our ? 'text-white/75' : 'text-steel-700'}`}>
                                  <CheckCircle2 size={13} className={`mt-0.5 shrink-0 ${t.our ? 'text-white/40' : 'text-blue-500'}`} />
                                  {p}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        {t.cons.length > 0 && (
                          <div>
                            <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${t.our ? 'text-white/35' : 'text-steel-400'}`}>
                              Dezavantajlar
                            </p>
                            <ul className="space-y-1.5">
                              {t.cons.map(c => (
                                <li key={c} className={`flex items-start gap-2 text-sm ${t.our ? 'text-white/65' : 'text-steel-700'}`}>
                                  <span className={`mt-1 w-1 h-1 rounded-full shrink-0 ${t.our ? 'bg-white/30' : 'bg-amber-400'}`} />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}

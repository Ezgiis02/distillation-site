import { Ruler, Circle, MoveVertical, Hash, ArrowDown, ArrowUp, ArrowRight, Factory, CheckCircle2 } from 'lucide-react'

const geometry = [
  { icon: Ruler,       label: 'Kule Yüksekliği',     value: '9.11',     unit: 'm' },
  { icon: Circle,      label: 'Tepsi Çapı',           value: 'Ø 0.71',   unit: 'm' },
  { icon: MoveVertical,label: 'Tepsi Aralığı',        value: '0.50',     unit: 'm' },
  { icon: Hash,        label: 'Tepsi Sayısı',         value: '16',       unit: 'adet' },
  { icon: ArrowDown,   label: 'Alt Boşluk',           value: '0.61',     unit: 'm' },
  { icon: ArrowUp,     label: 'Üst Boşluk',           value: '1.00',     unit: 'm' },
  { icon: ArrowRight,  label: 'Besleme Girişi',       value: 'Orta',     unit: 'kademe' },
  { icon: Factory,     label: 'İşleme Kapasitesi',    value: '100.000',  unit: 'L/gün' },
]

const performance = [
  { label: 'Damıtılmış Ürün Verimi', value: '%95.6', sub: 'molar bazlı', accent: true,
    desc: 'Beslemeye göre distilat akım verimi. Fraksiyonel distilasyon için sektör ortalamasının üzerinde.' },
  { label: 'Distilat Molar Fraksiyon', value: '0.895', sub: 'xD (mol/mol)',
    desc: 'Damıtılmış üründeki hedef bileşenin molar oranı. McCabe-Thiele analizi ile doğrulanmıştır.' },
  { label: 'Dip Ürün Atık Oranı', value: '%0.02', sub: 'ağırlık bazlı',
    desc: 'Kolonda kalan atık akım oranı. Optimize edilmiş tepsi tasarımı ile minimize edilmiştir.' },
]

const materials = [
  { label: 'Kolon Gövdesi', value: 'Paslanmaz Çelik 316L' },
  { label: 'Tepsi Malzemesi', value: 'Paslanmaz Çelik 316L' },
  { label: 'Conta', value: 'PTFE / Gıda Sınıfı Silikon' },
  { label: 'Yüzey İşlemi', value: 'Elektropolisaj (Ra ≤ 0.8 µm)' },
  { label: 'Standart', value: 'EHEDG, FDA 21 CFR' },
  { label: 'Temizleme', value: 'CIP/SIP Uyumlu' },
]

const advantages = [
  'Merkezi besleme tasarımı kütle transferini optimize eder',
  '16 teorik kademe McCabe-Thiele yöntemiyle doğrulanmıştır',
  'Sökülebilir tepsi yapısı kolay temizlik ve bakım sağlar',
  'Gıda sınıfı malzemeler gıda güvenliği standartlarını karşılar',
  'Düşük %0.02 atık oranı ile çevre dostu üretim',
  'CIP/SIP uyumlu tasarım üretim sürekliliğini destekler',
]

export default function TechSpecs() {
  return (
    <section id="techspecs" className="py-24 bg-steel-50 border-t border-steel-200">
      <div className="max-w-7xl mx-auto px-6 space-y-14">

        {/* Header */}
        <div>
          <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">MDK-16</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-serif text-4xl text-steel-900 leading-tight">Teknik Detaylar</h2>
            <p className="text-steel-500 text-sm max-w-sm">Mısır Distilasyon Kolonu — Tasarım ve performans spesifikasyonları.</p>
          </div>
        </div>

        {/* Geometry */}
        <div>
          <h3 className="text-steel-700 font-semibold text-sm uppercase tracking-wider mb-4">Kolon Geometrisi</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {geometry.map(({ icon: Icon, label, value, unit }) => (
              <div key={label} className="bg-white border border-steel-200 rounded-xl p-4 hover:border-steel-300 transition-colors">
                <div className="w-8 h-8 bg-steel-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon size={15} className="text-steel-500" />
                </div>
                <p className="text-xl font-bold text-steel-900 tabular-nums leading-none">{value}</p>
                <p className="text-xs text-steel-400 mt-0.5">{unit}</p>
                <p className="text-xs text-steel-500 mt-2 leading-tight">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Performance */}
        <div>
          <h3 className="text-steel-700 font-semibold text-sm uppercase tracking-wider mb-4">Performans Verileri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {performance.map(p => (
              <div key={p.label} className={`rounded-xl border p-5 ${p.accent ? 'bg-blue-700 border-blue-600' : 'bg-white border-steel-200'}`}>
                <p className={`text-3xl font-bold tabular-nums mb-1 ${p.accent ? 'text-white' : 'text-steel-900'}`}>{p.value}</p>
                <p className={`text-xs font-medium mb-3 ${p.accent ? 'text-white/60' : 'text-steel-400'}`}>{p.sub}</p>
                <p className={`text-sm font-semibold mb-1 ${p.accent ? 'text-white' : 'text-steel-800'}`}>{p.label}</p>
                <p className={`text-xs leading-relaxed ${p.accent ? 'text-white/65' : 'text-steel-500'}`}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Materials + Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Materials */}
          <div className="bg-white border border-steel-200 rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-steel-100 bg-steel-50">
              <h3 className="font-semibold text-steel-900 text-sm">Malzeme Spesifikasyonları</h3>
            </div>
            <table className="w-full">
              <tbody className="divide-y divide-steel-100">
                {materials.map(m => (
                  <tr key={m.label} className="hover:bg-steel-50 transition-colors">
                    <td className="px-5 py-3 text-steel-500 text-xs">{m.label}</td>
                    <td className="px-5 py-3 text-right font-medium text-steel-800 text-xs">{m.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Advantages */}
          <div className="bg-navy-800 rounded-xl p-5">
            <h3 className="font-semibold text-white text-sm mb-4">Tasarım Avantajları</h3>
            <ul className="space-y-3">
              {advantages.map(a => (
                <li key={a} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-blue-400 mt-0.5 shrink-0" />
                  <span className="text-white/75 text-sm leading-snug">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

import { useEffect } from 'react'
import { X, CheckCircle2, AlertCircle } from 'lucide-react'

export default function Modal({ data, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-steel-900/60 backdrop-blur-sm" />

      <div
        className="relative bg-white border border-steel-200 rounded-2xl max-w-xl w-full max-h-[88vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-steel-200 px-6 py-4 flex items-start justify-between rounded-t-2xl">
          <div>
            <h2 className="font-semibold text-steel-900 text-base">{data.title}</h2>
            {data.subtitle && <p className="text-steel-500 text-xs mt-0.5">{data.subtitle}</p>}
          </div>
          <button onClick={onClose} className="text-steel-400 hover:text-steel-700 transition-colors ml-4 mt-0.5">
            <X size={18} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Description */}
          <p className="text-steel-600 text-sm leading-relaxed">{data.description}</p>

          {/* Specs table */}
          {data.specs && (
            <div>
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">Teknik Özellikler</p>
              <div className="border border-steel-200 rounded-lg overflow-hidden">
                <table className="w-full">
                  <tbody className="divide-y divide-steel-100">
                    {data.specs.map(s => (
                      <tr key={s.label} className="hover:bg-steel-50">
                        <td className="px-4 py-2.5 text-steel-600 text-xs">{s.label}</td>
                        <td className="px-4 py-2.5 text-right font-semibold text-steel-900 text-xs tabular-nums">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Performance */}
          {data.performance && (
            <div>
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">Performans Verileri</p>
              <div className="grid grid-cols-3 gap-3">
                {data.performance.map(p => (
                  <div key={p.label} className="border border-steel-200 rounded-lg p-3 text-center">
                    <p className={`text-xl font-bold tabular-nums ${p.color}`}>{p.value}</p>
                    <p className="text-steel-500 text-xs mt-1 leading-tight">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pros */}
          {data.pros?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">Avantajlar</p>
              <ul className="space-y-2">
                {data.pros.map(p => (
                  <li key={p} className="flex items-start gap-2.5 text-steel-700 text-sm">
                    <CheckCircle2 size={14} className="text-blue-600 mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Cons */}
          {data.cons?.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">Dezavantajlar</p>
              <ul className="space-y-2">
                {data.cons.map(c => (
                  <li key={c} className="flex items-start gap-2.5 text-steel-700 text-sm">
                    <AlertCircle size={14} className="text-amber-500 mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Efficiency / Complexity */}
          {data.efficiency && (
            <div className="grid grid-cols-2 gap-3">
              <div className="border border-steel-200 rounded-lg p-3">
                <p className="text-xs text-steel-500 mb-1">Verimlilik</p>
                <p className="font-semibold text-steel-900 text-sm">{data.efficiency}</p>
              </div>
              <div className="border border-steel-200 rounded-lg p-3">
                <p className="text-xs text-steel-500 mb-1">Karmaşıklık</p>
                <p className="font-semibold text-steel-900 text-sm">{data.complexity}</p>
              </div>
            </div>
          )}

          {/* Uses */}
          {data.uses && (
            <div>
              <p className="text-xs font-semibold text-steel-500 uppercase tracking-wider mb-3">Kullanım Alanları</p>
              <div className="flex flex-wrap gap-2">
                {data.uses.map(u => (
                  <span key={u} className="text-xs border border-steel-200 bg-steel-50 text-steel-700 px-3 py-1.5 rounded-full">{u}</span>
                ))}
              </div>
            </div>
          )}

          {/* Usage */}
          {data.usage && !data.uses && (
            <div className="bg-steel-50 border border-steel-200 rounded-lg px-4 py-3">
              <p className="text-xs text-steel-500 mb-1">Tipik Uygulama</p>
              <p className="text-steel-700 text-sm">{data.usage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

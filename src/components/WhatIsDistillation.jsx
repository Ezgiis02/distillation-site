import { Thermometer, Layers, FlaskConical, BarChart3 } from 'lucide-react'

const cards = [
  {
    Icon: FlaskConical,
    title: 'Temel Prensip',
    text: 'Distilasyon, karışımdaki bileşenlerin farklı uçuculuklarından (buhar basıncı farkından) yararlanarak birbirinden ayrılması işlemidir.',
  },
  {
    Icon: Thermometer,
    title: 'Çalışma Mekanizması',
    text: 'Karışım ısıtılarak buharlaşmaya zorlanır. Uçucu bileşenler önce buharlaşır; yoğunlaştırıcıda soğutularak saflaştırılmış ürün elde edilir.',
  },
  {
    Icon: Layers,
    title: 'Endüstriyel Uygulama',
    text: 'Petrokimya, gıda, ilaç ve kimya sanayiinde vazgeçilmez bir ayırma yöntemidir. Etanol üretimi, su arıtma ve aroma maddeleri üretiminde yaygın kullanılır.',
  },
  {
    Icon: BarChart3,
    title: 'Verimlilik',
    text: 'Modern tepsi kolonları %90 üzeri verimle çalışabilir. Denge aşamaları ve reflü oranı optimizasyonu ile hedef saflık değerine ulaşılır.',
  },
]

export default function WhatIsDistillation() {
  return (
    <section id="what" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — heading + text */}
          <div>
            <p className="text-blue-700 text-sm font-semibold uppercase tracking-widest mb-3">Temel Bilgi</p>
            <h2 className="font-serif text-4xl text-steel-900 mb-6 leading-tight">Distilasyon Nedir?</h2>
            <p className="text-steel-600 leading-relaxed mb-6">
              Distilasyon, binlerce yıllık bir geçmişe sahip olmasına rağmen modern
              mühendislikte kritik önemini korumaktadır. Sıvı karışımındaki bileşenlerin
              kaynama noktası farklarından yararlanılarak ayrılması esasına dayanır.
            </p>
            <p className="text-steel-600 leading-relaxed mb-6">
              Gıda mühendisliğinde; etanol üretimi, aroma konsantrasyonu, esansiyel yağ
              eldesi ve solvent geri kazanım süreçlerinde temel işlem basamağı olarak
              yer alır. İki sıvının ayrılabilmesi için görece uçuculuk değerinin
              α {'>'} 1.05 olması yeterlidir.
            </p>
            <div className="border-l-2 border-blue-700 pl-4 mt-8">
              <p className="text-steel-700 text-sm leading-relaxed italic">
                "Endüstriyel ölçekte en yaygın kullanılan ayırma tekniği olan distilasyon,
                küresel kimya sanayii enerji tüketiminin yaklaşık %40'ından sorumludur —
                bu durum verimlilik optimizasyonunu kritik kılmaktadır."
              </p>
            </div>
          </div>

          {/* Right — cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {cards.map(({ Icon, title, text }) => (
              <div key={title} className="border border-steel-200 rounded-lg p-5 hover:border-blue-300 hover:shadow-sm transition-all">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={18} className="text-blue-700" />
                </div>
                <h3 className="font-semibold text-steel-900 text-sm mb-2">{title}</h3>
                <p className="text-steel-500 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

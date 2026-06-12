export default function TipsSection() {
  const tips = [
    { 
      title: "Hindari Membuang Sampah ke Toilet", 
      summary: "Jangan pernah membuang tisu basah, pembalut, atau plastik ke dalam toilet, karena ini adalah penyebab utama penyumbatan pipa." 
    },
    { 
      title: "Gunakan Enzim Pembersih Septic Tank", 
      summary: "Secara rutin gunakan bakteri pengurai atau enzim untuk membantu proses penguraian di dalam septic tank agar tidak cepat penuh." 
    },
    { 
      title: "Jaga Jarak Pohon dari Septic Tank", 
      summary: "Akar pohon yang besar dapat menembus pipa dan tangki. Pastikan tidak menanam pohon berakar besar di dekat instalasi septic tank." 
    },
    { 
      title: "Perhatikan Gejala Awal Mampet", 
      summary: "Jika air mulai turun lambat atau ada bau tidak sedap di sekitar area WC, segera lakukan pengecekan sebelum menjadi sumbatan total." 
    },
  ];

  return (
    <section id="tips" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Tips Perawatan Septic Tank</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-amber-200 transition-colors">
              <h3 className="font-bold text-slate-900 mb-3 text-lg leading-tight">{tip.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{tip.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

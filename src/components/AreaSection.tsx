import KarawangMap from './KarawangMap';

export default function AreaSection() {
  return (
    <section id="area-layanan" className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">Area Layanan Kami di Karawang</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Kami melayani seluruh wilayah Kabupaten Karawang. Dengan pos-pos tersebar, kami memastikan respons cepat ke lokasi Anda.
          </p>
          <ul className="space-y-2 text-sm text-slate-400">
            <li className="flex items-center gap-2">✔ Karawang Barat</li>
            <li className="flex items-center gap-2">✔ Karawang Timur</li>
            <li className="flex items-center gap-2">✔ Karawang Selatan</li>
            <li className="flex items-center gap-2">✔ Seluruh Area Sekitarnya</li>
          </ul>
        </div>
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
          <KarawangMap />
        </div>
      </div>
    </section>
  );
}

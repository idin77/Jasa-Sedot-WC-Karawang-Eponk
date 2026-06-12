export default function WorkDocumentation() {
  const photos = [
    { src: "/src/assets/images/service_truck_rear_view_1780692456879.png", label: "Truk Sedot WC Karawang" },
    { src: "/src/assets/images/fleet_truck_after_1780692321562.png", label: "Armada Kami di Lokasi" },
    { src: "/src/assets/images/jasa-sedot-wc-karawang.jpg", label: "Truk Sedot WC Karawang" },
    { src: "/src/assets/images/before_job_1780691490305.png", label: "Proses Pengerjaan" },
    { src: "/src/assets/images/after_job_1780691507858.png", label: "Hasil Kerja" },
  ];

  return (
    <section id="dokumentasi" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Dokumentasi Pekerjaan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((photo, i) => (
            <div key={i} className="group">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={photo.src} 
                  alt={photo.label} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <p className="mt-4 text-center font-medium text-slate-700">{photo.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

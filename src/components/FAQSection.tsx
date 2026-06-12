export default function FAQSection() {
  const faqs = [
    { 
      question: "Berapa sering sebaiknya melakukan sedot septic tank?", 
      answer: "Idealnya, septic tank perlu dikuras setiap 1-3 tahun sekali. Waktu ini bergantung pada jumlah penghuni rumah dan intensitas penggunaan air. Lebih baik melakukan pengecekan berkala agar tidak sampai meluap dan menyebabkan mampet." 
    },
    { 
      question: "Apakah harga yang ditawarkan transparan?", 
      answer: "Ya, kami menjunjung tinggi transparansi harga. Semua biaya diinformasikan di awal sebelum pengerjaan dimulai, berdasarkan kapasitas tangki atau jenis pengerjaan, sehingga tidak ada biaya tambahan tak terduga di akhir." 
    },
    { 
      question: "Apakah layanan ini bisa dilakukan di malam hari?", 
      answer: "Kami memahami bahwa masalah WC seringkali bersifat darurat. Oleh karena itu, kami menyediakan layanan siaga 24 jam untuk area Karawang untuk menangani panggilan darurat." 
    },
    { 
      question: "Apakah pekerjaan sedot WC akan merusak septic tank atau ubin?", 
      answer: "Tidak perlu khawatir. Tim kami menggunakan peralatan vakum modern berdaya hisap tinggi dan teknik yang rapi, sehingga pengerjaan bisa dilakukan tanpa harus membongkar ubin atau merusak instalasi pipa yang ada." 
    },
  ];

  return (
    <section id="faq" className="py-16 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-12">Pertanyaan Umum (FAQ)</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

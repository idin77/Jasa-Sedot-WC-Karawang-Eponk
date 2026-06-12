import { useEffect } from 'react';

const seoMap: Record<string, { title: string, description: string }> = {
    'layanan': { title: 'Jasa Sedot WC Karawang - Layanan Profesional', description: 'Butuh sedot septic tank atau WC mampet di Karawang? Layanan cepat, bersih, dan transparan.' },
    'area-layanan': { title: 'Jasa Sedot WC Karawang - Area Layanan Luas', description: 'Melayani seluruh wilayah Kabupaten Karawang.' },
    'testimoni': { title: 'Jasa Sedot WC Karawang - Testimoni Pelanggan', description: 'Lihat apa kata pelanggan kami tentang layanan sedot WC yang cepat dan memuaskan.' },
    'tips': { title: 'Tips Perawatan Septic Tank - Jasa Sedot WC Karawang', description: 'Ikuti tips kami agar septic tank Anda tetap awet dan bebas mampet.' },
    'faq': { title: 'Pertanyaan Umum (FAQ) - Jasa Sedot WC Karawang', description: 'Temukan jawaban atas pertanyaan umum seputar layanan sedot septic tank dan plumbing.' },
};

export function useSEOTracker() {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const seo = seoMap[entry.target.id];
                    if (seo) {
                        document.title = seo.title;
                        let metaDesc = document.querySelector('meta[name="description"]');
                        if (!metaDesc) {
                            metaDesc = document.createElement('meta');
                            metaDesc.setAttribute('name', 'description');
                            document.head.appendChild(metaDesc);
                        }
                        metaDesc.setAttribute('content', seo.description);
                    }
                }
            });
        }, { threshold: 0.6 });

        Object.keys(seoMap).forEach(id => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);
}

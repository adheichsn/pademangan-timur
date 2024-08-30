import React from 'react'
import Image from 'next/image';

const features = [
    {
        img: "/img/un-1.jpg",
        title: "Pengalaman Interaktif",
        desc: "Berinteraksi langsung dengan fitur-fitur canggih yang membuat penggunaan aplikasi lebih menyenangkan dan produktif.",
    },
    {
        img: "/img/un-2.jpg",
        title: "Efisiensi waktu dan akses",
        desc: "Nikmati akses cepat ke berbagai layanan tanpa hambatan, kapan saja dan di mana saja, langsung dari perangkat Anda.",
    },
    {
        img: "/img/un-3.jpg",
        title: "Media monitoring",
        desc: "Pantau informasi dan data penting dengan cara yang mudah dan efisien, langsung dari ponsel Anda, kapan saja dan di mana saja.",
    },
    {
        img: "/img/un-4.jpg",
        title: "Kemudahan penggunaan",
        desc: "Antarmuka yang dirancang untuk kemudahan navigasi, menjadikan setiap fitur dapat diakses dengan cepat dan mudah.",
    },
];

function ThirdLayout() {
    return (
        <article className="max-w-7xl mx-auto max-md:px-2 max-2xl:px-4 my-8 lg:my-10 mb-10 lg:mb-20">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
                Monitoring Pegawai ASN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 xl:gap-4">
                {features.map((f, index) => (
                    <div
                        key={index}
                        className="border border-neutral04 rounded-xl p-4 lg:p-6 flex items-center gap-4 lg:gap-6"
                    >
                        <div className="max-w-24 min-h-32 rounded-lg overflow-hidden">
                            <Image
                                src={f.img}
                                alt={f.title}
                                width={800}
                                height={400}
                                className="object-cover object-center h-32"
                            />
                        </div>
                        <div>
                            <strong>{f.title}</strong>
                            <p className="text-neutral03">{f.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </article>
    )
}

export default ThirdLayout
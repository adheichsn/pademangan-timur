import React from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
    title: "Kebijakan Privasi",
    description: "Ketentuan Layanan ini mengatur penggunaan layanan yang disediakan oleh Kelurahan Pademangan Timur."
};

const privacy = {
    title: "Kebijakan Privasi Kelurahan Pademangan Timur",
    description: (
        <>
            Selamat datang di Ketentuan Layanan <strong>Pademangan Timur</strong>. Ketentuan
            Layanan ini mengatur penggunaan layanan <strong>Pademangan Timur</strong> yang
            disediakan oleh Kelurahan Pademangan Timur. Dengan menggunakan layanan kami, Anda
            menyetujui untuk terikat oleh ketentuan ini. Mohon baca dengan seksama
            sebelum menggunakan layanan kami.
        </>
    ),
    content: [
        {
            title: "Pengumpulan Informasi",
            description: [
                "Informasi Pribadi: Kami dapat mengumpulkan informasi identitas pribadi (seperti nama, alamat email, nomor ponsel, dan informasi lembaga Anda) ketika Anda secara sukarela memberikannya kepada kami melalui formulir di Situs Web. Informasi Non-Pribadi: Kami juga dapat mengumpulkan informasi non-pribadi secara otomatis, seperti alamat IP, jenis browser, dan informasi perangkat Anda, untuk meningkatkan fungsionalitas dan pengalaman pengguna di Situs Web kami.",
            ],
        },
        {
            title: "Berbagi Data",
            description: [
                "Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan eksplisit Anda. Namun, kami dapat membagikan informasi non-pribadi untuk tujuan analitis atau untuk keperluan peningkatan layanan publik.",
            ],
        },
        {
            title: "Penggunaan Layanan",
            description: [
                "Anda diizinkan untuk menggunakan layanan Kelurahan Pademangan Timur untuk keperluan pribadi sesuai dengan ketentuan hukum yang berlaku dan Ketentuan Layanan ini.",
                "Anda tidak diperkenankan untuk menggunakan layanan kami untuk tujuan ilegal, melanggar hak orang lain, atau mengganggu operasi layanan kami.",
            ],
        },
        {
            title: "Hak Cipta dan Kepemilikan",
            description: [
                "Konten dan materi yang disediakan dalam layanan Kelurahan Pademangan Timur dilindungi oleh hak cipta dan kekayaan intelektual lainnya. Anda tidak diperkenankan untuk menggunakan, menyalin, atau mendistribusikan konten tersebut tanpa izin tertulis dari pihak Kelurahan.",
            ],
        },
        {
            title: "Kontak Kami",
            description: [
                "Jika Anda memiliki pertanyaan atau komentar tentang Kebijakan Privasi atau Ketentuan Layanan kami, jangan ragu untuk menghubungi kami melalui kontak yang tersedia.",
            ],
        },
    ],
};

const PrivacyPage = () => {
    return (
        <>
            <header className="flex justify-center items-center gap-6 md:py-3">
                <Link href="/">
                    <Image
                        src={"/img/pademangan.png"}
                        alt="Logo Pademangan"
                        width={70}
                        height={70}
                        className="h-max"
                    />
                </Link>
            </header>
            <main className="max-w-7xl mx-auto max-md:mx-2 max-xl:mx-4 bg-accent mb-10 lg:mb-20 p-10 lg:px-20 rounded-3xl">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
                    {privacy.title}
                </h1>
                <p className="text-sm md:text-base mb-2 lg:mb-3">
                    {privacy.description}
                </p>
                <article>
                    <ol className="list-decimal list-inside flex flex-col gap-2 lg:gap-3">
                        {privacy.content.map((c, index) => (
                            <li key={index} className="font-semibold mb-1">
                                {c.title}
                                <ul className="list-disc list-inside pl-4 font-normal">
                                    {c.description.map((d, i) => (
                                        <li key={i} className="text-sm md:text-base">
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ol>
                </article>
            </main>
            <Footer/>
        </>
    );
};

export default PrivacyPage;
"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const services = [
    {
        img: "/img/Group 126.png",
        title: (
            <>
                <span className="text-indigo-700">Membangun Pengalaman </span> Penggunaan yang Efektif
            </>
        ),
        desc: "Memastikan kelancaran dan kemudahan dalam memantau kinerja pegawai ASN, dengan sistem yang responsif dan sesuai kebutuhan.",
    },
    {
        img: "/img/Group 127.png",
        title: (
            <>
                <span className="text-sky-500">Navigasi dan Konten</span> yang interaktif
                yang Menawan
            </>
        ),
        desc: "Menghadirkan tampilan visual yang informatif dan mudah dipahami, membantu Anda untuk mengambil keputusan dengan cepat dan tepat.",
    },
    {
        img: "/img/Group 134.png",
        title: (
            <>
                <span className="text-indigo-700">Navigasi serta Konten yang </span>{" "}
                Interaktif dan Inovatif
            </>
        ),
        desc: "Kemudahan bagi pengunjung untuk menjelajahi  ruang show case yang menyediakan berbagai konten menarik ",
    },
];

const serviceNavigations = [
    {
        img: "/img/Group 126.png",
        title: "Pademangan",
        index: 0,
    },
    {
        img: "/img/Group 127.png",
        title: "Temadi",
        index: 1,
    },
    {
        img: "/img/Group 134.png",
        title: "Warga",
        index: 2,
    },
];

function SecondLayout() {
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const handleNavClick = (index: number) => {
        setActiveIndex(index);
    };
    const activeService = services[activeIndex];

    return (
        <article className="max-w-7xl mx-auto max-md:px-2 max-2xl:px-4 my-8 lg:my-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10 items-center mb-10 lg:mb-20">
            <div className="relative h-[350px] md:h-[400px] lg:h-[480px]">
                <div className="absolute bottom-0 w-[100%] h-[290px] md:h-[340px] lg:h-[380px] shadow-[-1px_-1px_20px_-2px_#7487B425] bg-gradient-to-br from-[#ECF1F8] to-[#B3BDD0] rounded-br-[65%]" />
                {/* Service Main Image */}
                <div className="absolute right-0 w-[95%] h-[330px] md:h-[380px] lg:h-[450px] rounded-tl-[50%] rounded-br-[50%] overflow-hidden">
                    <Image
                        src={activeService.img}
                        alt="Feature"
                        width={800}
                        height={800}
                        className="object-cover object-center h-full"
                    />
                </div>
                {/* Service Navigation */}
                <div className="absolute bottom-0 bg-neutral01 p-1 md:p-2 rounded-sm flex gap-1 md:gap-2">
                    <div className="w-[75px] md:w-[80px] h-[50px] border border-dashed border-[#1B8CC3] rounded-sm flex flex-col items-center justify-center fill-[#1B8CC3] cursor-default">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24"
                            viewBox="0 -960 960 960"
                            width="24"
                        >
                            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0 0v-560 560Zm80-80h400q12 0 18-11t-2-21L586-459q-6-8-16-8t-16 8L450-320l-74-99q-6-8-16-8t-16 8l-80 107q-8 10-2 21t18 11Z" />
                        </svg>
                        <p className="bg-[#1B8CC3] text-white text-[8px] px-1 rounded-sm">
                            See our galery
                        </p>
                    </div>
                    {serviceNavigations.map((sn, index) => (
                        <div
                            key={index}
                            className={`w-[75px] md:w-[80px] h-[50px] overflow-hidden relative rounded-sm cursor-pointer ${activeIndex == sn.index ? "border-2 border-[#1B8CC3]" : ""
                                }`}
                            onClick={() => handleNavClick(sn.index)}
                        >
                            <Image src={sn.img} alt={sn.title} width={80} height={50} />
                            <p className="absolute left-1 bottom-0 text-[8px] font-semibold text-white">
                                {sn.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex gap-8">
                <div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
                        {activeService.title}
                    </h3>
                    <p className="text-neutral03">{activeService.desc}</p>
                </div>
            </div>
        </article>
    )
}

export default SecondLayout
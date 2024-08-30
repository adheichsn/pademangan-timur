import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function AboutLayout() {
    return (
        <article className="max-w-7xl mx-auto max-md:mx-2 max-2xl:mx-4 bg-accent my-8 mb-10 lg:mb-20 p-10 lg:p-20 rounded-3xl">
            <p className="text-sm lg:text-base font-semibold mb-6 lg:mb-0">
                Dipersembahkan oleh
            </p>
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-4 lg:gap-8">
                <div className="w-[150px] lg:w-[245px]">
                    <Link href="/">
                        <Image
                            src={"/img/pademangan.png"}
                            alt="Esaunggul"
                            width={200}
                            height={200}
                            className="scale-125"
                        />
                    </Link>
                </div>
                <div className="flex flex-col gap-6 max-w-[550px]">
                    <strong className="text-2xl lg:text-4xl">Kelurahan Pademangan Timur</strong>
                    <p className="text-base lg:text-lg text-[#585981]">
                        Sebagai bagian dari administrasi Jakarta Utara, kami berkomitmen untuk memberikan
                        pelayanan publik yang prima serta mendukung pembangunan masyarakat yang sejahtera dan berdaya saing tinggi.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default AboutLayout
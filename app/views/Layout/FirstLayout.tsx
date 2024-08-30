import React from 'react'
import Image from 'next/image'

function FirstLayout() {
    return (
        <article className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 items-center justify-between max-md:mx-2 max-2xl:mx-4 bg-accent mb-10 lg:mb-20 py-8 md:py-8 px-3 md:px-4 md:p-10 lg:px-20 rounded-3xl">
            <div className="mx-auto md:w-[55%] flex flex-col gap-6 md:gap-8">
                <div>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
                        Kelurahan
                    </h1>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#0192AE] to-[#253A76] inline-block text-transparent bg-clip-text">
                        Pademangan Timur
                    </h1>
                </div>
                <p className="text-base md:text-lg lg:text-xl text-[#585981]">
                    Pusat pelayanan publik yang berkomitmen dalam melayani masyarakat dengan integritas dan transparansi.
                    Kami hadir untuk mendukung kesejahteraan warga dan pembangunan berkelanjutan di wilayah Jakarta Utara.
                </p>
                <div className="w-[90%] mx-auto md:hidden">
                    <Image
                        src={"/img/Group 133.png"}
                        alt="Illustration"
                        width={300}
                        height={300}
                    />
                </div>
            </div>
            <div className="hidden md:block">
                <Image
                    src={"/img/Group 133.png"}
                    alt="Illustration"
                    width={300}
                    height={300}
                />
            </div>
        </article>
    )
}

export default FirstLayout
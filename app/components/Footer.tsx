import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#013F88] text-white py-6 md:py-8 lg:py-10">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-md:px-2 max-2xl:px-4">
                <div className="col-span-2 lg:col-span-1 flex flex-col gap-6">
                    <a href="https://www.esaunggul.ac.id/" className="flex items-center gap-2">
                        <span className="flex items-baseline text-bold text-lg font-bold">
                            Kelurahan Pademangan Timur
                        </span>
                    </a>
                    <div className="text-sm lg:text-base">
                        <p className="text-neutral04">
                            Jl. Pademangan VII, RT.4/RW.10, Pademangan Timur, Kec. Pademangan, Jakarta Utara, Daerah Khusus Ibukota Jakarta 14410
                        </p>
                    </div>
                </div>
                <div className="lg:hidden col-span-2 lg:col-span-1 h-[1px] bg-neutral04"></div>
                <div className="flex gap-4 lg:justify-around">
                    {/* <div>
            <p className="text-xs lg:text-sm text-neutral04 mb-2">
              Quick Accsess
            </p>
            <ul className="text-sm lg:text-base flex flex-col gap-1">
              <li className="mb-2">
                <Link href="https://sso.esaunggul.ac.id/" className="hover:text-orange-500">
                  Sistem Informasi Akademik
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://dosen.esaunggul.ac.id/" className="hover:text-orange-500">
                  Blog Dosen
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://student.esaunggul.ac.id/" className="hover:text-orange-500">
                  Blog Mahasiswa
                </Link>
              </li>
            </ul>
          </div> */}
                    {/* <div>
            <p className="text-xs lg:text-sm text-neutral04 mb-2">Location</p>
            <ul className="text-sm lg:text-base flex flex-col gap-1">
              <li className="mb-2">
                <Link href="https://pendaftaran.esaunggul.ac.id/kontak-kami-kampus-jakarta/" className="hover:text-orange-500">
                  Jakarta Campus
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://pendaftaran.esaunggul.ac.id/kontak-kami-kampus-tangerang/" className="hover:text-orange-500">
                  Tangerang Campus
                </Link>
              </li>
              <li className="mb-2">
                <Link href="https://pendaftaran.esaunggul.ac.id/kontak-kami-kampus-bekasi/" className="hover:text-orange-500">
                  Bekasi Campus
                </Link>
              </li>
            </ul>
          </div> */}
                </div>
                <div className="md:hidden col-span-2 lg:col-span-1 h-[1px] bg-neutral04"></div>
                <div className="flex flex-col gap-2">
                    <div className="text-xs lg:text-sm">
                    </div>
                    <ul className="flex gap-2 mt-2">
                        <li className="p-2 border rounded-full hover:bg-neutral04/10">
                            <a href="#" target="_blank">
                                <Image
                                    src={"/img/Instagram.svg"}
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </li>
                        <li className="p-2 border rounded-full hover:bg-neutral04/10">
                            <a
                                href="#"
                                target="_blank"
                            >
                                <Image
                                    src={"/img/LinkedIn.svg"}
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </li>
                        <li className="p-2 border rounded-full hover:bg-neutral04/10">
                            <a
                                href="#"
                                target="_blank"
                            >
                                <Image
                                    src={"/img/YouTube.svg"}
                                    alt="Instagram"
                                    width={20}
                                    height={20}
                                />
                            </a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <p>
                                +62 812 1309 8022 - WhatsApp Only
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
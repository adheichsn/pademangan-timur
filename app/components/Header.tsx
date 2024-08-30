"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";


const Header = () => {
    return (
        <header className="md:py-3">
            <div className="max-w-6xl mx-auto flex justify-between items-center max-md:px-2 max-[1152px]:px-4">
                <Link href="/">
                    <Image
                        src={"/img/pademangan.png"}
                        alt="esaunggul"
                        width={70}
                        height={70}
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
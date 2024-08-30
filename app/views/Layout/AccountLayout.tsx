import React from 'react'

function AccountLayout() {
    return (
        <div className="flex items-center justify-center pb-7">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-gray-600 mb-6">
                    Jika Anda belum memiliki akun, silakan hubungi admin:
                </p>
                <a
                    href="https://wa.me/6281213098022"
                    target="_blank"
                    className="bg-[#1DAEFF] text-white px-8 lg:px-10 py-2 rounded-md font-semibold w-max hover:bg-[#1DAEFF]/80 transition-all ease-in-out duration-150"
                >
                    Hubungi kami
                </a>
            </div>
        </div>
    )
}

export default AccountLayout
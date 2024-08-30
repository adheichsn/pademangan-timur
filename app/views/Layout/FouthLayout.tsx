import React from 'react'
import Link from 'next/link'

function FouthLayout() {
    return (
        <div className='max-w-7xl mx-auto max-md:mx-2 max-2xl:mx-4 justify-center content-center text-center'>
            <h5 className="mb-2 text-3xl font-bold text-gray-900">
                Download App
            </h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg">
                Stay up to date and move with Pademangan Timur. Download the app today.
            </p>
            <Link
                href={process.env.NEXT_PUBLIC_DOWNLOAD_URL!}
                target="_blank"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                download
            >
                <svg
                    className="me-3 w-7 h-7"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google-drive"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                >
                    <path fill="#FFC107" d="M17 6L31 6 45 30 31 30z"></path>
                    <path
                        fill="#1976D2"
                        d="M9.875 42L16.938 30 45 30 38 42z"
                    ></path>
                    <path fill="#4CAF50" d="M3 30.125L9.875 42 24 18 17 6z"></path>
                </svg>
                <div className="text-left rtl:text-right">
                    <div className="mb-1 text-xs">Get it on</div>
                    <div className="-mt-1 font-sans text-sm font-semibold">
                        Google Drive
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FouthLayout
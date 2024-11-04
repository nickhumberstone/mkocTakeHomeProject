import React from 'react'
import Image from 'next/image'
import MkocLogo from "../../public/mkocLogoWhite.png"

const Header = () => {
    return (
        <header className="w-screen h-16 bg-blue-700 shadow-sm shadow-gray-500 flex items-center">
            <Image
                className="left-2 p-2"
                src={MkocLogo}
                width={160}
                height={160}
                alt="MyKindOfCruise logo" />
        </header>
    )
}

export default Header
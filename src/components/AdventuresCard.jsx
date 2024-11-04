import React from 'react'
import Image from 'next/image'

const AdventuresCard = ({ data }) => {

    const { image, name } = data
    // data = {
    //     "name": "P&O Cruise + Flights",
    //     "image": "https://images.ctfassets.net/1roij4s04al1/3FPlMGcivSjq16hWSUXG56/28833a1d2858cadb3cfb3f006e9c3956/test4.jpg"
    // }
    return (<>
        {!image.includes("undefined") ?
            <div className='bg-white m-2 border shadow-md rounded-md flex-1 min-w-40'>
                <Image className="p-0 m-0 w-full h-32" src={!image.includes("undefined") && image} width={100} height={100} />
                <p className='text-sm font-bold text-center py-1'>{name}</p>
            </div>
            :
            <></>
        }

    </>
    )
}

export default AdventuresCard
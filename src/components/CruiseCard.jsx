import React from 'react'
import Image from 'next/image'

const CruiseCard = ({ data }) => {

    const { nights, name, shipName, sailDate, startPort, price, shipImage } = data
    const date = new Date(sailDate).toDateString();
    return (
        <div className="min-w-64 h-96 m-2 p-2 border rounded-md bg-blue-100 flex-1">
            <Image className="p-0 m-0 w-full h-32" src={shipImage} width={200} height={100} />
            <h3>{nights} Night {name}</h3>
            <p className='italic'>{shipName}</p>
            <br />
            <p>{date}</p>
            <p>Departs from <span className="bold">{startPort}</span></p>

            <p>£{Math.round(price)}</p>
            <button className='bg-blue-800 rounded-md hover:bg-blue-300 text-white text-center p-2'>Book Now</button>

        </div>

    )
}

export default CruiseCard
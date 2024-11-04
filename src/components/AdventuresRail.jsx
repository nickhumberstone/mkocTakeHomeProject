"use client"

import React, { useEffect, useState } from 'react'
import AdventuresCard from './AdventuresCard'

export const AdventuresRail = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        const response = await fetch("https://jjzl6.wiremockapi.cloud/adventures")
        const output = await response.json();
        setData(output)
        setLoading(false)
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className="w-full p-2 m-2">
            <h2>My Adventures</h2>
            <div className="flex overflow-auto">
                {loading ? <p>Loading...</p> : data.map((e) => (<AdventuresCard data={e} key={e.image} />))}
            </div>
        </div>
    )
}

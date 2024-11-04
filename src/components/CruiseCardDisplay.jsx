"use client"
import React from 'react'
import CruiseCard from './CruiseCard'
import { useState } from 'react'
import { useEffect } from 'react'

const CruiseCardDisplay = () => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  const getData = async () => {
    const response = await fetch("https://jjzl6.wiremockapi.cloud/cruises")
    const output = await response.json();
    setData(output)
    setLoading(false)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full p-2 m-2">
      <h2>Popular Cruises</h2>
      <div className="cardDisplay flex flex-row overflow-auto">
        {loading ? <p>Loading...</p> : data.map((e) => (<CruiseCard data={e} key={e.name + e.nights + e.shipImage} />))}
      </div>
    </div>
  )
}

export default CruiseCardDisplay
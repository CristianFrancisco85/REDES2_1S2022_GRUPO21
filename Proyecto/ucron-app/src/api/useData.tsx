import React, { useEffect, useState } from 'react'
import { API_URL, Data } from '../models/Models';

export const useData = () => {
    
    const [data, setData] = useState<Data[]>([])

    const getData = async () => {
        const res = await fetch(`${API_URL}/data`)
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])


    return data
}

import React, { useEffect, useState } from 'react'
import { API_URL, Puesto } from '../models/Models';

export const usePuestos = () => {
    
    const [puestos, setPuestos] = useState<Puesto[]>([])

    const getPuestos = async () => {
        const res = await fetch(`${API_URL}/puestos`)
        const data = await res.json()
        setPuestos(data)
    }

    useEffect(() => {
        getPuestos()
    }, [])

    return puestos
}

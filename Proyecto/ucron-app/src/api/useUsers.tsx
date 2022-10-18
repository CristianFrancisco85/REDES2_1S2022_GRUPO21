import React, { useEffect } from 'react'
import { useState } from 'react';
import { API_URL, User } from '../models/Models';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([])

    const getUsers = async () => {
        const res = await fetch(`${API_URL}/users`)
        const data = await res.json()
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    return users
}

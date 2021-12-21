import { useState } from 'react'
import { userHistory } from 'react-router-dom'

export default function removeToken() {
    const history = userHistory()

    const getToken = () => {
        const tokenString = localStorage.getItem('token')
        const userToken = JSON.parse(tokenString)
 
        return userToken?.token
    }

    const removeToken = () => {
        if ( getToken !== null && getToken !== undefined ) {
            localStorage.removeItem('token')

            history.push('/login')
        }

        history.push('/login')
    }

    return {
        setTokenOff: removeToken,

    }
}
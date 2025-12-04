import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const Protected = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext)

    if (!isLoggedIn) {
        return <Navigate to="/" replace />
    }

    return children
}

export default Protected
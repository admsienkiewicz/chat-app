import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null)

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            console.log(user)
            setCurrUser(user)
        })
        return () => {
            unsub()
        }
    }, [])
    return <AuthContext.Provider value={{ currUser }}>{children}</AuthContext.Provider>
}

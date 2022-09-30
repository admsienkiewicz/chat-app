import React, { useContext } from 'react'
import './Navbar.scss'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthCotntext'

const Navbar = () => {
    const { currUser } = useContext(AuthContext)
    return (
        <div className="Navbar">
            <div className="userInfo">
                <img src={currUser.photoURL} alt="" />
                <span className="userName">{currUser.displayName}</span>
            </div>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div>
    )
}

export default Navbar

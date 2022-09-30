import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Form.scss'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        try {
            await signInWithEmailAndPassword(auth, email, password)
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="formContainer">
            <span className="logo">Chat APP</span>
            <span className="title">Log in</span>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder="Enter email" />
                <input type="password" placeholder="Enter password" />
                <button>Login</button>
            </form>
            <p>
                Don't have an account? <Link to={'/register'}>Regiester now</Link>
            </p>
        </div>
    )
}

export default Login

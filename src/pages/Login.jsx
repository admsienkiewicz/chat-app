import React from 'react'
import { Link } from 'react-router-dom'
import './Form.scss'

const Login = () => {
    return (
        <div className="formContainer">
            <span className="logo">Chat APP</span>
            <span className="title">Log in</span>
            <form>
                <input type="text" placeholder="Enter username" />
                <input type="text" placeholder="Enter password" />
                <button>Login</button>
            </form>
            <p>
                Don't have an account? <Link to={'/register'}>Regiester now</Link>
            </p>
        </div>
    )
}

export default Login

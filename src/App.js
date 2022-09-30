import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import { AuthContext } from './context/AuthCotntext'
import { useContext } from 'react'

function App() {
    const { currUser } = useContext(AuthContext)

    const ProtectedRoute = ({ children }) => {
        if (currUser) {
            return children
        }
        return <Navigate to="/login" />
    }
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={
                            <ProtectedRoute>
                                <Main />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App

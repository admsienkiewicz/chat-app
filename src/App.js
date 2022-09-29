import './App.scss'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Main from './pages/Main'
import { AuthContext, AuthContextProvider } from './context/AuthCotntext'
import { useContext } from 'react'

function App() {
    const currUser = useContext(AuthContext)

    const ProtectedRoute = ({ children }) => {
        if (!currUser) return <Navigate to={'/login'} />
    }
    return (
        <AuthContextProvider>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
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
        </AuthContextProvider>
    )
}

export default App

import React from 'react'
import ChatBox from '../components/ChatBox'
import Sidebar from '../components/Sidebar'
import './Main.scss'

const Main = () => {
    return (
        <div className="Main">
            <Sidebar />
            <ChatBox />
        </div>
    )
}

export default Main

import React, { useState } from 'react'
import './ChatBox.scss'
import InputMessage from './InputMessage'
import Messages from './Messages'

const ChatBox = () => {
    const [closed, setClosed] = useState(true)
    return (
        <div className={`ChatBox ${closed && 'closed'}`}>
            <div className="chatInfo">
                <p onClick={() => setClosed(true)}>back</p>
                <span>Name</span>
            </div>
            <Messages />
            <InputMessage />
        </div>
    )
}

export default ChatBox

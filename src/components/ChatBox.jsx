import React, { useContext, useState } from 'react'
import { ChatContext } from '../context/ChatContext'
import './ChatBox.scss'
import InputMessage from './InputMessage'
import Messages from './Messages'

const ChatBox = () => {
    const [closed, setClosed] = useState(true)
    const { data } = useContext(ChatContext)
    return (
        <div className={`ChatBox ${closed && 'closed'}`}>
            <div className="chatInfo">
                <p onClick={() => setClosed(true)}>back</p>
                <span>{data.user.displayName}</span>
            </div>
            <Messages />
            <InputMessage />
        </div>
    )
}

export default ChatBox

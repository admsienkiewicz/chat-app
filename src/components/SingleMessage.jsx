import React, { useContext, useEffect, useRef } from 'react'
import { AuthContext } from '../context/AuthCotntext'
import { ChatContext } from '../context/ChatContext'
import './SingleMessage.scss'

const SingleMessage = ({ messageContent }) => {
    const { currUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    const ref = useRef()

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: 'smooth' })
    }, [messageContent])
    return (
        <div ref={ref} className={`SingleMessage ${messageContent.senderId === currUser.uid && 'userMessage'}`}>
            <img
                className="avatar"
                src={messageContent.senderId === currUser.uid ? currUser.photoURL : data.user.photoURL}
                alt="avatar-img"
            />
            <div className="messageContent">
                {messageContent.text && <p>{messageContent.text}</p>}
                {messageContent.img && <img src={messageContent.img} alt="" />}
            </div>
        </div>
    )
}

export default SingleMessage

import React from 'react'
import './SingleContact.scss'

const SingleContact = ({ photoURL, contactName, lastMessage = '' }) => {
    return (
        <div className="SingleContact">
            <img src={photoURL} alt="avatar" />
            <div className="contactPreview">
                <span className="contactName">{contactName}</span>
                <p className="lastMessage">{lastMessage}</p>
            </div>
        </div>
    )
}

export default SingleContact

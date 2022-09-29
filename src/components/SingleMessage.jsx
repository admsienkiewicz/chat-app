import React from 'react'
import './SingleMessage.scss'

const SingleMessage = () => {
    return (
        <div className="SingleMessage userMessage">
            <img
                className="avatar"
                src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/104598313_3043668482348090_7809686983493534073_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jE1B0yQoUqgAX9JPTK3&_nc_ht=scontent-waw1-1.xx&oh=00_AT8frd2CydbQyovAXPmP6G7c5NaMh9ajdDR6bA0uLPWvAQ&oe=635BA48E"
                alt=""
            />
            <div className="messageContent">
                <p>Elo byku co tam udsa</p>
                <img
                    src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.6435-9/104598313_3043668482348090_7809686983493534073_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jE1B0yQoUqgAX9JPTK3&_nc_ht=scontent-waw1-1.xx&oh=00_AT8frd2CydbQyovAXPmP6G7c5NaMh9ajdDR6bA0uLPWvAQ&oe=635BA48E"
                    alt=""
                />
            </div>
        </div>
    )
}

export default SingleMessage

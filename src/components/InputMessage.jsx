import React from 'react'
import './InputMessage.scss'

const InputMessage = () => {
    return (
        <div className="InputMessage">
            <input type="text" placeholder="Type something..." />
            <div className="inputOptions">
                <input type="file" id="file" style={{ display: 'none' }} />
                <label htmlFor="file">
                    <img src={'./attach.png'} alt="attach-img" />
                </label>
                <input type="file" id="image" style={{ display: 'none' }} />
                <label htmlFor="image">
                    <img src={'./img.png'} alt="img" />
                </label>
                <button>Send</button>
            </div>
        </div>
    )
}

export default InputMessage

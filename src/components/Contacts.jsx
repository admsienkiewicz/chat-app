import React from 'react'
import SingleContact from './SingleContact'
import './Contacts.scss'

function Contacts() {
    return (
        <div className="Contacts">
            <SingleContact />
            <SingleContact />
            <SingleContact />
            <SingleContact />
        </div>
    )
}

export default Contacts

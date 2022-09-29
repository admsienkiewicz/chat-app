import React from 'react'
import Contacts from './Contacts'
import Navbar from './Navbar'
import SearchContact from './SearchContact'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            <Navbar />
            <SearchContact />
            <Contacts />
        </div>
    )
}

export default Sidebar

import React from 'react'
import './SearchContact.scss'

const SearchContact = () => {
    return (
        <div className="searchContact">
            <form>
                <input type="text" placeholder="Search username" />
                <button>Search</button>
            </form>
        </div>
    )
}

export default SearchContact

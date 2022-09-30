import React, { useState } from 'react'
import './SearchContact.scss'
import SingleContact from './SingleContact'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

const SearchContact = () => {
    const [username, setUsername] = useState('')
    const [searchResult, setSearchResult] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (username === '') {
            setSearchResult(null)
            return
        }
        const q = query(collection(db, 'users'), where('displayName', '==', username))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            setSearchResult(doc.data())
        })
    }
    return (
        <div className="searchContact">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search username" onChange={(e) => setUsername(e.target.value)} />
                <button>Search</button>
            </form>
            {searchResult && <SingleContact photoURL={searchResult.photoURL} contactName={searchResult.displayName} />}
        </div>
    )
}

export default SearchContact

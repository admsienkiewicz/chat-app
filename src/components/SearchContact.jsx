import React, { useContext, useState } from 'react'
import './SearchContact.scss'
import SingleContact from './SingleContact'
import { collection, query, where, getDoc, getDocs, setDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { AuthContext } from '../context/AuthCotntext'

const SearchContact = () => {
    const [username, setUsername] = useState('')
    const [searchResult, setSearchResult] = useState(null)

    const { currUser } = useContext(AuthContext)

    const handleClick = async () => {
        const combinedId =
            currUser.uid > searchResult.uid ? currUser.uid + searchResult.uid : searchResult.uid + currUser.uid
        try {
            const resp = await getDoc(doc(db, 'chats', combinedId))
            if (!resp.exists()) {
                await setDoc(doc(db, 'chats', combinedId), { messages: [] })
                await updateDoc(doc(db, 'userChats', currUser.uid), {
                    [combinedId + '.userInfo']: {
                        uid: searchResult.uid,
                        displayName: searchResult.displayName,
                        photoURL: searchResult.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                })
                await updateDoc(doc(db, 'userChats', searchResult.uid), {
                    [combinedId + '.userInfo']: {
                        uid: currUser.uid,
                        displayName: currUser.displayName,
                        photoURL: currUser.photoURL,
                    },
                    [combinedId + '.date']: serverTimestamp(),
                })
            }
        } catch (err) {
            console.log(err)
        }
        setSearchResult(null)
        setUsername('')
    }

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
                <input
                    type="text"
                    placeholder="Search username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />
                <button>Search</button>
            </form>
            {searchResult && (
                <div onClick={handleClick}>
                    <SingleContact photoURL={searchResult.photoURL} contactName={searchResult.displayName} />
                </div>
            )}
        </div>
    )
}

export default SearchContact

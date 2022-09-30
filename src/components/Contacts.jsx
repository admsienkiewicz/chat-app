import React, { useContext, useEffect, useState } from 'react'
import SingleContact from './SingleContact'
import './Contacts.scss'
import { doc, onSnapshot } from 'firebase/firestore'
import { AuthContext } from '../context/AuthCotntext'
import { db } from '../firebase'
import { ChatContext } from '../context/ChatContext'

function Contacts() {
    const { currUser } = useContext(AuthContext)
    const { dispatch } = useContext(ChatContext)
    const [contacts, setContacts] = useState({})

    const handleSelect = (userInfo) => {
        console.log(userInfo)
        dispatch({ type: 'CHANGE_USER', payload: userInfo })
    }

    useEffect(() => {
        const getChats = () => {
            const unsub = onSnapshot(doc(db, 'userChats', currUser.uid), (doc) => {
                setContacts(doc.data())
            })
            return () => {
                unsub()
            }
        }

        currUser.uid && getChats()
    }, [currUser.uid])
    return (
        <div className="Contacts">
            {contacts &&
                Object.entries(contacts)?.map((contact) => {
                    return (
                        <div key={contact[0]} onClick={() => handleSelect(contact[1].userInfo)}>
                            <SingleContact
                                contactName={contact[1].userInfo.displayName}
                                photoURL={contact[1].userInfo.photoURL}
                                lastMessage={contact[1].lastMessage?.text}
                            />
                        </div>
                    )
                })}
        </div>
    )
}

export default Contacts

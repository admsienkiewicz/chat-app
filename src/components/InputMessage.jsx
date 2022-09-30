import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthCotntext'
import { ChatContext } from '../context/ChatContext'
import './InputMessage.scss'
import { doc, updateDoc, arrayUnion, arrayRemove, Timestamp } from 'firebase/firestore'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { v4 as uuid } from 'uuid'
import { db, storage } from '../firebase'

const InputMessage = () => {
    const [text, setText] = useState('')
    const [img, setImg] = useState(null)
    const { currUser } = useContext(AuthContext)
    const { data } = useContext(ChatContext)

    const handleSend = async () => {
        if (img) {
            const storageRef = ref(storage, uuid())
            const uploadTask = await uploadBytesResumable(storageRef, img)
            const downloadURL = await getDownloadURL(uploadTask.ref)
            await updateDoc(doc(db, 'chats', data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    img: downloadURL,
                    senderId: currUser.uid,
                    date: Timestamp.now(),
                }),
            })
        } else {
            await updateDoc(doc(db, 'chats', data.chatId), {
                messages: arrayUnion({
                    id: uuid(),
                    text,
                    senderId: currUser.uid,
                    date: Timestamp.now(),
                }),
            })
        }
        setImg(null)
        setText('')
    }
    return (
        <div className="InputMessage">
            <input type="text" placeholder="Type something..." onChange={(e) => setText(e.target.value)} value={text} />
            <div className="inputOptions">
                <input type="file" id="image" style={{ display: 'none' }} onChange={(e) => setImg(e.target.files[0])} />
                <label htmlFor="image">
                    <img src={'./img.png'} alt="img" />
                </label>
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
    )
}

export default InputMessage

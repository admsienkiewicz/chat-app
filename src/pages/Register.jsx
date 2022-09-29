import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { auth, storage, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const displayName = e.target[0].value
        const email = e.target[1].value
        const password = e.target[2].value
        const file = e.target[3].files[0]

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password)
            const date = new Date().getTime()
            const storageRef = ref(storage, `${displayName + date}`)

            const uploadTask = await uploadBytesResumable(storageRef, file)
            const downloadURL = await getDownloadURL(uploadTask.ref)
            await updateProfile(res.user, {
                displayName,
                photoURL: downloadURL,
            })
            await setDoc(doc(db, 'users', res.user.uid), {
                uid: res.user.uid,
                displayName,
                email,
                photoURL: downloadURL,
            })
            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className="formContainer">
            <span className="logo">Chat APP</span>
            <span className="title">Register</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username" />
                <input type="email" placeholder="Enter email" />
                <input type="password" placeholder="Enter password" />
                <input type="file" id="fileInput" style={{ display: 'none' }} />
                <label htmlFor="fileInput">
                    <img src={'./addAvatar.png'} alt="" />
                    <span>Select your avatar</span>
                </label>
                <button>Register</button>
            </form>
            <p>
                Already have an account? <Link to={'/login'}>Login now</Link>
            </p>
        </div>
    )
}

export default Register

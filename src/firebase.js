import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_AUTH_DOMAIN,
    messagingSenderId: process.env.REACT_APP_AUTH_DOMAIN,
    appId: process.env.REACT_APP_AUTH_DOMAIN,
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()

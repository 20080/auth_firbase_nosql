import firebase from 'firebase/app'
import "firebase/auth"

const app =firebase.initializeApp({
    apiKey: "AIzaSyDHT1RSlz9AZENF3VieKxnpB2ep5EsbW0Y",
    authDomain: "exprimentsonbackend.firebaseapp.com",
    projectId: "exprimentsonbackend",
    storageBucket: "exprimentsonbackend.appspot.com",
    messagingSenderId: "913599222640",
    appId: "1:913599222640:web:8ed18fcf311949f7c2b5b5"
})

export const auth = app.auth()
export default app
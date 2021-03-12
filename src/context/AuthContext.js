import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../firebase";
const AuthContext = createContext()

const useAuth =  () =>{
    return useContext(AuthContext)
}

const AuthProvider = ({children})=>{

    const [currentUser,setCurrentUser] = useState()
    const [loading,setLoading] =useState(true)

    useEffect(()=>{
    return auth.onAuthStateChanged(user=>{
        setCurrentUser(user)
        setLoading( false)
    })
    },[])


    function login(email,password){
        return auth.signInWithEmailAndPassword(email,password);
    }

    const value = {currentUser,login,loading}
    return (
        //.provider is added additionally not suggested by the ide
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export {useAuth,AuthProvider}
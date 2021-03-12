import {useEffect, useRef, useState} from "react";
import {useAuth} from "../context/AuthContext";
import {useHistory} from "react-router-dom"
const LoginUsername = ()=>{
    const {login,currentUser} = useAuth()
    const [name,setName] = useState()
    useEffect(()=>{
        setName(currentUser.email)
    },[])

    const emailRef = useRef()
    const passwordRef = useRef()
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const history = useHistory()
    async function onClickSubmit(e){
        e.preventDefault()
        // if(passwordRef.current.value!==passwordConfirmRef.current.value){
        //     return setError('Password Do Not Match')
        // }
        try {
            setError('')
            setLoading(true)
            console.log("trying")
            await login(emailRef.current.value,passwordRef.current.value)
            console.log("DID it")
          await setName(currentUser)
        }
        catch {
            setError("Failed to Sign In")
            console.log(e)
        }

        setLoading(false)


    }
    return (
        <div className={'FromCenter'} >
            <form onSubmit={onClickSubmit} >
                <label>Email</label>
                <input type={'email'} ref={emailRef} />
                <label>Password</label>
                <input type={'password'} ref={passwordRef}/>
                <button disabled={loading}>Login In</button>
                <br/> <br/>
                <label>{name}</label>
                <br/> <br/>
                <label>{error}</label>
            </form>
        </div>
    )
}

export default LoginUsername
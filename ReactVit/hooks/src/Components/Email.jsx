import { useState } from "react"

export default function Email(){
 let [email,setEmail]=useState("purva@gmail.com")
 let [password,setPass]=useState()
 const mail=(event)=>{
 setEmail(event.target.value)
 }
    return(
        <>
        Email: <input className="input border-dark text-dark bg-light" value={email} onChange={mail}/>
        <h2>{email}</h2>
        Password: <input className="input border-dark text-dark bg-light" value={password} type="text" onChange={(e)=>{
            setPass(e.target.value)
        }}/>
        <h2>{password}</h2>
        </>
    )
}
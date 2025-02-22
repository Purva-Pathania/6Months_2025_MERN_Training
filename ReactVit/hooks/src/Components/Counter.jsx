import { useState } from "react"

export default function Counter(){
    var [x,setX]=useState(0)
    const inc=()=>{
        setX(x+1)
    }
    const dec=()=>{
        setX(x-1)
    }
    return(
        <>
        <h1> value of x is {x}</h1>
        <button className="btn btn-outline-dark" onClick={inc}>++</button>
        <button className="btn btn-outline-dark" onClick={dec}>--</button>
        </>
    )
}
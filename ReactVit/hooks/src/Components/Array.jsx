import { useState } from "react"

export default function Array(){
    let [arr,setArr]=useState([])
    const AddToDo=()=>{
        let y = prompt("Enter to-do");
        if(y.trim()){
           setArr([...arr,y])
        }
    }
    return(
        <>
        <button className="btn btn-outline-dark" onClick={AddToDo}>Start</button>
        <ul>
            {arr?.map((el,index)=>
            <li key={index}>{el}</li>
            )}
        </ul>
        </>
    )
}
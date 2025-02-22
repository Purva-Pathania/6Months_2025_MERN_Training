import { useState } from "react"

export default function ToDoList(){
    let [todo,setToDo]=useState([])
    const getToDo=()=>{
        let x = document.getElementById("ip1").value
        if(x.trim()){
            setToDo([...todo,x])
        }
        document.getElementById("ip1").value=""
    }
    return(
        <>
        Enter : <input className="input bg-light text-dark" id="ip1" placeholder="Enter To-Do"/> <button className="btn btn-outline-dark" onClick={getToDo}>Add</button>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>To-Do Data</th>
                </tr>
            </thead>
            <tbody>
                {todo?.map((el,index)=>(
                <>
                <tr key={index}>
                    <td>{index+1}</td>
                    <td>{el}</td>
                </tr>
                </>
                ))}
            </tbody>
        </table>
        </>
    )
}
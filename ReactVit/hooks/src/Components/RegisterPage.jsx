import { useState } from "react"

export default function RegisterPage(){
    const handleSubmit=(event)=>{
        alert("Form Submitted Successfully!!!")
    }
    let [name,setName]=useState()
    const getName=(event)=>{
        setName(event.target.value)
    }
    let [email,setEmail]=useState()
    let [password,setPass]=useState()
    let [gender,setGender]=useState()
    const changeGender=(event)=>{
        setGender(event.target.value)
    }
    let [select,setSelect]=useState()
    const getState=(event)=>{
        setSelect(event.target.value)
    }
    let [terms,setTerm]=useState()
    return(
        <>
        <form onSubmit={handleSubmit}>
        Name: <input className="input bg-light text-dark" type="text" onChange={getName} required/>
        <h5>Name is {name}</h5>
        Email: <input onChange={(e)=>{setEmail(e.target.value)}} className="input bg-light text-dark " type="text" required/>
        <h5>Email is {email}</h5>
        Password: <input type="text" onChange={(e)=>{setPass(e.target.value)}} className="input bg-light text-dark" required/>
        <h5>Password is {password}</h5>
        Male<input className="form-check-input border-dark" type="radio" name="gender" onChange={changeGender} value="Male"/> Female<input type="radio"  className="form-check-input border-dark" name="gender" onChange={changeGender} value="Female"/> Others<input type="radio"  className="form-check-input border-dark" name="gender" onChange={changeGender} value="Others" />
        <h5>Selected Gender is {gender}</h5>
        State: <select onChange={getState} className="input bg-light text-dark">
            <option  value="">--Select--</option>
            <option value="Punjab">Punjab</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Delhi">Delhi</option>
            </select>
        <h5>Selected State is {select}</h5>
        <input type="checkbox" className="form-check-input border-dark " onChange={(e)=>{setTerm(e.target.checked)}} required/>Terms & Conditions {terms?"Accepted":"Not Accepted"}<br/>
        <button className="btn btn-outline-dark">Submit</button>
        </form>
        </>
    )
}
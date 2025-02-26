import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import PageTitle from '../Admin/Layouts/PageTitle'

export default function Login(){
  let [email,setEmail]=useState()
  const changeEmail=(event)=>{
    setEmail(event.target.value)
  }
  let [password,setPassword]=useState()
  const changePassword=(event)=>{
    setPassword(event.target.value)
  }
  const [load,setLoad]=useState(false)
  const nav = useNavigate()
  const submitForm=(e)=>{
    e.preventDefault()
    setLoad(true)
    if(email=="admin@skillhunt.com" && password=="admin"){
      toast.success("Login Successfully!")
      nav("/")
    }else if(email=="purva@gmail.com" && password=="123"){
      toast.success("Login Successfully!")
      nav("/freelancer/index")
    }
    else if(email=="client@gmail.com" && password=="2025"){
      toast.success("Login Successfully!")
      nav("/client/index")
    }else{
      toast.error("Login Failed!")
    }
    setTimeout(()=>{
      setLoad(false)
      setEmail("")
      setPassword("")
    },1500)
  }
    return(
        <>
        <main className="main">
          <PageTitle>Login</PageTitle>
          <br/>
          <PulseLoader color="skyblue" loading={load}/>
        <form onSubmit={submitForm}>
                <div className={`row g-3 justify-content-center ${load=="true" && "d-none"}`}>
                  <div className="col-md-5">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Email"
                        value={email}
                        onChange={changeEmail}
                      />
                      <label htmlFor="subject">Email</label>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="row g-3 justify-content-center">
                  <div className="col-md-5">
                    <div className="form-floating">
                      <input
                        className="form-control"
                        placeholder="Leave Link message here"
                        id="password"
                        type="text"
                        value={password}
                        onChange={changePassword}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                </div>
                <br/>
                <div className="row g-3 justify-content-center">
                  <div className="col-md-2">
                    <button className="btn btn-primary w-100 py-3">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <br/>
              </main>
            </>
    )
}
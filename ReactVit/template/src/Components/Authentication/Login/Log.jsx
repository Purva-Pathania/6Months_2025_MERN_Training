import React, { useEffect, useState } from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const Log = () => {
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
      nav("../freelancer/index")
    }
    else if(email=="client@gmail.com" && password=="2025"){
      toast.success("Login Successfully!")
      nav("../client/index")
    }else{
      toast.error("Login Failed!")
    }
    setTimeout(()=>{
      setLoad(false)
      setEmail("")
      setPassword("")
    },1500)
  }
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const randomDelay = Math.random()*1000;
    setTimeout(() => {
      setFlipped(true); // Flip effect will happen automatically when the page loads
    }, randomDelay); // Add delay for a better visual effect
  }, []);

  return (
    <>
    <div className="login-container">
      <PulseLoader color="skyblue" loading={load}/>
      <div className={`login-box ${flipped ? "flipped" : ""} ${load==true && "d-none"}`}>
        <div className="login-icon">
          <i className="bi bi-box-arrow-in-right"></i>
        </div>
        <h2>LOGIN</h2>
        
        <form onSubmit={submitForm}>
          <div className="form-floating">
            <input type="email" className="form-control" id="subject" placeholder="Email" required value={email} onChange={changeEmail}/>
            <label htmlFor="subject">Email</label>
          </div>
          <br/>
          <div className="form-floating">
            <input type="password" className="form-control" id="password" placeholder="Password" value={password} onChange={changePassword} required />
            <label htmlFor="password">Password</label>
          </div>
          <div className="forgot-section">
            <a href="#">Forgot password?</a>
          </div>
          <button className="b1" type="submit">Get Started</button>
        </form>

        <p className="or-text">Or sign in with</p>
        <div className="social-login">
          <button className="social-btn"><i className="fab fa-google"></i></button>
          <button className="social-btn"><i className="fab fa-facebook"></i></button>
          <button className="social-btn"><i className="fab fa-apple"></i></button>
        </div>
      </div>
    </div>
    </>
  );
 }
 export default Log;
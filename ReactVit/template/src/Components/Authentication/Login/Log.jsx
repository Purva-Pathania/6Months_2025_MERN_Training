import React from "react";
import "./styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import { motion } from "framer-motion";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Log(){
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
    }else if(email=="simran@gmail.com" && password=="123"){
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
      
    },1500)}
  return (
    <div className="b2">
    <motion.div 
    initial={{rotateY:180,opacity:0}}
    animate={{rotateY:0,opacity:1}}
    transition={{duration:2.0}}
    className="login-container" id="bord">
      <div className="loader-wrapper">
      <PulseLoader color="rgba(0,123,255,0.8)" loading={load}></PulseLoader></div>
      <div className={`login-box ${load==true && "d-none"}`}>
        <div className="login-icon"><i className="bi bi-box-arrow-in-right"></i></div>
        <h2>Sign in with email</h2>

        <form onSubmit={submitForm}>
          <div className="form-floating">
          <input type="email" className="form-control" id="subject"  placeholder="Email" onChange={changeEmail} value={email} required />
          <label htmlFor="subject">Email</label>
          </div>
          <div className="form-floating">
          <input type="password" className="form-control" id="password" placeholder="Password" onChange={changePassword} value={password} required />
          <label htmlFor="password">Password</label>
          </div>
          <div className="forgot-section">
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="b1">Login</button>
        </form>

        <p className="or-text">Or sign in with</p>

        <div className="social-login">
          <button className="social-btn"><i className="fab fa-google"></i></button>
          <button className="social-btn"><i className="fab fa-facebook"></i></button>
          <button className="social-btn"><i className="fab fa-apple"></i></button>
        </div>
      </div>
    </motion.div>
    </div>
   
  );
};


import React, { useState } from 'react';
import "../components/SIGNUP.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



export const SIGNUP = () => {
  const [click,setclick] =useState("SIGN UP");
    return(
      <>
         <Navbar />
       
    <div className='Container'>
      <div className='Header'>
        <div className='text'>{click}</div>
        <div className='underline'></div>
      </div>
      <div className='Info'>
        {click === "LOGIN" ?<div></div> :<div className='input'>
      <i class="fa-solid fa-user"></i>
      <input type ="text" placeholder='Name' />
      </div>}
      
      <div className='input'>
      <i class="fa-solid fa-envelope"></i>
      <input type ="email" placeholder='Email'/>
      </div>
      <div className='input'>
      <i class="fa-solid fa-lock"></i>
      <input type ="password" placeholder='Password'/>
      </div>
    </div>
    {click === "SIGN UP" ?<div></div> :<div className='Findpassword'>Fogot Password?<span>Click Here</span></div>}
    
    <div className='Submitdata'>
    <div className={click ==="LOGIN" ? "Submit gray" : "Submit"} onClick={() =>{setclick("SIGN UP")}}>SIGN UP</div>
      <div className={click ==="SIGN UP" ? "Submit gray" : "Submit"}onClick={() =>{setclick("LOGIN")}}>LOGIN</div>
    </div>
    </div>
    
    <Footer />
      </>
  )
  
}
export default SIGNUP;
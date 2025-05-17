import React, { useState } from 'react'
import validator from 'validator';

export default function App() {
     
  const [errorMsg,SetErrorMsg]=useState('');

  const validate=(value)=>{
      if(validator.isStrongPassword(value,{
         minLength:8, minLowercase:1,
         minUppercase:1,minNumbers:1,
         minSymbols:1
      })){
         SetErrorMsg("is strong password");
      }else{
         SetErrorMsg('is not strong password')
      }
  }

  return (
    <div style={{
       marginLeft:'200px',
       
    }}>
          <h2>Checking Password Strength in ReactJs</h2>
          <span>
            Enter Password: 
          </span> 
          <input
             type='text'
             onChange={(e)=>{
               validate(e.target.value)
             }}
          />
          <br />
          {
             errorMsg===""?<span style={{ color:"blue" }}>Please enter your password</span>:<span style={{
               fontWeight:'bold',
               color:'red'
             }}>{errorMsg}</span>
          }
    </div>
  )
}

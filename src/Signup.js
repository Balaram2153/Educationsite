import React from "react";
import './Signup.css'
import axios from "axios";
import { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'




export default function Signup(){
  const[firstname,setfirstname]=useState('');
  const[lastname,setlastname]=useState('');
  const[email,setemail]=useState('');
  const[mobilenumber,setmobilenumber]=useState('');
  const[address,setaddress]=useState('');
  const[role,setrole]=useState('');
  const[password,setpassword]=useState('');

  const onsubmit=async()=>{
  
  const data={
     firstname,
     lastname,
     mobilenumber,
     email,
     address,
     password,
     role,
    }
    try{
      const response= await axios.post("http://localhost:8087/api/education",data);
      setfirstname('');
      setlastname('');
      setemail('');
      setmobilenumber('');
      setaddress('');
      setrole('');
      setpassword('');
      alert("registration successful")
  }
  catch{
    console.log("error occured");
}
}

const handleSubmit = (event) => {
  event.preventDefault();
  const errors = validate();
  if(Object.keys(errors).length === 0) {
      alert("Done");
  }
}

const validate = () => {
  const error = {};

  if(!firstname) {
      error.firstname = "firstname is required";
  } else if (firstname.length === 10) {
      error.firstname = "firstname not matched";
  } else {
      error.firstname = " ";
  }

  if(!lastname) {
      error.lastname = "Lastname is required";
  } else if(lastname.length === 9) {
      error.lastname = "Lastname not matched";
  } else {
      error.lastname = " ";
  }

  if(!mobilenumber) {
      error.mobilenumber = "mobilenumber is required";
  } else if(mobilenumber.length !== 10) {
      error.lastname = "mobilenumber not matched";
  } else {
      error.mobilenumber = " ";
  }

  if(!email) {
      error.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
      error.email = "Email not matched";
  } else {
      error.email = " ";
  }

  if(!password) {
      error.password = "Password is required";
  } else if(password.length < 9) {
      error.password = "Password not matched";
  } else {
      error.password = " ";
  }

  return error;
}

    return(   
      <>
      <div className="d-flex flex-row justify-content-center signupcontainer">
        <div className="signin">
          <h1>signup</h1>
        <div className="signintable">
          <form onSubmit={handleSubmit}> 
          <table>
            <tr>Firstname</tr>
            <tr><input style={{width:"400px"}} id="firstname" type="text" value={firstname} onChange={(e)=>setfirstname(e.target.value)} placeholder="Enter your First Name" required/></tr>
            <tr>LAst name</tr>
            <tr><input style={{width:"400px"}} id="lastname" type="text" value={lastname} onChange={(e)=>setlastname(e.target.value)} placeholder="Enter your Last Name" required/></tr>
            <tr>mobilenumber</tr>
            <tr><input style={{width:"400px"}} id="mobilenumber" type="Number"  value={mobilenumber} onChange={(e)=>setmobilenumber(e.target.value)}  placeholder="Enter your Mobile Number" required/></tr>
            <tr>email</tr>
            <tr><input style={{width:"400px"}} id="email" type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Enter your email" required></input></tr>
            <tr>Address</tr>
            <tr><input style={{width:"400px"}} id="address" type="text" value={address} onChange={(e)=>setaddress(e.target.value)} placeholder="Enter your full address"/></tr>
            <tr>password</tr>
            <tr><input style={{width:"400px"}} id="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder="must be same as the password created"/></tr>
            <tr>Role</tr>
            <tr><input style={{width:"400px"}} id="role" type="text" value={role} onChange={(e)=>setrole(e.target.value)} placeholder="Enter your role" required/></tr>
          </table>
          
          <button className="signupbutton"  onClick={onsubmit}>Signup</button>
          
          <hr/>
          <div>         
             <a href="https://myaccount.google.com/"><img style={{height:"30px",width:"30px"}} src="googlesignup.png"/></a>
             <p>Signup with google</p>
          </div>
          </form>
          <p>I accept Coursera's Terms of Use and Privacy Notice.<br/>
          <a href="#">Terms and conditions.</a>
          <br/> Having trouble logging in?<a href="https://www.anarghyacommunications.com/">Learner help center</a></p>
        </div>
        </div>
      </div>

      </>

    );
}

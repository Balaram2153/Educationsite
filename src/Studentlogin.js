import React from "react";
import './Studentlogin.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import {Link} from 'react-router-dom';

function loginvalidate(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");

    if(username.value===0){
        alert("Enter the username")
    }
    else if(username.value.lenght<5){
        alert("Need to have more than 5 chars")
    }
    else if(email.value===0){
        alert("Enter the valid email")
    }
    else if(password.value===0){
        alert("Enter the correct password")
    }
}

export default function Login(){
    return(       
        <>              
            <div className="d-flex flex-row justify-content-center Loginbg">
            <div className="logincontainer">
                <div className="logo">
                    <img style={{height:"50px",Width:"50px",paddingBottom:"5px"}} src="loginlogo.png" alt="img"></img>
                </div>
                <p style={{textAlign:'center'}}>Student Login.</p>
                <table>
                    <tr><td>UserName</td>
                    <td><input type="text" id="username" required></input></td></tr>
                    <tr><td>E mail</td>
                    <td><input type="email" id="email" required/></td></tr>
                    <tr><td>Password</td>
                    <td><input type="password" id="password" required></input></td></tr>
                    <Link to="/Courses"><button className="btn btn-success" onClick={loginvalidate}>Login</button></Link>
                </table>                      
                <p>Please Note: By continuing and signing in, you agree to Anarghya's Terms & Conditions and Privacy Policy.</p>
                <p><Link to="/Forgotpassword">Forgot password</Link></p>
                <p>Don't have an account<Link to="/Signup">signup</Link></p>
             </div>
             </div>
        </>
    );
}
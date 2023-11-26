import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './Employeelogin.css'
import { Link} from "react-router-dom";
import Employerhome from "./Employerhome.js";





export default function Login(){

    /*function Handleclick(){
        window.open("./Employerhome")
    
    };
    function Onlogin(){

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
    
    }*/

    return(       
        <>              
            <div className="d-flex flex-row justify-content-center Loginbg1">
            <div className="logincontainer1">
                <div className="logo1">
                    <img style={{height:"50px",Width:"50px",paddingBottom:"5px"}} src="loginlogo.png" alt="mmmmm"></img>
                </div>
                <p style={{textAlign:'center'}}>Employer Login.</p>
                <table>
                    <tr><td>UserName</td>
                    <td><input type="text" id="Employee Username" required></input></td></tr>
                    <tr><td>E mail</td>
                    <td><input type="email" id="email" required/></td></tr>
                    <tr><td>Password</td>
                    <td><input type="password" id="password" required></input></td></tr>
                <Link to={"/Employerhome"}><button className="btn btn-success">Login</button></Link>
                </table>                      
                <p>Please Note: By continuing and signing in, you agree to Anarghya's Terms & Conditions and Privacy Policy.</p>
                <p><Link to="/Employeelogin">Forgot password</Link></p>
                <p>Don't have an account<Link to="/Signup">signup</Link></p>
             </div>
             </div>
        </>
    );
}
import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import './Menubar.css';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

export default function Menubar(){
    return(
        <>
       
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="navcontainer container-fluid">
                    <Link to="/"><img className="comlogo" src="companylogo.jpeg"/></Link>
                    <p style={{paddingLeft:"200px"}}>Learn in your way.</p>
                    <div className="menubar d-flex ms-auto order-5" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/"><b>Home</b></Link>
                        </li>
                      
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/Login"><b>Login</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/Signup"><b>Signup</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/Aboutus"><b>Aboutus</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/Contactus"><b>Contactus</b></Link>
                        </li>
                        <li className="nav-item">
                        <Link style={{textDecoration:'none'}} to="/Profile"><b>Profile</b></Link>
                        </li>
                       
                        
                        </ul>
                       
                    </div>
                </div>
                </nav>

     
            
        </>
        
    );
}
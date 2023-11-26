import React from "react";
import './Footer.css'
export default function Footer(){
    return(
        <>
            <div className="header">
                <div class="david">
                    <h1><u>Categories</u></h1><br />
                    <a href="">Clound Computing</a>
                    <a href="">DevOps</a>
                    <a href="">Cyber Security</a>
                    <a href="">Data Science</a>
                    <a href="">Programming & Frame work</a><br />
                    <a href="">Project Managment</a>
                    <a href="">Executive Programmes</a>
                    <a href="">Sofware Testing</a>
                    <a href="">Big Data</a>
                    <a href="">Artificial Intelligence</a>
                    <a href="">Frontend Development</a><br />
                    <a href="">Data Base</a>
                    <a href="">Robotic process Automation</a>
                    <a href="">Data Warehousing</a>
                    <a href="">Digital Marketing</a>
                    <a href="">Operating Systems</a>
                    <a href="">Mobile Development</a><br />
                    <a href="">Architecture & design </a>
                    <a href="">Block chain</a>
                </div>
            </div>
                <div className="footer">
                    <div class="container">
                        <div class="sec aboutus">
                            <h2>About us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Numquam officiis earum 
                                aliquid deleniti nobis quam cumque deserunt ipsa rerum et.</p>
                                <ul class="sci">
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                    <li><a href="#"></a></li>
                                </ul>
                        </div>
                        <div class="sec quicklinks">
                            <h2>Quicklinks</h2>
                            <ul>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div class="sec quicklinks">
                            <h2>Support</h2>
                            <ul>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">Privacy Policy</a></li>
                                <li><a href="">Help</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                        <div class="sec cont">
                            <h2>Contact us</h2>
                            <ul class="info">
                                <li>
                                    <span><i class="fa-solid fa-phone"></i></span><p><a href="tel:+919876543210">+91 987 654 3210</a></p>
                                </li>
                                <li>
                                    <span><i class="fa-solid fa-envelope"></i></span><p><a href="mailto:Anarghya@gmail.com">Know more Email to Anarghya@gmail.com</a></p>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="copyrightText">
                    <p>Copyright 2023 online Tutorial. All Rights Reserved.</p>
                </div>
        </>
    );
}
import React from "react";
import './Contactus.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import axios from "axios";
import { useState } from "react";

export default function Contact (){
    const[name, setname]=useState('');
    const[email, setemail]=useState('');
    const[message, setmessage]=useState('');

    const oncontactus = async ()=>{
      const data={
    
        name,
        message,
        email,
       
      }
      try{
    
      const response =  await axios.post("http://localhost:8085/api/education",data);
      
  
      setname('');
      setemail('');
      setmessage('');
      
      }
      catch (error){
            console.log("error occured",error);
      }
    }


    return(
        <section class="contact">
        <div class="contactcontainer">
            <h2>Contact Us</h2>  
        <div class="contact-wrapper">
            <div class="contact-form">
                <h3>Send us a message</h3>
                <form onSubmit={oncontactus}>
                    <div class="form-group">
                        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder="name" required></input>
                    </div>
                    <div class="form-group">
                        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Your Email" required/>
                    </div>
                    <div class="form-group">
                        <textarea value={message} onChange={(e)=>setmessage(e.target.value)} placeholder="Your Message" required></textarea> 
                    </div>
                  <button onClick={oncontactus}> Send </button>  
                </form>
            </div>
            <div class="contact-info">
                <h3>contact information</h3>
                <p><i class="fas fa-phone"></i>+91 040 6793 2204</p>
                <p> <i class="fas fa-envelope"></i>info@anarghyacomm.in</p>
                <p> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.266681017479!2d78.38360607492065!3d17.446945501087136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb910d8d1c4f8b%3A0x6ef1b184af90fa3f!2sCapital%20Park!5e0!3m2!1sen!2sin!4v1696498230074!5m2!1sen!2sin" width="250" height="150"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe><br/><a href="https://www.google.com/maps/place/Capital+Park/@17.44694,78.386181,15z/data=!4m6!3m5!1s0x3bcb910d8d1c4f8b:0x6ef1b184af90fa3f!8m2!3d17.4469404!4d78.386181!16s%2Fg%2F11qh7h0l0z?hl=en&entry=ttu"><i class="fas fa-map-marker-alt"></i></a>Regus SL Jubilee, Rd No.36, Jubilee Hills,<br/>Hyderabad,Telanagana-500033.</p>
            </div>
        </div>
        </div>
    </section> 
    );

}

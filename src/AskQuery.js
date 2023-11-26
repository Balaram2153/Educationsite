import React from "react";
import { useState } from "react";
import axios from "axios";

export default function AskQuery(){
    const[Query,setQuery]=useState('');

    const onsubmit=async()=>{
    
    const data={
       Query,

      }
      try{
        const response= await axios.post("http://localhost:8087/api/education",data);
        setQuery('');

        alert("registration successful")
    }
    catch{
      console.log("error occured");
  }
}
    return(
        <>
        <div style={{margin:"30px",padding:"50px"}}>
            <h1>Ask Your doubt here</h1>
            <div style={{margin:"20px",padding:"50px"}}>
                <textarea height="2000px" width="900px" value={Query} onChange={(e)=>setQuery(e.target.value)} placeholder="Enter you query"></textarea>
                <button>SUBMIT</button>
            </div>
        </div>

        </>
    );
}
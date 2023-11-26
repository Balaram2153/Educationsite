import React from "react";
import Menubar from "./Menubar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Courses from "./Courses";
import Profile from "./Profile";
import Contactus from "./Contactus";
import Preschool from "./Preschool";
import Footer from "./Footer";
import Fullstackcourse from "./Fullstackcourse";
import Studentlogin from "./Studentlogin";
import Employeelogin from "./Employeelogin"
import Forgotpassword from "./Forgotpassword";
import Aboutus from "./Aboutus";
import Employerhome from "./Employerhome";
import Studentprofile from "./Studentprofile";
import Jobposting from "./Jobposting";
import AskQuery from "./AskQuery";
import Jobposts from "./Jobposts";
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';

export default function App(){
    return(
        <BrowserRouter>
            <Menubar></Menubar>
            
            <Routes>
                    <Route path='/Courses' element={<Courses/>}/>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Signup' element={<Signup/>}/>
                    <Route path='/Profile' element={<Profile/>}/>
                    <Route path='/Contactus' element={<Contactus/>}/>
                    <Route path="/preschool" element={<Preschool/>}/>
                    <Route path="Fullstackcourse" element={<Fullstackcourse/>}/>
                    <Route path="/Studentlogin" element={<Studentlogin/>}/>
                    <Route path="/Employeelogin" element={<Employeelogin/>}/>
                    <Route path="/Forgotpassword" element={<Forgotpassword/>}/>
                    <Route path="/Aboutus" element={<Aboutus/>}/>
                    <Route path="/Employerhome" element={<Employerhome/>}/>
                    <Route path="/Studentprofile" element={<Studentprofile/>}/>
                    <Route path="/Jobposting" element={<Jobposting/>}/>
                    <Route path="/AskQuery" element={<AskQuery/>}/>   
                    <Route path="/Jobposts" element={<Jobposts/>}/>
             </Routes>
                <Footer/>
        </BrowserRouter>
    
    );
}
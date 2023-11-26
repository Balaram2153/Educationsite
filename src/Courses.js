import React from "react";
import './Courses.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { Link } from "react-router-dom";

export default function Courses(){
    return(
        <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <div className="dropdown"> 
                        <button class="dropbtn">Design</button>
                            <div class="dropdown-content">
                                <a href="#">Architecture</a>
                                <a href="#">design for health care</a>
                                <a href="#">design for sustainability</a>
                            </div>
                        </div>                       
                        </li>
                        <li className="nav-item">
                        <div className="dropdown">                      
                        <button class="dropbtn">IT and Software</button>
                            <div class="dropdown-content">
                                <a href="#">AI</a>
                                <a href="#">Web development</a>
                                <a href="#">Cloud</a>
                                <a href="#">Machine Learning</a>
                                <a href="#">Web development</a>

                            </div>
                        </div>
                        </li>
                        <li className="nav-item">
                        <Link style={{textDecoration:'none',color:'black'}} to='/preschool'>
                            <div class="dropdown">
                            <button class="dropbtn">school</button>
                            <div class="dropdown-content">
                                <a href="#">Primary School</a>
                                <a href="#">Secondary School</a>
                                <a href="#">Advanced concepts</a>
                            </div>
                            </div>
                        </Link>
                        </li>
                        <li className="nav-item">
                            <div className="dropdown"> 
                            <button class="dropbtn">Finance</button>
                            <div class="dropdown-content">
                                <a href="#">Personal Finance</a>
                                <a href="#">Public Finance</a>
                                <a href="#">Private Finance</a>
                            </div>
                            </div>
                        </li>
                        <li className="nav-item">
                        <div className="dropdown"> 
                        <button class="dropbtn">Marketing</button>
                            <div class="dropdown-content">
                                <a href="#">E Marketing</a>
                                <a href="#">Real Estate Marketing</a>
                                <a href="#">Digital Marketing</a>
                            </div> 
                        </div>                       
                        </li>
                        <li className="nav-item">
                        <div className="dropdown"> 
                        <button class="dropbtn">Business</button>
                            <div class="dropdown-content">
                                <a href="#">MBA</a>
                                <a href="#">Agri Business</a>
                                <a href="#">Construction Business</a>
                            </div>
                        </div>                       
                        </li>
                        <li style={{paddingLeft:"400px"}}>
                        <div className="dropdown"> 
                        <Link to={"/Jobposts"}><button class="dropbtn">JOB POSTS</button></Link>
                            
                        </div>                       
                        </li>
                        

                    </ul>
                    </div>
                </div>
                </nav>
        <div className="homecontainer">
                    <h1>Trending Courses</h1>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <div className="trendcourse1">
                            <p>Complete Course on Fullstack Development</p>
                            <button className="btn btn-success"><Link to='/Fullstackcourse'>View Course</Link></button>
                            </div>
                            </div>
                            <div className="carousel-item">
                            <img height={"300px"} src="AI.jpeg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img height={"300px"} src="nodejs.png" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        </div>
                <div>
                    <hr/>
                </div>   
                <div className="homecareers">
                    <h1>Explore careers</h1>
                    <div className="d-flex flex-row">
                    <div>
                        <p>Find your desired careers in a right way.</p>
                        <p>Find your next role</p>
                    </div>
                    <div>
                        <div className="d-flex flex-row justify-content-between">
                        <button>Datascientist</button>
                        <button>Web Developer</button>
                        <button>Data Engineer</button>
                        <button>Prompt Engineer</button>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                        <button>Network Engieer</button>
                        <button>AWS</button>
                        <button>Salesforce</button>
                        <button>AI</button>
                        </div>
                    </div>
                    </div>
                </div> 
                <div className="homecardsrow1">
                    <p>Datascience Courses</p>
                    <div className="homecardsrow1 d-flex flex-row justify-content-between">
                    <div className="card">
                        <img src="php.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to.</p>
                        <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="aws.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="nodejs.png" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to .</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                    <div className="card">
                        <img src="testing.jpeg" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to.</p>
                            <a href="#" className="btn btn-primary">View Course</a>
                        </div>
                    </div>
                </div>
                <div className="homecardsrow2">
                    <div className=" d-flex flex-row justify-content-between">
                    <p>webdevelopment courses</p>
                    <div className="card">
                    <img src="c lang.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to.</p>
                        <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                    </div>
                    <div className="card">
                    <img src="java.png" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to.</p>
                        <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                    </div>
                    <div className="card">
                    <img src="AI.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to.</p>
                        <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                    </div>
                    <div className="card">
                    <img src="gai.jpeg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to.</p>
                        <a href="#" className="btn btn-primary">View Course</a>
                    </div>
                    </div>
                    </div>
                </div>
                <div>
                    <h1>Discover top Categories</h1>
                    <div className="d-flex flex-row justify-content-between">
                        <div className="smallcards"><h1>Cyber Security</h1></div>
                        <div className="smallcards"><h1>Cloud Computing</h1></div>
                        <div className="smallcards"><h1>Machine Learning</h1></div>
                        <div className="smallcards"><h1>Data Science</h1></div>
                        <div className="smallcards"><h1>Devops</h1></div>
                    </div>
                </div>
            </div>
        </div>   
        </>
    );
}
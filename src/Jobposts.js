import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

export default function Jobposts() {
  const [readMore,setReadMore]=useState(false);
  const extraContent=<div>
  </div>
  const linkName=readMore?'Read Less << ':'Read More >> '
  return (
    <>

    <h1 style={{marginTop: "-3%", marginLeft: "40%", fontSize: "2.5rem"}}>Profiles of Our Students</h1>
    <div>
            <nav className="sidebar" style={{marginTop: "-9%"}}>
                <div className="scrollbox">
                    <div className="scrollbox-inner">
                        <p>Full Stack Java</p>
                        <p>Python</p>
                        <p>Devops</p>
                        <p>Front End Developers</p>
                        <p>Back End Developers</p>
                        <p>Cloud Computing</p>
                        <p>Testing</p>
                        <p>AI</p>
                        <p>Auto Cad</p>
                        <p>Automation</p>
                        <p>Research & Development</p>
                        <p>Robotics</p>
                        <p>Troubleshooting</p>
                        <p>Raspberry Pi</p>
                        <p>Computer Architecture</p>
                        <p>PCB Design</p>
                        <p>Arduino</p>
                        <p>Cyber Security</p>
                        <p>Mobile App Development</p>
                        <p>UI/UX Development</p>
                        <p>Data Analytics</p>
                        <p>Database Administration</p>
                        <p>Finace & Accounting</p>
                        <p>HR</p>
                        <p>Business Development</p>
                        <p>Architect</p>
                        <p>Graphics Designer</p>
                        <p>Web Designer</p>
                    </div>
                </div>
            </nav>
        </div>












    <CardGroup style={{display: "flex", marginLeft: "25%"}}>
      <Card>
        <Card.Img variant="top" src="stu1.jpg" style={{width: "80%", height: "40vh", borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Title style={{marginLeft: "20%"}}> Name : Vaishnavi</Card.Title>
          <Card.Text style={{marginLeft: "-30%"}}>
            Course : Full Stack Java
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "17%"}}>View Profile</button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="stu2.jpg" style={{width: "80%", height: "40vh", marginLeft: "-10%", borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Title style={{marginLeft: "15%"}}> Name : Durga Prasad</Card.Title>
          <Card.Text style={{marginLeft: "-25%"}}>
            Course : Finance
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button style={{width: "35%", marginLeft: "20%"}}>View Profile</button>
        </Card.Footer>
      </Card>
      <Card style={{marginLeft: "-10%"}}>
        <Card.Img variant="top" src="stu3.jpg" style={{width: "83%", height: "40vh", marginLeft: "5%",  borderRadius: "2rem"}}/>
        <Card.Body>
          <Card.Title style={{marginLeft: "25%"}} > Name : Divya Sree</Card.Title>
          <Card.Text style={{marginLeft: "-15%"}}>
            Course: Python
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "25%"}}>View Profile</button>
        </Card.Footer>
      </Card>
    </CardGroup>

        <br/> <br/>

        <CardGroup style={{display: "flex", marginLeft: "25%"}}>
        <Card>
        <Card.Img variant="top" src="stu1.jpg" style={{width: "80%", height: "40vh", borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Title style={{marginLeft: "20%"}}> Name : Vaishnavi</Card.Title>
            <Card.Text style={{marginLeft: "-30%"}}>
            Course : Full Stack Java
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "17%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        <Card>
        <Card.Img variant="top" src="stu2.jpg" style={{width: "80%", height: "40vh", marginLeft: "-10%", borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Title style={{marginLeft: "15%"}}> Name : Durga Prasad</Card.Title>
            <Card.Text style={{marginLeft: "-25%"}}>
            Course : Finance
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <button style={{width: "35%", marginLeft: "20%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        <Card style={{marginLeft: "-10%"}}>
        <Card.Img variant="top" src="stu3.jpg" style={{width: "83%", height: "40vh", marginLeft: "5%",  borderRadius: "2rem"}}/>
        <Card.Body>
            <Card.Title style={{marginLeft: "25%"}} > Name : Divya Sree</Card.Title>
            <Card.Text style={{marginLeft: "-15%"}}>
            Course: Python
            </Card.Text>
        </Card.Body>
        <Card.Footer>
        <button style={{width: "35%", marginLeft: "25%"}}>View Profile</button>
        </Card.Footer>
        </Card>
        </CardGroup>
        <br/> <br/>
  
        <div className="App" style={{marginTop: "0%", cursor: "pointer"}}>
          <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
          {readMore && extraContent}
        </div>
        
</>
  );
}
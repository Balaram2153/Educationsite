import React from "react";
import "./Aboutus.css";

export default function Aboutus(){
    return(
        <>
        <section className="main">
          <h1>About us</h1>
          <h3> we are here to provide a better E-learning for Everyone</h3>
        </section>


        <section className="OurProfile">
          <div>
            <img src="https://www.be-networks.be/wp-content/uploads/2018/02/About-us-photo.jpg" alt="" />
          </div>
          <div>
            <h1> Our Profile </h1>
            <h3>
            Edu Planner was founded by Anarghya Communactions Pvt Ltd in 2023 with a vision of providing life-transforming 
            learning experiences to learners around the world. Today, Edu Planner is a global platform for online learning and 
            career development that offers anyone, anywhere, access to online courses.
            </h3>
            <input type="button" value="Read More" />
          </div>
        </section>


      <section className="believe"> <br/> <br/> <br/> <br/> <br/> <br/>
       <div className="believe-left">
        <h1> What we Believe </h1>
        <h3>
          It's never too late to learn anything <br/>
          Learning is the source of human progress <br/> <br/>
          It has the power to transform our lives <br/>
          for ourselves, <br/>for our families, <br/>for our communities. <br/> <br/>
          No matter who we are or where we are, <br/>learning empowers us to change and grow. <br/> <br/>
          And that’s why Anarghya Edu Planner is here. <br/> <br/>
          So that anyone, anywhere has the power to transform their lives through learning.
        </h3>
        </div>
        <div className="believe-right">
          <img src="https://t4.ftcdn.net/jpg/01/20/83/81/360_F_120838135_s54JXlnlzX4tvCjNStA4zHTBFLZQMFQ4.jpg" alt="" />
        </div>
      </section>

      <section>
        <div className="why">
          <div className="why-left">
            <img src="https://www.advantagemedia.co.uk/themes/advantage_media/resources/img/why-choose-us.jpg" alt="" />
          </div>

          <div className="why-right">
            <h1> Why Choose Us? </h1>
            <h3> The website of Anarghya Edu Planner exists to expand learning opportunities beyond physical 
                    campus spaces in order to provide learners with high-quality, accessible, flexible, and active online 
                    learning to the expansion of knowledge  </h3>
          </div>
        </div>
      </section>

      <div className="">
        <h1> Our media partners </h1>
      </div> <br/> <br/>

      <div className="logos">
        <div className="media">
        <img src="googlelogo.png" alt=""/> <br/> <br/>
        <img src="oraclelogo.png" alt=""/>  <br/> <br/>
        <img src="microsoftlogo.jpg" alt=""/>  <br/> <br/>
        <img src="ibmlogo.png" alt=""/> <br/>  <br/>
        </div>

      </div>

        <section className="mission">
        <br/> <br/> <br/> <br/> <br/> <br/>
        <section className="aboutcards"> 
            <div className="aboutcard text-bg-primary mb-3" style={{width: "25rem"}} id="card-1">
                <div className="card-header"> Our Mission 
                <br/> ------------------------
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize: "1.3rem"}}> Our mission is reflected and integrated into our online programs and 
                    courses in order to demonstrate our commitment to the expansion of knowledge in the service of humanity. </p>
                </div>
              </div>
              
              <div className="aboutcard text-bg-success mb-3" style={{width: "25rem"}} id="card-2">
                <div className="card-header"> Our Vision 
                <br/> ------------------------
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize: "1.3rem"}}> The website of Anarghya Edu Planner exists to expand learning opportunities beyond physical 
                    campus spaces in order to provide learners with high-quality, accessible, flexible, and active online 
                    learning to the expansion of knowledge </p>
                </div>
              </div>
         
              <div className="aboutcard text-bg-dark mb-3" style={{width: "25rem"}} id="card-3">
                <div className="card-header"> Our Goal 
                <br/> -------------------------
                </div>
                <div className="card-body">
                  <p className="card-text" style={{fontSize: "1.3rem"}}> We’re committed to improving lives through learning. Dig into our original 
                    research to learn about the forces that are shaping the modern workplace. </p>
                </div>
              </div>
        </section>
        </section>
        </>
    )
}
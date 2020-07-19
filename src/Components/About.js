import React from 'react';

const About = ({mainData}) => {
   if(mainData){
      var profilepic= "images/"+mainData.image;
      var bio = mainData.bio;
      var email = mainData.email;
      var resumeDownload = mainData.resumedownload;
   }
    
   return (
      <section id="about">
         <div className="row">
            <div className="three columns"><img className="profile-pic"  src={profilepic} alt="abk" /></div>
            <div className="nine columns main-col">
               <h2>About Me</h2>
               <p>{bio}</p>
               <p>Shoot me an e-mail <span>{email}</span> or let's connect on social media.</p>
               <div className="row">
                  <div className="columns download">
                     <p><a href={resumeDownload} className="button" target="_blank"><i className="fa fa-download"></i>Download CV</a></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
}

export default About;

import React from 'react';


const Header = ({mainData}) => {
    if(mainData){
        var name = mainData.name;
        var email = mainData.email;
        var occupation= mainData.occupation;
        var city= mainData.city;
        var networks= mainData.social.map(function(network){
            return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>;
        });
    }

    return (
      <header id="home">
        <div className="row banner">
           <div className="banner-text">
              <h1 className="responsive-headline">My name is {name}.</h1>
              <h3>I'm a <span>{city}</span> based <span>{occupation}</span>. Shoot me an email at <span>{email}</span> or let's connect on social media.</h3>
              <hr />
              <ul className="social">{networks}</ul>
           </div>
        </div>
      </header>
    );
};

export default Header;

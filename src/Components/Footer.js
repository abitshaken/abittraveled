import React from 'react';

const Footer = ({mainData}) => {
  if(mainData){
    var networks= mainData.social.map(function(network){
      return <li key={network.name}><a href={network.url} target="_blank"><i className={network.className}></i></a></li>
    })
  }
  
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {networks}
          </ul>
          <ul className="copyright">
            <li>&copy; Copyright 2020 <a title="a bit traveled" href="http://www.abittraveled.com/">a bit traveled</a></li>
            <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
          </ul>
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"></i></a></div>
      </div>
    </footer>
  );
}

export default Footer;

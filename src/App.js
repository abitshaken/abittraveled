import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Header from './Components/Header';

const App = () => {
  const [resData, setResData] = useState();

  const fetchData = async () => {
    try{
      const response = await axios('/resumeData.json');
      setResData(response.data);
    } catch (e){
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  },[]);


  if(resData){
    const load = document.getElementById('siteLoading');
    if(load) {
      load.outerHTML = '';
    }

    return (
      <Fragment>
        <Header mainData={resData.main} />
      </Fragment>
    );
  } else{
    return (
      <Fragment>
        <h1>Loading or Error</h1>
      </Fragment>
    );
  }
};

export default App;

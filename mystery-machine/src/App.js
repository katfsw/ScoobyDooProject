/*
  ---------------------------------------------------------------------------------------------------------------
    You will need to add to this file.
    Please remain within the hyphenated lines, as the surrounding elements all have CSS styles applied.
  ---------------------------------------------------------------------------------------------------------------
*/
import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './Components/Footer'
// I have already imported the Card Component, it has styles applied to it.
// You just need to Call the Component after you map through your Data and return the Data to the Card.
import Card from './Components/Card';
/* 
  ---------------------------------------------------------------------------------------------------------------
    Here you will import your Axios Dependancy.

    
  ---------------------------------------------------------------------------------------------------------------
*/

export default function App() {

    /* 
    ---------------------------------------------------------------------------------------------------------------
      Here we will declare our State.
      Here we will use Axios to fetch our Data.
      Here we will set our returned Data to our State.

      Please look in the README.md to figure out the URL you'll use to fetch Data.
      


      ---------------------------------------------------------------------------------------------------------------
    */
  return (<>
    <img
        className="scooby-logo"
        alt="Scooby Doo Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Be_Cool%2C_Scooby-Doo%21_logotype.png"
      />
    <div className="flex-div">
      {/*
        ---------------------------------------------------------------------------------------------------------------
        Here, we can map over our data inside of this Div with the className="flex-div".
        This div has styles applied to it. 
        - You will Map over your Data
        - You will return the <Card/> component with a key



        ---------------------------------------------------------------------------------------------------------------
      */}
    </div>
    <Footer/>
    </>
  );
}

// Scooby Doo API:
// https://scoobydooapi.herokuapp.com/api/characters

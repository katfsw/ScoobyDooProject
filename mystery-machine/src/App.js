//You will need to add to this file.
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card';
import axios from 'axios';
import Footer from './Components/Footer'

export default function App() {

  const [char, setChar] = useState([])

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://scoobydooapi.herokuapp.com/api/characters')
      .then(res => {
        setChar(res.data)
      })
      .catch(err => {
        console.log('Error:', err)
      });
  }, []);

  return (<>
    <img
        className="scooby-logo"
        alt="Scooby Doo Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/2/28/Be_Cool%2C_Scooby-Doo%21_logotype.png"
      />
    <div className="flex-div">
      {
        char.map(character => (
           <Card character={character} key={character.id}/>
     ))
      }
    </div>
    <Footer/>
    </>
  );
}

// Scooby Doo API:
// https://scoobydooapi.herokuapp.com/api/characters

/*
  ---------------------------------------------------------------------------------------------------------------
  
    You will need to add to this file.
    Pass the data around as props to the Card. Each element has styles applied to it in CSS.
    Look at your data, where do you want to pass it?

  ---------------------------------------------------------------------------------------------------------------
*/
import React from 'react';

const Card = () => {
  return (
    <div className="card-Parent">
      <h1 className="card-title">
          Name:
      </h1>
      <img className="card-image" alt="" src="" />
      <p className="card-gender">
          Gender:
      </p>
      <p className="card-id">
          ID: 
      </p>
    </div>
  );
};

export default Card;

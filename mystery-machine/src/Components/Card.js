//You will need to add to this file.

import React from 'react';

const Card = (props) => {
  return (
    <div className="card-Parent">
      <h1 className="card-title">{props.character.name} </h1>
      <img className="card-image" alt="" src={props.character.imageurl} />
      <p className="card-gender">Gender: {props.character.gender} </p>
      <p className="card-id">id: {props.character.id} </p>
    </div>
  );
};

export default Card;

import React from "react";

import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div id="Card" className="tc dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="Robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p> {email}</p>
      </div>
    </div>
  );
};

export default Card;

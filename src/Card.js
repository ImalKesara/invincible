import React from "react";
import "./index.css";

const Card = () => {
  return (
    <div>
      <img src="https://robohash.org/ddd?250x250" alt="robots" />
      <div>
        <h2>Jack Carr</h2>
        <p>
          React is cool. Jack Carr is a .New York Times bestselling author and
          former Navy SEAL Sniper. He lives with his wife and three children in
          Park City, Utah. He is the author of The Terminal List, True Believer,
          Savage Son, The Devil’s Hand, In the Blood, and Only the Dead
        </p>
      </div>
    </div>
  );
};

Card();

export default Card;

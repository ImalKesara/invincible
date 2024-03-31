import React from "react";
import Card from "./Card";

const Cardlist = ({ robots }) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          id={robot.id}
          name={robot.name}
          username={robot.username}
          email={robot.email}
        />
      ))}
    </div>
  );
};

export default Cardlist;

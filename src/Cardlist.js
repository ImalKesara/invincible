import React from "react";
import Card from "./Card";

// const Cardlist = ({ robots }) => {
//   return (
//     <div>
//       {robots.map((robot) => (
//         <Card
//           key={robot.id}
//           id={robot.id}
//           name={robot.name}
//           username={robot.username}
//           email={robot.email}
//         />
//       ))}
//     </div>
//   );
// };
const Cardlist = ({ robots }) => {
  const cardComponent = robots.map((user, i) => {
    return (
      <Card
        id={robots[i].id}
        name={robots[i].name}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};

export default Cardlist;

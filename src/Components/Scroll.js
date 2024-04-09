import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "none",
        height: "750px",
        maxWidth: "1200px",
        margin: "50px auto",
        padding: "20px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;

import React from "react";

const TheComp = React.memo(props => {
  const style_li = {
    objectFit: "cover",
    width: "150px",
    height: "150px",
    borderRadius: "50%"
  };
  return (
    <li>
      <img src={props.imgUrl} alt={props.id} style={{ ...style_li }} /> | (Time:{" "}
      {Date.now()})
    </li>
  );
});

export default TheComp;

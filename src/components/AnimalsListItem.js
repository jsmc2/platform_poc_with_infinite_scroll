import React from "react";

const style_presentSelfNested = { marginLeft: "20px" };

const TheComp = React.memo(props => {
  const style_li = {
    objectFit: "cover",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    ...style_presentSelfNested
  };
  return (
    <li>
      <img src={props.imgUrl} alt={props.id} style={{ ...style_li }} />
      AnimalListItem (Memoed -|- Time: {Date.now()})
    </li>
  );
});

export default TheComp;

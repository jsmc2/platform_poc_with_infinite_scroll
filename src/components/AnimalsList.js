import React from "react";
import AnimalsListItem from "./AnimalsListItem";

const style_presentSelfNested = { marginLeft: "20px" };

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default React.memo(TheComp);
function TheComp(props) {
  const listItems = !props.list
    ? []
    : props.list.map(item => (
        <AnimalsListItem key={item.id} imgUrl={item.url} id={item.id} />
      ));

  const style_ul = {
    listStyleType: "none"
  };
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= AnimalList (Memoed -|- Time: {Date.now()}) =-
      <ul style={{ ...style_ul }}>{listItems}</ul>
    </div>
  );
}

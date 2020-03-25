import React from "react";
import Timestamp from "./Timestamp";
import StoreWrap from "./Platform_StoreWrap";

function TheComp(props) {
  return (
    <div>
      <h4>-= StoreTestPerson =-</h4>
      {props.greeting} My name is {props.name}, age is {props.age}
      <Timestamp />
    </div>
  );
}

const propsMapping = {
  id: "persons.bob.id",
  age: "persons.bob.age",
  name: "persons.bob.name"
};
const Output = React.memo(props => {
  return <StoreWrap {...props} Comp={TheComp} propsMapping={propsMapping} />;
});

export default Output;

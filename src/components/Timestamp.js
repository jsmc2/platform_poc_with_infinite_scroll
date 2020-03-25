import React from "react";

const ThisComp = React.memo(props => {
  return (
    <div>
      <h4>-= Timestampp =-</h4>
      {Date.now()}
    </div>
  );
});

const Output = React.memo(props => {
  return <ThisComp />;
});

export default Output;

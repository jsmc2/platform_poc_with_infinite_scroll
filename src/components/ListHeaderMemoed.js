import React from "react";

const TheComp = React.memo(props => {
  return <div>-= ListHeaderMemoed | (Time: {Date.now()}) =-</div>;
});

export default TheComp;

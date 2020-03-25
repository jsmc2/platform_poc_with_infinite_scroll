import React from "react";

const style_presentSelfNested = { marginLeft: "20px" };

const TheComp = props => {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= ListSubheader (Time: {Date.now()}) =-
    </div>
  );
};

export default TheComp;

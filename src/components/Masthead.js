import React from "react";

const style_presentSelfNested = { marginLeft: "20px" };

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default TheComp;
function TheComp(props) {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= Masthead (Time: {Date.now()}) =-
    </div>
  );
}

import React from "react";

const style_presentSelfNested = { marginLeft: "20px" };

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default React.memo(TheComp);
function TheComp(props) {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= ListHeader (Memoed -|- Time: {Date.now()}) =-
    </div>
  );
}

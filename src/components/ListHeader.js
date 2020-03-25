import React from "react";

const style_presentSelfNested = { marginLeft: "20px" };

const TheComp = React.memo(props => {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= ListHeader (Memoed -|- Time: {Date.now()}) =-
    </div>
  );
});

export default TheComp;

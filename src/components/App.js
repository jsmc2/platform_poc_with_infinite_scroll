import React from "react";
import withPlatformWrap from "../platform/Platform_withPlatformWrap";
import Masthead from "./Masthead";
import FelinesPage from "./FelinesPage";

const style_presentSelfNested = { marginLeft: "20px" };

function TheComp() {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= App (Time: {Date.now()}) =-
      <Masthead />
      <FelinesPage />
    </div>
  );
}

export default withPlatformWrap(TheComp);

import React from "react";
import { withPlatformHOC } from "../platform";
import Masthead from "./Masthead";
import FelinesPage from "./FelinesPage";

const style_presentSelfNested = { marginLeft: "20px" };

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default withPlatformHOC(TheComp);
function TheComp(props) {
  return (
    <div style={{ ...style_presentSelfNested }}>
      -= App (Time: {Date.now()}) =-
      <Masthead />
      <FelinesPage />
    </div>
  );
}

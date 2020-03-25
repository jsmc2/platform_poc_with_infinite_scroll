import React from "react";
import withPlatformWrap from "../platform/Platform_withPlatformWrap";
import Masthead from "./Masthead";
import FelinesPage from "./FelinesPage";

function TheComp() {
  return (
    <div className="App">
      -= App | (Time: {Date.now()}) =-
      <Masthead />
      <FelinesPage />
    </div>
  );
}

export default withPlatformWrap(TheComp);

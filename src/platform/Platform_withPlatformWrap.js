import React from "react";
import PlatformWrap from "./Platform_PlatformWrap";

function withPlatformWrap(WrappedComp) {
  return props => {
    return (
      <PlatformWrap>
        <WrappedComp />
      </PlatformWrap>
    );
  };
}

export default withPlatformWrap;

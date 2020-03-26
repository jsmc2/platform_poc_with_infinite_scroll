import React from "react";
///import platform from "../platform/platform";
import { StoreChangedContext } from "./Platform_Contexts";

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default withStoreHOC;
function withStoreHOC(propsMapping, WrappedComp) {
  return props => {
    return (
      <StoreWrap
        {...props}
        WrappedComp={WrappedComp}
        propsMapping={propsMapping}
      />
    );
  };
}

// HOISTED WRAPPER COMPONENT FOR withStoreHOC.
const StoreWrap = React.memo(_props => {
  const props = { ..._props };
  const store = React.useContext(StoreChangedContext);
  const WrappedComp = props.WrappedComp;
  const propsMapping = props.propsMapping;
  const propNames = Object.keys(propsMapping);
  const resolvedPropsMapping = {};
  for (let idx = 0; idx < propNames.length; idx++) {
    let propName = propNames[idx];
    resolvedPropsMapping[propName] = store.readData(propsMapping[propName]);
  }
  delete props.WrappedComp;
  delete props.propsMapping;
  return <WrappedComp {...resolvedPropsMapping} {...props} />;
});

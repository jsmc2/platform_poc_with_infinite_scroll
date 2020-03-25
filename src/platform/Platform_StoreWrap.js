import React from "react";
///import platform from "../platform/platform";
import { StoreChangedContext } from "../platform/Platform_Contexts";

const TheComp = React.memo(_props => {
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
  console.log(">>> @Platform_StoreWrap | props: ", props);
  return <WrappedComp {...resolvedPropsMapping} {...props} />;
});

export default TheComp;

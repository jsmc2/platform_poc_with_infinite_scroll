import React from "react";
///import platform from "../platform/platform";
import { StoreChangedContext } from "../platform/Platform_Contexts";

const TheComp = React.memo(_props => {
  const props = { ..._props };
  const store = React.useContext(StoreChangedContext);
  const Comp = props.Comp;
  const propsMapping = props.propsMapping;
  const propNames = Object.keys(propsMapping);
  const resolvedPropsMapping = {};
  for (let idx = 0; idx < propNames.length; idx++) {
    let propName = propNames[idx];
    resolvedPropsMapping[propName] = store.readData(propsMapping[propName]);
  }
  delete props.Comp;
  delete props.propsMapping;
  return <Comp {...resolvedPropsMapping} {...props} />;
});

export default TheComp;

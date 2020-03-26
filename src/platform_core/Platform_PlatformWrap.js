import React from "react";
///import platform from "../appPlatform";
import { StoreChangedContext } from "./Platform_Contexts";

//::DEFAULT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export default PlatformWrap;
function PlatformWrap(props) {
  ///platform.StoreWrap = StoreWrap;
  const [storeState, setStoreState] = React.useState(props.store);
  React.useEffect(() => {
    // Temp: Follow sTo removes fetch error mask screen due to problem at codesandbox.
    ///document.getElementById("root").nextSibling.style.display = "none";
    setTimeout(() => {
      if (document.getElementsByTagName("iframe")[0]) {
        document.getElementsByTagName("iframe")[0].style.display = "none";
      }
    }, 500);

    props.store.setCommitHandler(store => {
      const newStore = { ...store };
      setStoreState(newStore);
    });
    // This will trigger rendering to show store changes after
    // ...sub components triggered store writes on their mount.
    const newStore = { ...props.store };
    setStoreState(newStore);
  }, []);
  return (
    <StoreChangedContext.Provider value={storeState}>
      <>
        -= Platform Wrap =-
        {props.children}
      </>
    </StoreChangedContext.Provider>
  );
}

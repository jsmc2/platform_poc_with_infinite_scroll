import React from "react";
import { StoreChangedContext } from "./Platform_Contexts";

//::EXPORT::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
export const getHOC = store => {
  return withPlatformWrap;

  //::HOISTED::::::::::-::::::::::-::::::::::-::::::::::-::::::::::
  function withPlatformWrap(WrappedComp) {
    return props => {
      return (
        <PlatformWrap>
          <WrappedComp />
        </PlatformWrap>
      );
    };
  }

  // HOISTED COMPONENT WRAPPER FOR HOC.
  function PlatformWrap({ children }) {
    const [storeState, setStoreState] = React.useState(store);
    React.useEffect(() => {
      // Temp: Following removes fetch error mask screen due to problem at codesandbox.
      ///document.getElementById("root").nextSibling.style.display = "none";
      setTimeout(() => {
        if (document.getElementsByTagName("iframe")[0]) {
          document.getElementsByTagName("iframe")[0].style.display = "none";
        }
      }, 500);

      store.setCommitHandler(store => {
        const newStore = { ...store };
        setStoreState(newStore);
      });
      // This will trigger rendering to show store changes after
      // ...sub components triggered store writes on their mount.
      const newStore = { ...store };
      setStoreState(newStore);
    }, []);
    return (
      <StoreChangedContext.Provider value={storeState}>
        <>
          -= Platform Wrap =-
          {children}
        </>
      </StoreChangedContext.Provider>
    );
  }
};

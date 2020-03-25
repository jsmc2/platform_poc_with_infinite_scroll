/*
import React from "react";
import platform from "../platform/platform";

const StoreChangedContext = platform.StoreChangedContext;
const exposedStorePojo = platform.store.getStorePojo();

console.log(">>> @Init | platform: ", platform);
console.log(">>> @Init | StoreChangedContext: ", StoreChangedContext);
console.log(">>> @Init | exposedStorePojo: ", exposedStorePojo);

function Platform() {
  const [storePojoState, setStorePojoState] = React.useState(exposedStorePojo);
  React.useEffect(() => {
    platform.store.setCommitHandler(storePojo => {
      setStorePojoState(storePojo);
    });
    console.log("Hello World");
  }, []);
  return (
    <StoreChangedContext.Provider value={storePojoState.commitTS}>
      <div> -= Platform =- </div>
      <App />
    </StoreChangedContext.Provider>
  );
}
export default Platform;
*/
